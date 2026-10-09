(function () {
  const STORAGE_KEY = 'ustatop_theme';
  const body = document.body;
  const toggleBtn = document.getElementById('themeToggleBtn');

  function setTheme(theme) {
    const resolvedTheme = theme === 'dark' ? 'dark' : 'light';
    body.setAttribute('data-theme', resolvedTheme);

    try {
      localStorage.setItem(STORAGE_KEY, resolvedTheme);
    } catch (e) {
      // no-op if storage unavailable
    }

    if (!toggleBtn) return;

    const isDark = resolvedTheme === 'dark';
    toggleBtn.setAttribute('aria-label', isDark ? 'Light mode ga o\'tish' : 'Dark mode ga o\'tish');
    toggleBtn.innerHTML = `
      <span class="theme-icon">${isDark ? '☀️' : '🌙'}</span>
      <span class="theme-label">${isDark ? 'Light' : 'Dark'}</span>
    `;
  }

  function initTheme() {
    try {
      const savedTheme = localStorage.getItem(STORAGE_KEY);
      if (savedTheme) {
        setTheme(savedTheme);
        return;
      }
    } catch (e) {}

    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }

  function addFloatingMotion() {
    const selectors = [
      '.master-card',
      '.stat-card',
      '.step-card',
      '.search-box-card',
      '.order-card',
      '.masters-filter-bar'
    ];

    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach((el) => {
        el.classList.add('float-card');

        el.addEventListener('pointermove', (event) => {
          const rect = el.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          const rotateY = (x - 0.5) * 8;
          const rotateX = (0.5 - y) * 8;
          el.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
        });

        el.addEventListener('pointerleave', () => {
          el.style.transform = '';
        });
      });
    });
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const nextTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initTheme();
      addFloatingMotion();
    });
  } else {
    initTheme();
    addFloatingMotion();
  }
})();
