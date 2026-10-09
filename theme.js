(function () {
  const THEME_KEY = 'ustatop_theme';
  const body = document.body;

  function setTheme(theme) {
    const resolvedTheme = theme === 'dark' ? 'dark' : 'light';
    body.setAttribute('data-theme', resolvedTheme);

    try {
      localStorage.setItem(THEME_KEY, resolvedTheme);
    } catch (e) {
      // no-op if localStorage is unavailable
    }

    const toggleBtn = document.getElementById('themeToggleBtn');
    if (!toggleBtn) return;

    const isDark = resolvedTheme === 'dark';
    toggleBtn.setAttribute('aria-label', isDark ? 'Light mode ga o\'tish' : 'Dark mode ga o\'tish');
    toggleBtn.innerHTML = `
      <span class="theme-icon">${isDark ? '☀️' : '🌙'}</span>
      <span class="theme-label">${isDark ? 'Light' : 'Dark'}</span>
    `;
  }

  function ensureToggleButton() {
    const headerActions = document.querySelector('.header-actions');
    if (!headerActions) return;

    if (document.getElementById('themeToggleBtn')) return;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'themeToggleBtn';
    btn.className = 'btn btn-outline theme-toggle';
    btn.setAttribute('aria-label', 'Dark mode');
    btn.innerHTML = '<span class="theme-icon">🌙</span><span class="theme-label">Dark</span>';

    headerActions.insertBefore(btn, headerActions.firstChild);
    btn.addEventListener('click', () => {
      const nextTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }

  function initTheme() {
    ensureToggleButton();

    try {
      const savedTheme = localStorage.getItem(THEME_KEY);
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
