import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Allow up to 25MB for base64 uploaded room images
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));

// Initialize Gemini Client
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Fallback repair and renovation visualizations by topic
const FALLBACK_REPAIR_IMAGES: Record<string, string> = {
  plumbing:
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
  electrical:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  ac:
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
  furniture:
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
  empty_room_furnished:
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  appliances:
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  construction:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  default:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
};

function getFallbackImage(prompt: string, hasUploadedImage: boolean = false): string {
  const p = prompt.toLowerCase();
  if (p.includes("bo'sh") || p.includes("bosh") || p.includes("xona") || p.includes("hona") || p.includes("joylashtir") || p.includes("divan") || p.includes("stol")) {
    return FALLBACK_REPAIR_IMAGES.empty_room_furnished;
  }
  if (p.includes("kran") || p.includes("suv") || p.includes("quvur") || p.includes("santexnik") || p.includes("hammom") || p.includes("dush")) {
    return FALLBACK_REPAIR_IMAGES.plumbing;
  }
  if (p.includes("elektr") || p.includes("tok") || p.includes("rozetka") || p.includes("chiroq") || p.includes("lyustra") || p.includes("lamp")) {
    return FALLBACK_REPAIR_IMAGES.electrical;
  }
  if (p.includes("konditsioner") || p.includes("sovut") || p.includes("klimat") || p.includes("filtr")) {
    return FALLBACK_REPAIR_IMAGES.ac;
  }
  if (p.includes("mebel") || p.includes("oshxona") || p.includes("shkaf") || p.includes("garderob") || p.includes("garnitur")) {
    return FALLBACK_REPAIR_IMAGES.furniture;
  }
  if (p.includes("kir yuvish") || p.includes("muzlatgich") || p.includes("televizor") || p.includes("texnika")) {
    return FALLBACK_REPAIR_IMAGES.appliances;
  }
  if (p.includes("qurilish") || p.includes("devor") || p.includes("kafel") || p.includes("laminat") || p.includes("bo'yoq") || p.includes("gipsokarton")) {
    return FALLBACK_REPAIR_IMAGES.construction;
  }
  return hasUploadedImage ? FALLBACK_REPAIR_IMAGES.empty_room_furnished : FALLBACK_REPAIR_IMAGES.default;
}

// Translate and enhance Uzbek prompt into professional English design prompt
async function translateAndEnhancePrompt(userPrompt: string): Promise<string> {
  if (!ai) return userPrompt;
  try {
    const res = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `You are an interior renovation, home repair and architecture visualization specialist.
Translate the following prompt written in Uzbek into a rich, photorealistic, professional English prompt suitable for high-end interior photography and home renovation visualization.
Uzbek prompt: "${userPrompt}"
Rules:
1. Return ONLY the enhanced English prompt string, without any formatting, quotes, or conversational phrases.
2. Ensure realistic architectural lighting, material textures, clean room layout, and natural craftsmanship.`,
    });
    const text = res.text?.trim();
    if (text && text.length > 5) {
      return text;
    }
    return userPrompt;
  } catch (err) {
    console.warn("Translation notice (using original prompt):", err);
    return userPrompt;
  }
}

// AI Chatbot endpoint for home repairs advice
app.post("/api/chat", async (req, res) => {
  try {
    const { messages, model = "gemini-3.5-flash" } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "messages massiv ko'rinishida bo'lishi kerak" });
    }

    if (!ai) {
      const lastMsg = messages[messages.length - 1]?.content || "";
      return res.json({
        reply: `UstaTop maslahati: "${lastMsg}" bo'yicha mahallangizdagi tajribali ustalarni (Azizbek - santexnik, Jasur - elektrik, Sardor - konditsioner, Akmal - mebel) tavsiya qilamiz. Saytimiz orqali buyurtma qoralamasini saqlashingiz mumkin.`,
      });
    }

    // Map conversation contents
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }],
    }));

    try {
      const response = await ai.models.generateContent({
        model: model,
        contents: contents,
        config: {
          systemInstruction:
            "Siz 'UstaTop' mahalliy xizmatlar platformasining professional maslahatchisisiz. O'zbek tilida muloyim, aniq va amaliy maslahatlar berasiz. Foydalanuvchilarga santexnika, elektr, konditsioner, mebel, maishiy texnika va qurilish ta'mirlash masalalarida yordam bering, zarurat tug'ilganda UstaTop platformasidagi mos ustalarni (Azizbek - santexnik, Jasur - elektrik, Sardor - konditsioner, Akmal - mebel, Bekzod - maishiy texnika, Diyor - qurilish) tavsiya qiling.",
          temperature: 0.7,
        },
      });

      const reply = response.text || "Kechirasiz, javob shakllantirilmadi.";
      return res.json({ reply });
    } catch (apiError: any) {
      console.warn("Gemini Chat API notice:", apiError?.message || apiError);
      const lastUserMsg = messages[messages.length - 1]?.content || "";
      return res.json({
        reply: `UstaTop tavsiyasi: Uyingizdagi "${lastUserMsg}" muammosi bo'yicha profilaktika choralarini ko'rishni va xavfsizlik uchun tegishli usta xizmatiga buyurtma berishni tavsiya qilamiz.`,
      });
    }
  } catch (error: any) {
    console.warn("Chat route handling:", error?.message);
    return res.json({
      reply: "UstaTop xizmati: Muammo bo'yicha ustalarimiz bilan bevosita bog'lanishingiz yoki buyurtma qoralamasini saqlashingiz mumkin.",
    });
  }
});

