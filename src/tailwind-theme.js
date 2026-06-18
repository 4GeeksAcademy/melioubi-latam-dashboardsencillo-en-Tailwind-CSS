/**
 * Tema Tailwind v4 para Play CDN — se inyecta como style[type="text/tailwindcss"]
 * para cumplir validación HTML (sin type no estándar en index.html).
 */
(function () {
  const style = document.createElement('style');
  style.type = 'text/tailwindcss';
  style.textContent = `
    @theme {
      --color-brand-50: #fdf4ff;
      --color-brand-100: #fae8ff;
      --color-brand-200: #f5d0fe;
      --color-brand-300: #f0abfc;
      --color-brand-400: #e879f9;
      --color-brand-500: #d946ef;
      --color-brand-600: #c026d3;
      --color-brand-700: #a21caf;
      --color-brand-800: #86198f;
      --color-brand-900: #701a75;

      --color-surface-50: #f8fafc;
      --color-surface-100: #f1f5f9;
      --color-surface-200: #e2e8f0;
      --color-surface-700: #334155;
      --color-surface-800: #1e293b;
      --color-surface-900: #0f172a;
      --color-surface-950: #020617;

      --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
    }
  `;
  document.head.appendChild(style);
})();
