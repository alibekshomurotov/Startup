/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * UstaTop - Mahallada usta topish
 * Vanilla JavaScript (script.js)
 * Ultra-modern, responsive, GitHub Pages ready
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. O'ZBEKISTON VILOYATLARI VA TUMANLARI RO'YXATI
     ========================================================================== */
  const UZBEKISTAN_REGIONS = {
    "Toshkent shahri": [
      "Chilonzor",
      "Yunusobod",
      "Mirzo Ulug‘bek",
      "Olmazor",
      "Yashnobod",
      "Shayxontohur",
      "Yakkasaroy",
      "Sergeli",
      "Uchtepa",
      "Mirobod",
      "Bektemir",
      "Yangihayot"
    ],
    "Toshkent viloyati": [
      "Nurafshon sh.",
      "Chirchiq sh.",
      "Angren sh.",
      "Olmaliq sh.",
      "Yangiyo‘l sh.",
      "Bekobod sh.",
      "Zangiota t.",
      "Qibray t.",
      "Parkent t.",
      "Bo‘stonliq t.",
      "Toshkent t.",
      "Chinoz t.",
      "Yuqori Chirchiq t."
    ],
    "Samarqand viloyati": [
      "Samarqand sh.",
      "Kattaqo‘rg‘on sh.",
      "Pastdarg‘om t.",
      "Urgut t.",
      "Toyloq t.",
      "Bulung‘ur t.",
      "Samarqand t.",
      "Ishtixon t.",
      "Oqdaryo t.",
      "Payariq t."
    ],
    "Farg‘ona viloyati": [
      "Farg‘ona sh.",
      "Qo‘qon sh.",
      "Marg‘ilon sh.",
      "Quvasoy sh.",
      "Rishton t.",
      "Oltiariq t.",
      "Quva t.",
      "Beshariq t.",
      "Uchko‘prik t.",
      "Bog‘dod t."
    ],
    "Andijon viloyati": [
      "Andijon sh.",
      "Xonobod sh.",
      "Asaka t.",
      "Shahrixon t.",
      "Xo‘jaobod t.",
      "Baliqchi t.",
      "Marhamat t.",
      "Oltinko‘l t.",
      "Buloqboshi t."
    ],
    "Namangan viloyati": [
      "Namangan sh.",
      "Chortoq t.",
      "Chust t.",
      "Pop t.",
      "Kosonsoy t.",
      "To‘raqo‘rg‘on t.",
      "Uchqo‘rg‘on t.",
      "Uychi t."
    ],
    "Buxoro viloyati": [
      "Buxoro sh.",
      "Kogon sh.",
      "G‘ijduvon t.",
      "Vobkent t.",
      "Qorako‘l t.",
      "Jondor t.",
      "Shofirkon t.",
      "Romitan t."
    ],
    "Xorazm viloyati": [
      "Urganch sh.",
      "Xiva sh.",
      "Xonqa t.",
      "Shovot t.",
      "Gurlan t.",
      "Hazorasp t.",
      "Yangiariq t.",
      "Qo‘shko‘pir t."
    ],
    "Qashqadaryo viloyati": [
      "Qarshi sh.",
      "Shahrisabz sh.",
      "Koson t.",
      "Kitob t.",
      "Yakkabog‘ t.",
      "G‘uzor t.",
      "Qamashi t.",
      "Nishon t."
    ],
    "Surxondaryo viloyati": [
      "Termiz sh.",
      "Denov t.",
      "Sho‘rchi t.",
      "Sherobod t.",
      "Jarqo‘rg‘on t.",
      "Boysun t.",
      "Qumqo‘rg‘on t.",
      "Sariosiyo t."
    ],
    "Jizzax viloyati": [
      "Jizzax sh.",
      "Zomin t.",
      "G‘allaorol t.",
      "Sharof Rashidov t.",
      "Paxtakor t.",
      "Do‘stlik t.",
      "Zarbdor t."
    ],
    "Sirdaryo viloyati": [
      "Guliston sh.",
      "Shirin sh.",
      "Yangiyer sh.",
      "Boyovut t.",
      "Sardoba t.",
      "Sayxunobod t.",
      "Sirdaryo t."
    ],
    "Navoiy viloyati": [
      "Navoiy sh.",
      "Zarafshon sh.",
      "Karmana t.",
      "Qiziltepa t.",
      "Xatirchi t.",
      "Nurota t.",
      "Konimex t."
    ],
    "Qoraqalpog‘iston Respublikasi": [
      "Nukus sh.",
      "Xo‘jayli t.",
      "Qo‘ng‘irot t.",
      "Beruniy t.",
      "To‘rtko‘l t.",
      "Amudaryo t.",
      "Chimboy t.",
      "Mo‘ynoq t."
    ]
  };

  /* ==========================================================================
     2. NAMUNAVIY USTALAR MA'LUMOTLARI (6 TA USTA)
     ========================================================================== */
  const MASTERS_DATA = [
    {
      id: 1,
      name: "Azizbek",
      service: "Santexnik",
      region: "Toshkent shahri",
      district: "Chilonzor",
      price: 80000,
      priceFormatted: "80 000 so‘mdan",
      rating: 4.9,
      reviewsCount: 48,
      experience: "7 yil",
      phone: "+998 90 123 45 67",
      bio: "Santexnika sohasida 7 yillik boy amaliy tajribaga ega usta. Kranlar, vanna, dush kabinalari, suv quvurlari va isitish tizimlarini sifatli o‘rnatish va ta’mirlash.",
      specialties: ["Kran va smesitel ta'miri", "Quvurlar montaji", "Unitaz va rakovina o'rnatish", "Isitish tizimlari"],
      workingHours: "08:00 - 20:00",
      guarantee: "6 oy kafolat",
      completedJobs: 320
    },
    {
      id: 2,
      name: "Jasur",
      service: "Elektrik",
      region: "Toshkent shahri",
      district: "Yunusobod",
      price: 70000,
      priceFormatted: "70 000 so‘mdan",
      rating: 5.0,
      reviewsCount: 62,
      experience: "9 yil",
      phone: "+998 93 234 56 78",
      bio: "Malakali elektrik muhandis. Xonadonlar va ofislarda to‘liq elektr simlarini tortish, avtomatlarni almashtirish, qisqa tutashuvlarni bartaraf etish va lyustra o‘rnatish.",
      specialties: ["Qisqa tutashuvni tuzatish", "Elektr shitlari", "Lyustra va yoritgichlar", "Rozetka va viklyuchatellar"],
      workingHours: "08:30 - 21:00 (Favqulodda 24/7)",
      guarantee: "1 yil kafolat",
      completedJobs: 450
    },
    {
      id: 3,
      name: "Sardor",
      service: "Konditsioner ustasi",
      region: "Toshkent shahri",
      district: "Mirzo Ulug‘bek",
      price: 120000,
      priceFormatted: "120 000 so‘mdan",
      rating: 4.8,
      reviewsCount: 39,
      experience: "6 yil",
      phone: "+998 97 345 67 89",
      bio: "Barcha rusumdagi konditsionerlarni o‘rnatish, tozalash, freon gazi quyish va elektron platadagi nosozliklarni tuzatish bo‘yicha tajribali mutaxassis.",
      specialties: ["Freon R410/R22 quyish", "Chuqur antibakterial yuvish", "Konditsioner montaji", "Plata ta'miri"],
      workingHours: "09:00 - 20:00",
      guarantee: "3 oy kafolat",
      completedJobs: 280
    },
    {
      id: 4,
      name: "Akmal",
      service: "Mebel ustasi",
      region: "Toshkent shahri",
      district: "Chilonzor",
      price: 100000,
      priceFormatted: "100 000 so‘mdan",
      rating: 4.9,
      reviewsCount: 53,
      experience: "8 yil",
      phone: "+998 94 456 78 90",
      bio: "Mebel yig‘ish, eshik mexanizmlari, shkaflar, oshxona garniturlari va yumshoq mebellarni mukammal sozlash hamda qayta tiklash ustasi.",
      specialties: ["Oshxona garnituri yig'ish", "Shkaf-kupe mexanizmlari", "Eshik va ilgaklarni sozlash", "Mebel restavratsiyasi"],
      workingHours: "09:00 - 19:00",
      guarantee: "6 oy kafolat",
      completedJobs: 310
    },
    {
      id: 5,
      name: "Bekzod",
      service: "Maishiy texnika ustasi",
      region: "Toshkent shahri",
      district: "Olmazor",
      price: 90000,
      priceFormatted: "90 000 so‘mdan",
      rating: 4.7,
      reviewsCount: 44,
      experience: "5 yil",
      phone: "+998 99 567 89 01",
      bio: "Kir yuvish mashinalari, changyutgichlar, mikroto‘lqinli pechlar va muzlatkichlarni tez va sifatli diagnostika qilish va ta’mirlash.",
      specialties: ["Kir yuvish mashinasi motori", "Ten va nasos almashtirish", "Muzlatgich freoni", "Elektron blok ta'miri"],
      workingHours: "08:00 - 20:00",
      guarantee: "4 oy kafolat",
      completedJobs: 240
    },
    {
      id: 6,
      name: "Diyor",
      service: "Qurilish ustasi",
      region: "Toshkent shahri",
      district: "Yashnobod",
      price: 150000,
      priceFormatted: "150 000 so‘mdan",
      rating: 5.0,
      reviewsCount: 71,
      experience: "11 yil",
      phone: "+998 91 678 90 12",
      bio: "Kafel yotqizish, gipsokarton, bo‘yoq va shpaklyovka ishlari. Xonadonlarni kapital va kosmetik ta’mirlash bo‘yicha professional brigadir.",
      specialties: ["Kafel va granit montaji", "Malyarka va shpaklyovka", "Gipsokarton shiftlar", "Laminat va pol yotqizish"],
      workingHours: "08:00 - 19:00",
      guarantee: "1 yil kafolat",
      completedJobs: 190
    }
  ];

  /* ==========================================================================
     3. ILOVA HOLATI (STATE)
     ========================================================================== */
  const state = {
    filters: {
      category: 'all',
      region: 'all',
      district: 'all',
      search: ''
    },
    ordersFilter: 'all',
    orders: [],
    pendingCancelOrderId: null,
    chatMessages: [
      {
        role: 'model',
        content: "Assalomu alaykum! Men UstaTop aqlli texnik maslahatchisiman. Uyingizdagi muammo (santexnika, kran, tok, konditsioner, mebel) haqida yozing, darhol yechim va usta tavsiya qilaman!"
      }
    ]
  };

  /* ==========================================================================
     4. DOM ELEMENTLARINI QIDIRISH
     ========================================================================== */
  const dom = {
    // Nav & Badges
    navMenu: document.getElementById('navMenu'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    ordersCountBadge: document.getElementById('ordersCountBadge'),
    mobileOrdersBadge: document.getElementById('mobileOrdersBadge'),
    mobileBottomNav: document.getElementById('mobileBottomNav'),
    mobileAiBtn: document.getElementById('mobileAiBtn'),

    // Hero Filters
    heroCategorySelect: document.getElementById('heroCategorySelect'),
    heroRegionSelect: document.getElementById('heroRegionSelect'),
    heroDistrictSelect: document.getElementById('heroDistrictSelect'),
    heroSearchBtn: document.getElementById('heroSearchBtn'),
    categoryChipsList: document.getElementById('categoryChipsList'),

    // Masters Section Filters
    searchMasterInput: document.getElementById('searchMasterInput'),
    filterCategory: document.getElementById('filterCategory'),
    filterRegion: document.getElementById('filterRegion'),
    filterDistrict: document.getElementById('filterDistrict'),
    clearFiltersBtn: document.getElementById('clearFiltersBtn'),
    resultsCount: document.getElementById('resultsCount'),
    mastersGrid: document.getElementById('mastersGrid'),
    emptyMastersState: document.getElementById('emptyMastersState'),
    resetFiltersEmptyBtn: document.getElementById('resetFiltersEmptyBtn'),

    // Orders Section
    ordersFilterTabs: document.getElementById('ordersFilterTabs'),
    ordersListWrap: document.getElementById('ordersListWrap'),
    emptyOrdersState: document.getElementById('emptyOrdersState'),

    // Order Booking Modal
    orderModalBackdrop: document.getElementById('orderModalBackdrop'),
    orderModalTitle: document.getElementById('orderModalTitle'),
    orderModalSubtitle: document.getElementById('orderModalSubtitle'),
    closeOrderModalBtn: document.getElementById('closeOrderModalBtn'),
    cancelOrderModalBtn: document.getElementById('cancelOrderModalBtn'),
    orderForm: document.getElementById('orderForm'),
    orderMasterId: document.getElementById('orderMasterId'),
    editingOrderId: document.getElementById('editingOrderId'),
    orderMasterAvatar: document.getElementById('orderMasterAvatar'),
    orderMasterName: document.getElementById('orderMasterName'),
    orderMasterService: document.getElementById('orderMasterService'),
    orderMasterPrice: document.getElementById('orderMasterPrice'),
    orderClientName: document.getElementById('orderClientName'),
    orderPhone: document.getElementById('orderPhone'),
    orderDate: document.getElementById('orderDate'),
    orderTime: document.getElementById('orderTime'),
    orderAddress: document.getElementById('orderAddress'),
    orderProblem: document.getElementById('orderProblem'),

    // Detail Modal
    detailModalBackdrop: document.getElementById('detailModalBackdrop'),
    detailModalTitle: document.getElementById('detailModalTitle'),
    detailModalName: document.getElementById('detailModalName'),
    detailModalBody: document.getElementById('detailModalBody'),
    closeDetailModalBtn: document.getElementById('closeDetailModalBtn'),
    closeDetailFooterBtn: document.getElementById('closeDetailFooterBtn'),
    detailBookBtn: document.getElementById('detailBookBtn'),

    // Cancel Confirm Modal
    confirmCancelModalBackdrop: document.getElementById('confirmCancelModalBackdrop'),
    closeConfirmModalBtn: document.getElementById('closeConfirmModalBtn'),
    rejectCancelBtn: document.getElementById('rejectCancelBtn'),
    confirmCancelBtn: document.getElementById('confirmCancelBtn'),

    // AI Modal
    openAiModalBtn: document.getElementById('openAiModalBtn'),
    aiModalBackdrop: document.getElementById('aiModalBackdrop'),
    closeAiModalBtn: document.getElementById('closeAiModalBtn'),
    aiChatThread: document.getElementById('aiChatThread'),
    aiPromptChips: document.getElementById('aiPromptChips'),
    aiChatForm: document.getElementById('aiChatForm'),
    aiChatInput: document.getElementById('aiChatInput'),
    aiSendBtn: document.getElementById('aiSendBtn'),

    // Toast Container
    toastContainer: document.getElementById('toastContainer')
  };

  /* ==========================================================================
     5. YORDAMCHI FUNKSIYALAR (HELPERS)
     ========================================================================== */
  function escapeHtml(text) {
    if (!text) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function showToast(message, type = 'success') {
    if (!dom.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconText = '✓';
    if (type === 'danger') iconText = '✕';
    if (type === 'info') iconText = 'ℹ';

    toast.innerHTML = `
      <span class="toast-icon">${iconText}</span>
      <span class="toast-msg">${escapeHtml(message)}</span>
    `;

    dom.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 250);
    }, 3500);
  }

  /* ==========================================================================
     6. MA'LUMOTLARNI LOCALSTORAGE DA SAQLASH
     ========================================================================== */
  const STORAGE_KEY = 'ustatop_orders_data_v2';
  const DRAFT_KEY = 'ustatop_order_draft_v2';

  function loadOrdersFromStorage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        state.orders = JSON.parse(saved);
      } else {
        // Namunaviy 1 ta dastlabki faol buyurtma
        state.orders = [
          {
            id: 'ord-101',
            masterId: 1,
            masterName: 'Azizbek',
            masterService: 'Santexnik',
            clientName: 'Alisher Vohidov',
            phone: '+998 90 987 65 43',
            address: 'Chilonzor 7-mavze, 12-uy',
            date: new Date().toISOString().split('T')[0],
            time: 'Ertalab (09:00 - 12:00)',
            problem: 'Krandan doimiy ravishda suv tomchilab oqmoqda, prokladkasini almashtirish kerak.',
            priceFormatted: '80 000 so‘mdan',
            status: 'active',
            createdAt: new Date().toISOString()
          }
        ];
        saveOrdersToStorage();
      }
    } catch (e) {
      console.warn('Storage read error:', e);
      state.orders = [];
    }
    updateOrdersBadge();
    renderOrders();
  }

  function saveOrdersToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.orders));
    } catch (e) {
      console.warn('Storage write error:', e);
    }
    updateOrdersBadge();
    renderOrders();
  }

  function updateOrdersBadge() {
    const activeCount = state.orders.filter(o => o.status === 'active').length;
    if (dom.ordersCountBadge) {
      dom.ordersCountBadge.textContent = activeCount;
    }
    if (dom.mobileOrdersBadge) {
      dom.mobileOrdersBadge.textContent = activeCount;
    }
  }

  function saveOrderDraft() {
    if (!dom.orderForm) return;
    const draft = {
      masterId: dom.orderMasterId.value,
      clientName: dom.orderClientName.value,
      phone: dom.orderPhone.value,
      date: dom.orderDate.value,
      time: dom.orderTime.value,
      address: dom.orderAddress.value,
      problem: dom.orderProblem.value
    };
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    } catch (e) {}
  }

  function clearOrderDraft() {
    try {
      localStorage.removeItem(DRAFT_KEY);
    } catch (e) {}
  }

  /* ==========================================================================
     7. VILOYAT VA TUMANLARNI BOG'LASH (CASCADING DROPDOWN)
     ========================================================================== */
  function populateDistricts(regionName, districtSelectElement) {
    if (!districtSelectElement) return;

    districtSelectElement.innerHTML = '';
    const defaultOpt = document.createElement('option');
    defaultOpt.value = 'all';
    defaultOpt.textContent = 'Barcha tumanlar';
    districtSelectElement.appendChild(defaultOpt);

    if (regionName && regionName !== 'all' && UZBEKISTAN_REGIONS[regionName]) {
      UZBEKISTAN_REGIONS[regionName].forEach(district => {
        const opt = document.createElement('option');
        opt.value = district;
        opt.textContent = district;
        districtSelectElement.appendChild(opt);
      });
      districtSelectElement.disabled = false;
    } else {
      districtSelectElement.disabled = false;
    }
  }

  function setupCascadingDropdowns() {
    // Hero Region change
    if (dom.heroRegionSelect) {
      dom.heroRegionSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        populateDistricts(val, dom.heroDistrictSelect);
        if (dom.filterRegion) {
          dom.filterRegion.value = val;
          populateDistricts(val, dom.filterDistrict);
        }
        state.filters.region = val;
        state.filters.district = 'all';
      });
    }

    // Hero District change
    if (dom.heroDistrictSelect) {
      dom.heroDistrictSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        if (dom.filterDistrict) dom.filterDistrict.value = val;
        state.filters.district = val;
      });
    }

    // Filter Region in masters section
    if (dom.filterRegion) {
      dom.filterRegion.addEventListener('change', (e) => {
        const val = e.target.value;
        populateDistricts(val, dom.filterDistrict);
        if (dom.heroRegionSelect) {
          dom.heroRegionSelect.value = val;
          populateDistricts(val, dom.heroDistrictSelect);
        }
        state.filters.region = val;
        state.filters.district = 'all';
        applyFilters();
      });
    }

    // Filter District in masters section
    if (dom.filterDistrict) {
      dom.filterDistrict.addEventListener('change', (e) => {
        const val = e.target.value;
        if (dom.heroDistrictSelect) dom.heroDistrictSelect.value = val;
        state.filters.district = val;
        applyFilters();
      });
    }

    // Category selectors
    if (dom.heroCategorySelect) {
      dom.heroCategorySelect.addEventListener('change', (e) => {
        const val = e.target.value;
        if (dom.filterCategory) dom.filterCategory.value = val;
        state.filters.category = val;
        updateCategoryChipsActive(val);
      });
    }

    if (dom.filterCategory) {
      dom.filterCategory.addEventListener('change', (e) => {
        const val = e.target.value;
        if (dom.heroCategorySelect) dom.heroCategorySelect.value = val;
        state.filters.category = val;
        updateCategoryChipsActive(val);
        applyFilters();
      });
    }

    // Hero Search Button
    if (dom.heroSearchBtn) {
      dom.heroSearchBtn.addEventListener('click', () => {
        state.filters.category = dom.heroCategorySelect.value;
        state.filters.region = dom.heroRegionSelect.value;
        state.filters.district = dom.heroDistrictSelect.value;

        if (dom.filterCategory) dom.filterCategory.value = state.filters.category;
        if (dom.filterRegion) dom.filterRegion.value = state.filters.region;
        populateDistricts(state.filters.region, dom.filterDistrict);
        if (dom.filterDistrict) dom.filterDistrict.value = state.filters.district;

        updateCategoryChipsActive(state.filters.category);
        applyFilters();

        const mastersSection = document.getElementById('masters-section');
        if (mastersSection) {
          mastersSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Masters text search input
    if (dom.searchMasterInput) {
      dom.searchMasterInput.addEventListener('input', (e) => {
        state.filters.search = e.target.value.toLowerCase().trim();
        applyFilters();
      });
    }

    // Clear filters buttons
    if (dom.clearFiltersBtn) {
      dom.clearFiltersBtn.addEventListener('click', resetAllFilters);
    }
    if (dom.resetFiltersEmptyBtn) {
      dom.resetFiltersEmptyBtn.addEventListener('click', resetAllFilters);
    }

    // Category Chips (Stories / Reels Style Bar)
    if (dom.categoryChipsList) {
      const chips = dom.categoryChipsList.querySelectorAll('.category-chip');
      chips.forEach(chip => {
        chip.addEventListener('click', () => {
          const cat = chip.dataset.category || 'all';
          state.filters.category = cat;
          if (dom.heroCategorySelect) dom.heroCategorySelect.value = cat;
          if (dom.filterCategory) dom.filterCategory.value = cat;
          updateCategoryChipsActive(cat);
          applyFilters();

          // On mobile, gently scroll to masters section if clicked from hero
          if (window.innerWidth < 768) {
            const section = document.getElementById('masters-section');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    }
  }

  function updateCategoryChipsActive(category) {
    if (!dom.categoryChipsList) return;
    const chips = dom.categoryChipsList.querySelectorAll('.category-chip');
    chips.forEach(chip => {
      const chipCat = chip.dataset.category;
      if (chipCat === category) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });
  }

  function resetAllFilters() {
    state.filters = {
      category: 'all',
      region: 'all',
      district: 'all',
      search: ''
    };

    if (dom.heroCategorySelect) dom.heroCategorySelect.value = 'all';
    if (dom.heroRegionSelect) dom.heroRegionSelect.value = 'all';
    populateDistricts('all', dom.heroDistrictSelect);

    if (dom.filterCategory) dom.filterCategory.value = 'all';
    if (dom.filterRegion) dom.filterRegion.value = 'all';
    populateDistricts('all', dom.filterDistrict);

    if (dom.searchMasterInput) dom.searchMasterInput.value = '';

    updateCategoryChipsActive('all');
    applyFilters();
    showToast("Barcha filtrlar tozalandi", 'info');
  }

  /* ==========================================================================
     8. USTALARNI FILTRLASH VA CHIQARISH (RENDER)
     ========================================================================== */
  function applyFilters() {
    const { category, region, district, search } = state.filters;

    const filtered = MASTERS_DATA.filter(master => {
      // Category match
      if (category !== 'all' && master.service !== category) {
        return false;
      }

      // Region match
      if (region !== 'all' && master.region !== region) {
        return false;
      }

      // District match
      if (district !== 'all' && master.district !== district) {
        return false;
      }

      // Search match (name, service, bio, district)
      if (search) {
        const haystack = `${master.name} ${master.service} ${master.bio} ${master.district} ${master.specialties.join(' ')}`.toLowerCase();
        if (!haystack.includes(search)) {
          return false;
        }
      }

      return true;
    });

    renderMasters(filtered);
  }

  function renderMasters(masters) {
    if (!dom.mastersGrid) return;
    dom.mastersGrid.innerHTML = '';

    if (dom.resultsCount) {
      dom.resultsCount.textContent = `Topilgan ustalar: ${masters.length} ta`;
    }

    if (masters.length === 0) {
      if (dom.emptyMastersState) dom.emptyMastersState.classList.remove('hidden');
      return;
    }

    if (dom.emptyMastersState) dom.emptyMastersState.classList.add('hidden');

    masters.forEach((master, index) => {
      const card = document.createElement('div');
      // Yon tomondan keluvchi animatsiya (chapdan va o'ngdan)
      const slideSideClass = index % 2 === 0 ? 'reveal-left' : 'reveal-right';
      card.className = `master-card ${slideSideClass}`;
      card.style.transitionDelay = `${(index % 3) * 0.1}s`;

      card.innerHTML = `
        <div class="master-banner">
          <span class="master-rating-tag">★ ${master.rating} (${master.reviewsCount})</span>
        </div>

        <div class="master-card-body">
          <div class="master-avatar-wrap">
            <div class="master-avatar">${escapeHtml(master.name.charAt(0))}</div>
            <span class="verified-badge" title="Tekshirilgan usta">✓</span>
          </div>

          <h3 class="master-name">${escapeHtml(master.name)}</h3>
          <div class="master-service">${escapeHtml(master.service)}</div>

          <div class="master-meta-row">
            <span class="master-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>${escapeHtml(master.district)}</span>
            </span>
            <span>•</span>
            <span class="master-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>${escapeHtml(master.experience)}</span>
            </span>
            <span>•</span>
            <span class="master-meta-item">
              <span>${master.completedJobs}+ ish</span>
            </span>
          </div>

          <div class="master-skills-wrap">
            ${master.specialties.slice(0, 3).map(s => `<span class="skill-tag">${escapeHtml(s)}</span>`).join('')}
          </div>

          <div class="master-card-footer">
            <div class="master-price-row">
              <span class="price-label">Boshlang‘ich narx</span>
              <span class="price-value">${escapeHtml(master.priceFormatted)}</span>
            </div>

            <div class="master-card-actions">
              <button type="button" class="btn btn-secondary btn-sm btn-detail" data-id="${master.id}">
                Batafsil
              </button>
              <button type="button" class="btn btn-primary btn-sm btn-order" data-id="${master.id}">
                Buyurtma berish
              </button>
            </div>
          </div>
        </div>
      `;

      // Event listeners
      const detailBtn = card.querySelector('.btn-detail');
      if (detailBtn) {
        detailBtn.addEventListener('click', () => openDetailModal(master));
      }

      const orderBtn = card.querySelector('.btn-order');
      if (orderBtn) {
        orderBtn.addEventListener('click', () => openOrderModal(master));
      }

      dom.mastersGrid.appendChild(card);
    });

    // Yangi kartochkalarni kuzatuvga olish
    setupScrollReveal();
  }

  /* ==========================================================================
     9. BUYURTMA BERISH VA TAHRIRLASH (ORDER MODAL)
     ========================================================================== */
  function openOrderModal(master, editingOrder = null) {
    if (!master && !editingOrder) return;

    const currentMaster = master || MASTERS_DATA.find(m => m.id === editingOrder.masterId);
    if (!currentMaster) return;

    // Reset validation errors
    clearValidationErrors();

    if (editingOrder) {
      dom.orderModalTitle.textContent = "Buyurtmani tahrirlash";
      dom.orderModalSubtitle = "Buyurtma ma'lumotlarini yangilang";
      dom.editingOrderId.value = editingOrder.id;
      dom.orderMasterId.value = editingOrder.masterId;
      dom.orderClientName.value = editingOrder.clientName;
      dom.orderPhone.value = editingOrder.phone;
      dom.orderDate.value = editingOrder.date;
      dom.orderTime.value = editingOrder.time;
      dom.orderAddress.value = editingOrder.address;
      dom.orderProblem.value = editingOrder.problem;
    } else {
      dom.orderModalTitle.textContent = "Ustaga buyurtma berish";
      dom.orderModalSubtitle.textContent = "Malakali usta xizmatidan foydalaning";
      dom.editingOrderId.value = '';
      dom.orderMasterId.value = currentMaster.id;

      // Auto-fill today's date
      const today = new Date().toISOString().split('T')[0];
      dom.orderDate.value = today;

      // Check draft
      try {
        const savedDraft = localStorage.getItem(DRAFT_KEY);
        if (savedDraft) {
          const draft = JSON.parse(savedDraft);
          if (draft.masterId == currentMaster.id) {
            dom.orderClientName.value = draft.clientName || '';
            dom.orderPhone.value = draft.phone || '';
            dom.orderDate.value = draft.date || today;
            dom.orderTime.value = draft.time || 'Ertalab (09:00 - 12:00)';
            dom.orderAddress.value = draft.address || '';
            dom.orderProblem.value = draft.problem || '';
          } else {
            dom.orderClientName.value = '';
            dom.orderPhone.value = '';
            dom.orderAddress.value = '';
            dom.orderProblem.value = '';
          }
        } else {
          dom.orderClientName.value = '';
          dom.orderPhone.value = '';
          dom.orderAddress.value = '';
          dom.orderProblem.value = '';
        }
      } catch (e) {}
    }

    // Fill master banner
    if (dom.orderMasterAvatar) dom.orderMasterAvatar.textContent = currentMaster.name.charAt(0);
    if (dom.orderMasterName) dom.orderMasterName.textContent = currentMaster.name;
    if (dom.orderMasterService) dom.orderMasterService.textContent = `${currentMaster.service} • ${currentMaster.district}`;
    if (dom.orderMasterPrice) dom.orderMasterPrice.textContent = currentMaster.priceFormatted;

    // Show modal
    dom.orderModalBackdrop.classList.remove('hidden');
  }

  function closeOrderModal() {
    dom.orderModalBackdrop.classList.add('hidden');
    clearValidationErrors();
  }

  function clearValidationErrors() {
    const errorEls = ['orderClientNameError', 'orderPhoneError', 'orderDateError', 'orderAddressError', 'orderProblemError'];
    errorEls.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '';
    });
  }

  function validateOrderForm() {
    let isValid = true;
    clearValidationErrors();

    const name = dom.orderClientName.value.trim();
    const phone = dom.orderPhone.value.trim();
    const date = dom.orderDate.value.trim();
    const address = dom.orderAddress.value.trim();
    const problem = dom.orderProblem.value.trim();

    if (!name || name.length < 3) {
      document.getElementById('orderClientNameError').textContent = "Iltimos, ismingizni to'liq kiriting (kamida 3 harf)";
      isValid = false;
    }

    // Phone validation
    const phoneClean = phone.replace(/\s+/g, '');
    if (!phoneClean || phoneClean.length < 9) {
      document.getElementById('orderPhoneError').textContent = "Telefon raqamingizni to'g'ri kiriting (+998 90 123 45 67)";
      isValid = false;
    }

    if (!date) {
      document.getElementById('orderDateError').textContent = "Iltimos, qulay sanani tanlang";
      isValid = false;
    }

    if (!address || address.length < 5) {
      document.getElementById('orderAddressError').textContent = "Manzilingizni aniqroq kiriting (mahalla, ko'cha, uy)";
      isValid = false;
    }

    if (!problem || problem.length < 5) {
      document.getElementById('orderProblemError').textContent = "Muammoni qisqacha tushuntirib bering";
      isValid = false;
    }

    return isValid;
  }

  function handleOrderFormSubmit(e) {
    e.preventDefault();
    if (!validateOrderForm()) return;

    const masterId = parseInt(dom.orderMasterId.value, 10);
    const master = MASTERS_DATA.find(m => m.id === masterId);
    if (!master) return;

    const editingId = dom.editingOrderId.value;

    if (editingId) {
      // Tahrirlash
      const index = state.orders.findIndex(o => o.id === editingId);
      if (index !== -1) {
        state.orders[index] = {
          ...state.orders[index],
          clientName: dom.orderClientName.value.trim(),
          phone: dom.orderPhone.value.trim(),
          date: dom.orderDate.value,
          time: dom.orderTime.value,
          address: dom.orderAddress.value.trim(),
          problem: dom.orderProblem.value.trim(),
          updatedAt: new Date().toISOString()
        };
        saveOrdersToStorage();
        showToast("Buyurtma muvaffaqiyatli yangilandi!", 'success');
      }
    } else {
      // Yangi buyurtma
      const newOrder = {
        id: 'ord-' + Date.now(),
        masterId: master.id,
        masterName: master.name,
        masterService: master.service,
        clientName: dom.orderClientName.value.trim(),
        phone: dom.orderPhone.value.trim(),
        date: dom.orderDate.value,
        time: dom.orderTime.value,
        address: dom.orderAddress.value.trim(),
        problem: dom.orderProblem.value.trim(),
        priceFormatted: master.priceFormatted,
        status: 'active',
        createdAt: new Date().toISOString()
      };

      state.orders.unshift(newOrder);
      saveOrdersToStorage();
      clearOrderDraft();
      showToast("Buyurtmangiz qabul qilindi! Usta tez orada siz bilan bog'lanadi.", 'success');
    }

    closeOrderModal();

    // Scroll to orders section
    const ordersSection = document.getElementById('orders-section');
    if (ordersSection) {
      ordersSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /* ==========================================================================
     10. BUYURTMALAR RO'YXATI (ORDERS LIST RENDER)
     ========================================================================== */
  function renderOrders() {
    if (!dom.ordersListWrap) return;
    dom.ordersListWrap.innerHTML = '';

    const currentFilter = state.ordersFilter;
    const filteredOrders = state.orders.filter(order => {
      if (currentFilter === 'active') return order.status === 'active';
      if (currentFilter === 'cancelled') return order.status === 'cancelled';
      return true;
    });

    if (filteredOrders.length === 0) {
      if (dom.emptyOrdersState) dom.emptyOrdersState.classList.remove('hidden');
      return;
    }

    if (dom.emptyOrdersState) dom.emptyOrdersState.classList.add('hidden');

    filteredOrders.forEach(order => {
      const card = document.createElement('div');
      card.className = `order-card status-${order.status}`;

      const statusBadgeText = order.status === 'active' ? 'Faol buyurtma' : 'Bekor qilingan';
      const statusBadgeClass = order.status === 'active' ? 'order-status-active' : 'order-status-cancelled';

      card.innerHTML = `
        <div class="order-card-header">
          <div class="order-master-info">
            <div class="order-master-avatar">${escapeHtml(order.masterName.charAt(0))}</div>
            <div>
              <div class="order-master-name">${escapeHtml(order.masterName)}</div>
              <div class="order-master-service">${escapeHtml(order.masterService)}</div>
            </div>
          </div>
          <span class="order-status-badge ${statusBadgeClass}">${statusBadgeText}</span>
        </div>

        <div class="order-problem-box">
          <strong>Muammo:</strong> ${escapeHtml(order.problem)}
        </div>

        <div class="order-details-grid">
          <div class="order-detail-item">
            <span>Sana va vaqt:</span>
            <strong>${escapeHtml(order.date)} (${escapeHtml(order.time)})</strong>
          </div>
          <div class="order-detail-item">
            <span>Manzil:</span>
            <strong>${escapeHtml(order.address)}</strong>
          </div>
          <div class="order-detail-item">
            <span>Buyurtmachi:</span>
            <strong>${escapeHtml(order.clientName)}</strong>
          </div>
          <div class="order-detail-item">
            <span>Telefon:</span>
            <strong>${escapeHtml(order.phone)}</strong>
          </div>
        </div>

        <div class="order-card-actions">
          ${order.status === 'active' ? `
            <button type="button" class="btn btn-secondary btn-sm btn-edit-order" data-id="${order.id}">
              Tahrirlash
            </button>
            <button type="button" class="btn btn-outline btn-sm btn-cancel-order" data-id="${order.id}">
              Bekor qilish
            </button>
          ` : `
            <span style="font-size: 0.82rem; color: #94a3b8;">Ushbu buyurtma bekor qilingan</span>
          `}
        </div>
      `;

      // Handlers
      const editBtn = card.querySelector('.btn-edit-order');
      if (editBtn) {
        editBtn.addEventListener('click', () => {
          const master = MASTERS_DATA.find(m => m.id === order.masterId);
          openOrderModal(master, order);
        });
      }

      const cancelBtn = card.querySelector('.btn-cancel-order');
      if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
          openConfirmCancelModal(order.id);
        });
      }

      dom.ordersListWrap.appendChild(card);
    });
  }

  function openConfirmCancelModal(orderId) {
    state.pendingCancelOrderId = orderId;
    if (dom.confirmCancelModalBackdrop) {
      dom.confirmCancelModalBackdrop.classList.remove('hidden');
    }
  }

  function closeConfirmCancelModal() {
    state.pendingCancelOrderId = null;
    if (dom.confirmCancelModalBackdrop) {
      dom.confirmCancelModalBackdrop.classList.add('hidden');
    }
  }

  function executeCancelOrder() {
    if (!state.pendingCancelOrderId) return;
    const index = state.orders.findIndex(o => o.id === state.pendingCancelOrderId);
    if (index !== -1) {
      state.orders[index].status = 'cancelled';
      state.orders[index].cancelledAt = new Date().toISOString();
      saveOrdersToStorage();
      showToast("Buyurtma bekor qilindi", 'info');
    }
    closeConfirmCancelModal();
  }

  /* ==========================================================================
     11. USTA HAQIDA BATAFSIL (DETAIL MODAL)
     ========================================================================== */
  function openDetailModal(master) {
    if (!master || !dom.detailModalBackdrop) return;

    dom.detailModalName.textContent = `${master.name} — ${master.service}`;

    dom.detailModalBody.innerHTML = `
      <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 16px;">
        <div style="width: 58px; height: 58px; border-radius: 50%; background: linear-gradient(135deg, #2563eb, #3b82f6); color: white; font-size: 1.4rem; font-weight: 800; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(37,99,235,0.2);">
          ${escapeHtml(master.name.charAt(0))}
        </div>
        <div>
          <h4 style="font-size: 1.25rem; font-weight: 800; color: #0f172a; margin-bottom: 2px;">${escapeHtml(master.name)}</h4>
          <div style="font-size: 0.9rem; color: #2563eb; font-weight: 700;">
            ${escapeHtml(master.service)} • ${escapeHtml(master.district)}
          </div>
          <div style="font-size: 0.84rem; color: #64748b; margin-top: 2px;">
            Aloqa: <strong style="color: #0f172a;">${escapeHtml(master.phone)}</strong>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 16px; text-align: center;">
        <div style="background: #f8fafc; padding: 10px; border-radius: 12px; border: 1px solid #e2e8f0;">
          <div style="font-size: 1.15rem; font-weight: 800; color: #b45309;">★ ${master.rating}</div>
          <div style="font-size: 0.74rem; color: #64748b;">${master.reviewsCount} ta sharh</div>
        </div>
        <div style="background: #f8fafc; padding: 10px; border-radius: 12px; border: 1px solid #e2e8f0;">
          <div style="font-size: 1.15rem; font-weight: 800; color: #0f172a;">${escapeHtml(master.experience)}</div>
          <div style="font-size: 0.74rem; color: #64748b;">Tajriba</div>
        </div>
        <div style="background: #f8fafc; padding: 10px; border-radius: 12px; border: 1px solid #e2e8f0;">
          <div style="font-size: 1.15rem; font-weight: 800; color: #10b981;">${master.completedJobs}+</div>
          <div style="font-size: 0.74rem; color: #64748b;">Bajarilgan ish</div>
        </div>
      </div>

      <div style="margin-bottom: 14px;">
        <h5 style="font-size: 0.85rem; font-weight: 700; color: #475569; text-transform: uppercase; margin-bottom: 6px;">Usta haqida:</h5>
        <p style="font-size: 0.9rem; color: #334155; line-height: 1.55;">${escapeHtml(master.bio)}</p>
      </div>

      <div style="margin-bottom: 16px;">
        <h5 style="font-size: 0.85rem; font-weight: 700; color: #475569; text-transform: uppercase; margin-bottom: 8px;">Asosiy xizmat turlari:</h5>
        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
          ${master.specialties.map(s => `
            <span style="font-size: 0.78rem; font-weight: 600; background: #eff6ff; color: #2563eb; padding: 4px 10px; border-radius: 6px;">
              ${escapeHtml(s)}
            </span>
          `).join('')}
        </div>
      </div>

      <div style="background: #f8fafc; padding: 12px 14px; border-radius: 12px; border: 1px solid #e2e8f0; display: flex; flex-direction: column; gap: 6px; font-size: 0.88rem;">
        <div style="display: flex; justify-content: space-between;">
          <span style="color: #64748b;">Ish vaqti:</span>
          <strong>${escapeHtml(master.workingHours)}</strong>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span style="color: #64748b;">Kafolat:</span>
          <strong style="color: #10b981;">${escapeHtml(master.guarantee)}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; border-top: 1px dashed #cbd5e1; padding-top: 6px; margin-top: 2px;">
          <span style="color: #0f172a; font-weight: 700;">Boshlang‘ich xizmat narxi:</span>
          <strong style="color: #2563eb; font-size: 1.1rem;">${escapeHtml(master.priceFormatted)}</strong>
        </div>
      </div>
    `;

    dom.detailBookBtn.onclick = () => {
      closeDetailModal();
      openOrderModal(master);
    };

    dom.detailModalBackdrop.classList.remove('hidden');
  }

  function closeDetailModal() {
    if (dom.detailModalBackdrop) {
      dom.detailModalBackdrop.classList.add('hidden');
    }
  }

  /* ==========================================================================
     12. AI USTA MASLAHATCHI (SMART HOME REPAIR CONSULTANT - GITHUB PAGES READY)
     ========================================================================== */
  function openAiModal() {
    if (dom.aiModalBackdrop) {
      dom.aiModalBackdrop.classList.remove('hidden');
      renderChatMessages();
    }
  }

  function closeAiModal() {
    if (dom.aiModalBackdrop) {
      dom.aiModalBackdrop.classList.add('hidden');
    }
  }

  function renderChatMessages() {
    if (!dom.aiChatThread) return;
    dom.aiChatThread.innerHTML = '';

    state.chatMessages.forEach(msg => {
      const msgRow = document.createElement('div');
      msgRow.className = `chat-msg ${msg.role === 'user' ? 'user-msg' : 'ai-msg'}`;

      const avatar = document.createElement('div');
      avatar.className = 'msg-avatar';
      avatar.textContent = msg.role === 'user' ? '👤' : '🤖';

      const body = document.createElement('div');
      body.className = 'msg-body';
      body.innerHTML = msg.content.replace(/\n/g, '<br/>');

      msgRow.appendChild(avatar);
      msgRow.appendChild(body);
      dom.aiChatThread.appendChild(msgRow);
    });

    dom.aiChatThread.scrollTop = dom.aiChatThread.scrollHeight;
  }

  // Aqlli o'zbekcha bilimlar bazasi (GitHub Pages da offline va server bo'lmaganda ham mukammal ishlaydi!)
  function generateLocalSmartAdvice(query) {
    const q = query.toLowerCase();

    if (q.includes('kran') || q.includes('suv') || q.includes('tomchila') || q.includes('smesitel') || q.includes('quvur')) {
      return `💧 **Santexnika muammosi bo‘yicha maslahat:**\n\n1. **Tezkor chora:** Krandan yoki quvurdan suv sizib chiqayotgan bo‘lsa, darhol vannaxonadagi yoki kirishdagi asosiy ventilli jo‘mrakni yoping.\n2. **Sababi:** Odatda kran kartriji yoki rezina prokladka eskirgan bo‘ladi.\n3. **Tavsiya:** O‘zboshimchalik bilan quvurlarni qattiq burab sindirib qo‘ymaslik uchun tajribali ustamiz **Azizbek (Santexnik)** ga murojaat qiling.\n*Xizmat narxi: 80 000 so‘mdan boshlanadi.*`;
    }

    if (q.includes('konditsioner') || q.includes('sovuq') || q.includes('freon') || q.includes('muzlamayapti')) {
      return `❄️ **Konditsioner bo‘yicha maslahat:**\n\n1. **Mumkin bo‘lgan sabablar:** Filtrlar chang bilan to‘lgan, tashqi blok radiatori ifloslangan yoki freon gazi sirkulyatsiyasi kamaygan bo‘lishi mumkin.\n2. **Tavsiya:** Konditsionerni o‘chirib, ichki filtrini iliq suvda yuvib quritib ko‘ring. Agar shunda ham sovuq bermasa, mutaxassis **Sardor (Konditsioner ustasi)** freon darajasini o‘lchab beradi.\n*Xizmat narxi: 120 000 so‘mdan boshlanadi.*`;
    }

    if (q.includes('rozetka') || q.includes('uchqun') || q.includes('tok') || q.includes('avtomat') || q.includes('sim') || q.includes('lyustra')) {
      return `⚡ **Elektr xavfsizligi bo‘yicha muhim eslatma:**\n\n1. **Xavfsizlik:** Rozetkadan uchqun chiqsa yoki yonish hidi kelsa, **ZUDLIK BILAN** elektr shitidagi avtomatni o‘chiring!\n2. **Sababi:** Kontaktlar bo‘shashgan yoki simlar yuklamaga bardosh bermay qizigan.\n3. **Tavsiya:** O‘zingiz tegmang! Yuqori malakali elektrik ustamiz **Jasur (Elektrik)** ga buyurtma bering.\n*Xizmat narxi: 70 000 so‘mdan boshlanadi.*`;
    }

    if (q.includes('kir yuvish') || q.includes('mashina') || q.includes('muzlatgich') || q.includes('pech') || q.includes('changyutgich')) {
      return `🧺 **Maishiy texnika bo‘yicha maslahat:**\n\n1. Kir yuvish mashinasi suvni chiqarmasa, pastki drenaj filtrini burab tiqilib qolgan tanga yoki iplarni tozalang.\n2. Agar baraban aylanmasa yoki g‘alati shovqin chiqsa, motordagi tasmalar yoki ten nosoz bo‘lishi mumkin.\n3. Mutaxassis **Bekzod (Maishiy texnika ustasi)** original ehtiyot qismlar bilan ta’mirlab beradi.\n*Xizmat narxi: 90 000 so‘mdan boshlanadi.*`;
    }

    if (q.includes('mebel') || q.includes('shkaf') || q.includes('stol') || q.includes('eshik') || q.includes('ilgak') || q.includes('divan')) {
      return `🪑 **Mebel ta’miri bo‘yicha maslahat:**\n\n1. Shkaf eshiklari qiyshaygan bo‘lsa, ilgaklardagi sozlash vintlarini burab to‘g‘rilash mumkin.\n2. Mebel yig‘ish yoki restavratsiya qilish uchun **Akmal (Mebel ustasi)** sifatli asboblar bilan tez va mustahkam yig‘ib beradi.\n*Xizmat narxi: 100 000 so‘mdan boshlanadi.*`;
    }

    if (q.includes('kafel') || q.includes('remont') || q.includes('ta\'mir') || q.includes('devor') || q.includes('bo\'yoq') || q.includes('pol')) {
      return `🧱 **Qurilish va pardozlash bo‘yicha maslahat:**\n\n1. Xonadon yoki xonani ta’mirlashda avvalo santexnika va elektr simlarini bitirib, keyin kafel va bo‘yoq ishlariga o‘tish zarur.\n2. Kafel, gipsokarton va devor ishlarida 11 yillik tajribaga ega **Diyor (Qurilish ustasi)** xizmatiga buyurtma bering.\n*Xizmat narxi: 150 000 so‘mdan boshlanadi.*`;
    }

    return `Uyingizdagi muammo bo‘yicha UstaTop ustalari xizmatingizda:\n\n- Santexnika ishlari: **Azizbek** (80 000 so‘m)\n- Elektr montaj: **Jasur** (70 000 so‘m)\n- Konditsioner ta’miri: **Sardor** (120 000 so‘m)\n- Mebel yig‘ish: **Akmal** (100 000 so‘m)\n- Maishiy texnika: **Bekzod** (90 000 so‘m)\n- Qurilish va pardoz: **Diyor** (150 000 so‘m)\n\nKerakli ustaning kartochkasidagi **"Buyurtma berish"** tugmasini bosing va ma’lumotlaringizni qoldiring!`;
  }

  async function handleChatSubmit(e) {
    if (e) e.preventDefault();
    const input = dom.aiChatInput.value.trim();
    if (!input) return;

    dom.aiChatInput.value = '';

    // Foydalanuvchi xabari
    state.chatMessages.push({ role: 'user', content: input });
    renderChatMessages();

    // Kutish xabari
    state.chatMessages.push({ role: 'model', content: "Javob tayyorlanmoqda..." });
    renderChatMessages();

    // Avval server API orqali urinib ko'rish, agar server bo'lmasa (masalan GitHub Pages) aqlli bilimlar bazasidan foydalanish
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: state.chatMessages.slice(0, -1)
        })
      });

      if (!response.ok) {
        throw new Error('API mavjud emas');
      }

      const data = await response.json();
      state.chatMessages.pop();
      state.chatMessages.push({
        role: 'model',
        content: data.reply || generateLocalSmartAdvice(input)
      });
    } catch (err) {
      // Offline yoki GitHub Pages static muhitida aqlli mahalliy maslahat
      state.chatMessages.pop();
      const smartAdvice = generateLocalSmartAdvice(input);
      state.chatMessages.push({
        role: 'model',
        content: smartAdvice
      });
    }

    renderChatMessages();
  }

  /* ==========================================================================
     13. INTERFEYS HODISALARI VA DASTLABKI ISHGA TUSHIRISH
     ========================================================================== */
  function setupEventListeners() {
    // Form autosave on input
    ['orderClientName', 'orderPhone', 'orderDate', 'orderTime', 'orderAddress', 'orderProblem'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', saveOrderDraft);
    });

    // Order form submit
    if (dom.orderForm) {
      dom.orderForm.addEventListener('submit', handleOrderFormSubmit);
    }

    // Modal close triggers
    if (dom.closeOrderModalBtn) dom.closeOrderModalBtn.addEventListener('click', closeOrderModal);
    if (dom.cancelOrderModalBtn) dom.cancelOrderModalBtn.addEventListener('click', closeOrderModal);
    if (dom.orderModalBackdrop) {
      dom.orderModalBackdrop.addEventListener('click', (e) => {
        if (e.target === dom.orderModalBackdrop) closeOrderModal();
      });
    }

    if (dom.closeDetailModalBtn) dom.closeDetailModalBtn.addEventListener('click', closeDetailModal);
    if (dom.closeDetailFooterBtn) dom.closeDetailFooterBtn.addEventListener('click', closeDetailModal);
    if (dom.detailModalBackdrop) {
      dom.detailModalBackdrop.addEventListener('click', (e) => {
        if (e.target === dom.detailModalBackdrop) closeDetailModal();
      });
    }

    if (dom.closeConfirmModalBtn) dom.closeConfirmModalBtn.addEventListener('click', closeConfirmCancelModal);
    if (dom.rejectCancelBtn) dom.rejectCancelBtn.addEventListener('click', closeConfirmCancelModal);
    if (dom.confirmCancelBtn) dom.confirmCancelBtn.addEventListener('click', executeCancelOrder);

    // AI Modal triggers
    if (dom.openAiModalBtn) dom.openAiModalBtn.addEventListener('click', openAiModal);
    if (dom.mobileAiBtn) dom.mobileAiBtn.addEventListener('click', openAiModal);
    if (dom.closeAiModalBtn) dom.closeAiModalBtn.addEventListener('click', closeAiModal);
    if (dom.aiModalBackdrop) {
      dom.aiModalBackdrop.addEventListener('click', (e) => {
        if (e.target === dom.aiModalBackdrop) closeAiModal();
      });
    }

    // AI Prompt Chips
    if (dom.aiPromptChips) {
      const chips = dom.aiPromptChips.querySelectorAll('.prompt-chip');
      chips.forEach(chip => {
        chip.addEventListener('click', () => {
          const prompt = chip.dataset.prompt;
          if (prompt) {
            dom.aiChatInput.value = prompt;
            handleChatSubmit();
          }
        });
      });
    }

    // AI Chat form submit
    if (dom.aiChatForm) {
      dom.aiChatForm.addEventListener('submit', handleChatSubmit);
    }

    // Orders Filter Tabs
    if (dom.ordersFilterTabs) {
      const buttons = dom.ordersFilterTabs.querySelectorAll('.segment-btn');
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          buttons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          state.ordersFilter = btn.dataset.status;
          renderOrders();
        });
      });
    }

    // Mobile Hamburger
    if (dom.mobileMenuBtn && dom.navMenu) {
      dom.mobileMenuBtn.addEventListener('click', () => {
        const isOpen = dom.navMenu.classList.toggle('open');
        dom.mobileMenuBtn.setAttribute('aria-expanded', isOpen);
      });

      // Close menu on link click
      dom.navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          dom.navMenu.classList.remove('open');
          dom.mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // Mobile bottom navigation active link highlights
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item[data-nav]');
    bottomNavItems.forEach(item => {
      item.addEventListener('click', () => {
        bottomNavItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      });
    });

    // Window scroll active section observer
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const sections = [
        { id: 'home', nav: 'home' },
        { id: 'masters-section', nav: 'masters' },
        { id: 'orders-section', nav: 'orders' }
      ];

      sections.forEach(sec => {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            bottomNavItems.forEach(item => {
              if (item.dataset.nav === sec.nav) item.classList.add('active');
              else item.classList.remove('active');
            });
          }
        }
      });
    });
  }

  /* ==========================================================================
     14. SCROLL ORQALI YON TARAFLARDAN KELUVCHI EFFEKTLAR VA RIPPLE
     ========================================================================== */
  function setupScrollReveal() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: Agar brauzerda IntersectionObserver bo'lmasa darhol ko'rsatish
      document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up').forEach(el => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    // Elementlarni kuzatish (kartochkalar, bosqichlar, sarlavhalar)
    const targets = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up, .step-card, .stat-card');
    targets.forEach((target, i) => {
      if (!target.classList.contains('reveal-left') && !target.classList.contains('reveal-right') && !target.classList.contains('reveal-up')) {
        target.classList.add(i % 2 === 0 ? 'reveal-left' : 'reveal-right');
      }
      observer.observe(target);
    });
  }

  // Tugmalarga bosilganda zamonaviy to'lqin (ripple) effekti
  function setupButtonRipples() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn');
      if (!btn) return;

      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'btn-ripple-wave';
      const size = Math.max(rect.width, rect.height) * 1.8;
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

      btn.appendChild(ripple);

      setTimeout(() => {
        if (ripple.parentNode) ripple.parentNode.removeChild(ripple);
      }, 600);
    });
  }

  /* ==========================================================================
     15. INIT
     ========================================================================== */
  function init() {
    setupCascadingDropdowns();
    setupEventListeners();
    setupButtonRipples();
    applyFilters();
    loadOrdersFromStorage();
    setupScrollReveal();
  }

  // DOM yuklangach ishga tushirish
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
