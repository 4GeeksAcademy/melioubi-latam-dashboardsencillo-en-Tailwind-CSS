# melioubi-latam-dashboard-sencillo-en-Tailwind-CSS

Dashboard de métricas para influencer — HTML + Tailwind CSS v4 (Play CDN).

## Estructura

```text
├── index.html
├── package.json
├── preview.sh
├── src/
│   ├── dashboard.js
│   ├── input.css
│   └── tailwind-theme.js
└── dist/
    └── output.css
```

## Vista previa (Codespace)

Desde la **raíz del repo**:

```bash
bash preview.sh
```

O:

```bash
python3 -m http.server 3000
```

Luego: pestaña **Ports** → puerto **3000** → clic en el **globo**.

## Nota sobre node_modules

No se sube a GitHub (está en `.gitignore`). **No hace falta** para ver el dashboard: Tailwind se carga desde el CDN. Solo necesitás `npm install` si querés compilar CSS con el CLI.