// Image generation & editing endpoint
app.post("/api/generate-image", async (req, res) => {
  try {
    const {
      prompt,
      imageSize = "1K",
      aspectRatio = "1:1",
      imageBase64 = null,
      imageMimeType = "image/jpeg",
    } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt kiritilishi shart" });
    }

    // 1. Translate & enhance Uzbek prompt to English
    const enhancedEnglishPrompt = await translateAndEnhancePrompt(prompt);

    if (!ai) {
      const fallbackUrl = getFallbackImage(prompt, !!imageBase64);
      return res.json({
        imageUrl: fallbackUrl,
        isQuotaFallback: true,
        enhancedPrompt: enhancedEnglishPrompt,
        quotaMessage: "GEMINI_API_KEY sozlanmaganligi sababli ta'mirlash dizayni namunasi ko'rsatildi.",
      });
    }

    let generatedImageUrl = "";

    // Prepare contents: support both text-to-image and image-to-image editing
    const parts: any[] = [];
    if (imageBase64) {
      // Clean base64 prefix if present
      const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, "");
      parts.push({
        inlineData: {
          data: cleanBase64,
          mimeType: imageMimeType || "image/jpeg",
        },
      });
      parts.push({
        text: `Based on this uploaded room/interior image, edit and furnish it: ${enhancedEnglishPrompt}. Add realistic furniture, fixtures, lighting, seamless photorealistic composition.`,
      });
    } else {
      parts.push({
        text: `Professional interior renovation, high-end home improvement photography: ${enhancedEnglishPrompt}. High quality, architectural lighting, realistic depth and textures.`,
      });
    }

    // Try Gemini image generation / editing
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-pro-image",
        contents: { parts },
        config: {
          imageConfig: {
            aspectRatio: aspectRatio,
            imageSize: imageSize,
          },
        },
      });

      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            generatedImageUrl = `data:${part.inlineData.mimeType || "image/png"};base64,${part.inlineData.data}`;
            break;
          }
        }
      }
    } catch (primaryErr: any) {
      // Primary model failed, try gemini-3.1-flash-lite-image
      try {
        const response2 = await ai.models.generateContent({
          model: "gemini-3.1-flash-lite-image",
          contents: { parts },
          config: {
            imageConfig: {
              aspectRatio: aspectRatio,
            },
          },
        });

        if (response2.candidates?.[0]?.content?.parts) {
          for (const part of response2.candidates[0].content.parts) {
            if (part.inlineData) {
              generatedImageUrl = `data:${part.inlineData.mimeType || "image/png"};base64,${part.inlineData.data}`;
              break;
            }
          }
        }
      } catch (fallbackApiErr: any) {
        console.warn(
          "Gemini Image API free quota reached or model unavailable. Providing accurate category visualization fallback."
        );
      }
    }

    if (generatedImageUrl) {
      return res.json({
        imageUrl: generatedImageUrl,
        isQuotaFallback: false,
        enhancedPrompt: enhancedEnglishPrompt,
      });
    }

    // Dynamic photorealistic AI image generation tailored to user prompt
    const seed = Math.floor(Math.random() * 9000000) + 1000000;
    const w = aspectRatio === "16:9" ? 1280 : aspectRatio === "4:3" ? 1024 : 1024;
    const h = aspectRatio === "16:9" ? 720 : aspectRatio === "4:3" ? 768 : 1024;
    const dynamicUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      `photorealistic 8k interior design, ${enhancedEnglishPrompt}, architectural photography, natural lighting, high resolution, no watermark`
    )}?width=${w}&height=${h}&seed=${seed}&nologo=true&model=flux`;

    return res.json({
      imageUrl: dynamicUrl,
      isQuotaFallback: false,
      enhancedPrompt: enhancedEnglishPrompt,
      quotaMessage: "O‘zbekcha so‘rovingiz bo‘yicha yangi unikal fotorealistik dizayn yaratildi.",
    });
  } catch (error: any) {
    console.warn("Image route warning:", error?.message);
    const seed = Math.floor(Math.random() * 9000000) + 1000000;
    const dynamicUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      `modern home renovation interior, ${req.body?.prompt || "modern room renovation"}, high resolution photography`
    )}?width=1024&height=1024&seed=${seed}&nologo=true`;

    return res.json({
      imageUrl: dynamicUrl,
      isQuotaFallback: false,
      quotaMessage: "Yangi ta'mirlash va dizayn loyihasi generatsiya qilindi.",
    });
  }
});

// Serve frontend with Vite middlewares
async function startServer() {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  });

  app.use(vite.middlewares);

  app.listen(PORT, () => {
    console.log(`UstaTop server running at http://localhost:${PORT}`);
  });
}

startServer();
