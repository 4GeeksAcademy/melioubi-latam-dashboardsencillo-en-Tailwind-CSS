/**
 * InfluenceHub — datos por periodo, filtros y exportación CSV.
 * No altera la estructura HTML; solo actualiza contenido dinámico.
 */
(function () {
  'use strict';

  const PERIODS = {
    '7': {
      label: 'Últimos 7 días',
      updated: '13 jun 2026',
      kpis: {
        comisiones: { value: 980, delta: '+9,2%', deltaUp: true, sub: '38 ventas × 15% de comisión' },
        conversiones: { value: 38, delta: '+4,1%', deltaUp: true, rate: '2,4%' },
        engagement: { value: '6,1%', delta: '+1,8%', deltaUp: true, sub: '6.200 interacciones · 102.000 impresiones' },
        ventas: { value: 38, delta: '+7%', deltaUp: true, avgPrice: '€84,20' },
        ctr: { value: '4,5%', delta: '+0,2%', deltaUp: true, sub: '4.590 clics en enlaces de afiliado' },
        cpc: { value: '€6,10', delta: '-3%', deltaUp: true, margin: 748 },
      },
      funnel: { alcance: 102000, clics: 4590, ventas: 38, ctrPct: 4.5, convPct: 2.4 },
      platforms: {
        instagram: { revenue: 420, width: 78, roi: '3,8×' },
        tiktok: { revenue: 380, width: 70, roi: '3,2×' },
        youtube: { revenue: 180, width: 35, roi: '2,1×' },
      },
      products: {
        a: { commission: 210, conv: 28, height: 45 },
        b: { commission: 380, conv: 18, height: 82 },
        c: { commission: 390, conv: 32, height: 84 },
      },
      engagement: {
        instagram: { rate: '7,2%', likes: 3200, comments: 480, saved: 890 },
        tiktok: { rate: '5,8%', likes: 2100, comments: 240, shares: 520 },
        youtube: { rate: '4,5%', likes: 900, comments: 120, views: 22000 },
        avg: '5,9%',
      },
      activity: { reels: 12, youtube: 2, posts: 6, campaigns: 2 },
      productsTable: [
        { name: 'Producto A', price: 50, commission: 210, conv: 28, roi: '2,8×', roiClass: 'amber' },
        { name: 'Producto B', price: 120, commission: 380, conv: 18, roi: '4,2×', roiClass: 'emerald' },
        { name: 'Producto C', price: 80, commission: 390, conv: 32, roi: '2,4×', roiClass: 'amber' },
      ],
      platformsTable: [
        { name: 'Instagram', reach: 42000, engagement: '7,2%', conv: 16, highlight: 'Mejor ROI', color: 'pink' },
        { name: 'TikTok', reach: 48000, engagement: '5,8%', conv: 14, highlight: 'Mayor alcance', color: 'surface' },
        { name: 'YouTube', reach: 12000, engagement: '4,5%', conv: 8, highlight: 'Mejor retención', color: 'red' },
      ],
      campaigns: [
        { name: 'Flash Sale', dates: '12–13 jun', product: 'Producto B', platform: 'TikTok', reach: 41000, conv: 22, commission: 396 },
        { name: 'Review Honest', dates: '10–13 jun', product: 'Producto C', platform: 'YouTube', reach: 12000, conv: 8, commission: 96 },
      ],
      topProducts: [
        { rank: 1, name: 'Producto C', amount: 390 },
        { rank: 2, name: 'Producto B', amount: 380 },
        { rank: 3, name: 'Producto A', amount: 210 },
      ],
      topPlatforms: [
        { rank: 1, name: 'Instagram', detail: 'ROI 3,8× · €420' },
        { rank: 2, name: 'TikTok', detail: 'Mayor alcance · €380' },
        { rank: 3, name: 'YouTube', detail: 'Mejor retención · €180' },
      ],
      alerts: [
        { type: 'emerald', title: 'Pico de conversión — Producto B', text: '+28% de ventas en la última semana. Replicar formato del reel del 12 jun.' },
        { type: 'amber', title: 'CTR estable — TikTok', text: '4,5% en 7 días. Mantener enlaces UTM actuales.' },
      ],
    },
    '30': {
      label: 'Últimos 30 días',
      updated: '13 jun 2026',
      kpis: {
        comisiones: { value: 4280, delta: '+18,4%', deltaUp: true, sub: '142 ventas × 15% de comisión' },
        conversiones: { value: 142, delta: '+6,2%', deltaUp: true, rate: '2,8%' },
        engagement: { value: '5,6%', delta: '+3,1%', deltaUp: true, sub: '28.400 interacciones · 508.000 impresiones' },
        ventas: { value: 142, delta: '+12%', deltaUp: true, avgPrice: '€86,40' },
        ctr: { value: '4,2%', delta: '-0,4%', deltaUp: false, sub: '21.336 clics en enlaces de afiliado' },
        cpc: { value: '€5,40', delta: '-8%', deltaUp: true, margin: 3512 },
      },
      funnel: { alcance: 508000, clics: 21336, ventas: 142, ctrPct: 4.2, convPct: 2.8 },
      platforms: {
        instagram: { revenue: 1820, width: 85, roi: '4,2×' },
        tiktok: { revenue: 1540, width: 72, roi: '3,6×' },
        youtube: { revenue: 920, width: 48, roi: '2,8×' },
      },
      products: {
        a: { commission: 892, conv: 119, height: 55 },
        b: { commission: 1620, conv: 90, height: 100 },
        c: { commission: 1168, conv: 146, height: 72 },
      },
      engagement: {
        instagram: { rate: '6,8%', likes: 12400, comments: 1820, saved: 3240 },
        tiktok: { rate: '5,2%', likes: 8600, comments: 980, shares: 2140 },
        youtube: { rate: '4,1%', likes: 4200, comments: 640, views: 86000 },
        avg: '5,6%',
      },
      activity: { reels: 34, youtube: 6, posts: 18, campaigns: 5 },
      productsTable: [
        { name: 'Producto A', price: 50, commission: 892, conv: 119, roi: '3,1×', roiClass: 'emerald' },
        { name: 'Producto B', price: 120, commission: 1620, conv: 90, roi: '4,8×', roiClass: 'emerald' },
        { name: 'Producto C', price: 80, commission: 1168, conv: 146, roi: '2,6×', roiClass: 'amber' },
      ],
      platformsTable: [
        { name: 'Instagram', reach: 182000, engagement: '6,8%', conv: 58, highlight: 'Mejor ROI', color: 'pink' },
        { name: 'TikTok', reach: 248000, engagement: '5,2%', conv: 52, highlight: 'Mayor alcance', color: 'surface' },
        { name: 'YouTube', reach: 78000, engagement: '4,1%', conv: 32, highlight: 'Mejor retención', color: 'red' },
      ],
      campaigns: [
        { name: 'Verano Glow', dates: '1–15 jun', product: 'Producto B', platform: 'Instagram', reach: 62000, conv: 38, commission: 684 },
        { name: 'Routine AM', dates: '5–20 jun', product: 'Producto A', platform: 'TikTok', reach: 98000, conv: 45, commission: 337 },
        { name: 'Review Honest', dates: '10–13 jun', product: 'Producto C', platform: 'YouTube', reach: 28000, conv: 18, commission: 216 },
        { name: 'Flash Sale', dates: '12–13 jun', product: 'Producto B', platform: 'TikTok', reach: 41000, conv: 22, commission: 396 },
      ],
      topProducts: [
        { rank: 1, name: 'Producto B', amount: 1620 },
        { rank: 2, name: 'Producto C', amount: 1168 },
        { rank: 3, name: 'Producto A', amount: 892 },
      ],
      topPlatforms: [
        { rank: 1, name: 'Instagram', detail: 'ROI 4,2× · €1.820' },
        { rank: 2, name: 'TikTok', detail: 'Mayor alcance · €1.540' },
        { rank: 3, name: 'YouTube', detail: 'Mejor retención · €920' },
      ],
      alerts: [
        { type: 'red', title: 'Caída en conversión — YouTube', text: 'La tasa bajó un 22% respecto al periodo anterior. Revisar CTA en descripción.' },
        { type: 'emerald', title: 'Pico de conversión — Producto B', text: '+34% de ventas tras el reel del 8 jun. Considerar replicar formato.' },
        { type: 'amber', title: 'CTR por debajo del promedio — TikTok', text: '3,1% vs 4,2% global. Probar enlaces en bio con UTM diferenciados.' },
      ],
    },
    month: {
      label: 'Este mes',
      updated: '13 jun 2026',
      kpis: {
        comisiones: { value: 3150, delta: '+14,7%', deltaUp: true, sub: '104 ventas × 15% de comisión' },
        conversiones: { value: 104, delta: '+5,5%', deltaUp: true, rate: '2,6%' },
        engagement: { value: '5,4%', delta: '+2,4%', deltaUp: true, sub: '21.800 interacciones · 404.000 impresiones' },
        ventas: { value: 104, delta: '+10%', deltaUp: true, avgPrice: '€85,10' },
        ctr: { value: '4,0%', delta: '-0,6%', deltaUp: false, sub: '16.160 clics en enlaces de afiliado' },
        cpc: { value: '€5,80', delta: '-5%', deltaUp: true, margin: 2604 },
      },
      funnel: { alcance: 404000, clics: 16160, ventas: 104, ctrPct: 4.0, convPct: 2.6 },
      platforms: {
        instagram: { revenue: 1340, width: 80, roi: '4,0×' },
        tiktok: { revenue: 1120, width: 67, roi: '3,4×' },
        youtube: { revenue: 690, width: 41, roi: '2,5×' },
      },
      products: {
        a: { commission: 650, conv: 87, height: 40 },
        b: { commission: 1188, conv: 66, height: 73 },
        c: { commission: 1312, conv: 164, height: 81 },
      },
      engagement: {
        instagram: { rate: '6,5%', likes: 9800, comments: 1420, saved: 2580 },
        tiktok: { rate: '5,0%', likes: 6400, comments: 720, shares: 1680 },
        youtube: { rate: '3,9%', likes: 3100, comments: 480, views: 62000 },
        avg: '5,4%',
      },
      activity: { reels: 26, youtube: 4, posts: 14, campaigns: 4 },
      productsTable: [
        { name: 'Producto A', price: 50, commission: 650, conv: 87, roi: '2,9×', roiClass: 'amber' },
        { name: 'Producto B', price: 120, commission: 1188, conv: 66, roi: '4,5×', roiClass: 'emerald' },
        { name: 'Producto C', price: 80, commission: 1312, conv: 164, roi: '2,8×', roiClass: 'amber' },
      ],
      platformsTable: [
        { name: 'Instagram', reach: 145000, engagement: '6,5%', conv: 42, highlight: 'Mejor ROI', color: 'pink' },
        { name: 'TikTok', reach: 198000, engagement: '5,0%', conv: 38, highlight: 'Mayor alcance', color: 'surface' },
        { name: 'YouTube', reach: 61000, engagement: '3,9%', conv: 24, highlight: 'Mejor retención', color: 'red' },
      ],
      campaigns: [
        { name: 'Verano Glow', dates: '1–13 jun', product: 'Producto B', platform: 'Instagram', reach: 62000, conv: 38, commission: 684 },
        { name: 'Routine AM', dates: '5–13 jun', product: 'Producto A', platform: 'TikTok', reach: 72000, conv: 32, commission: 240 },
        { name: 'Review Honest', dates: '10–13 jun', product: 'Producto C', platform: 'YouTube', reach: 28000, conv: 18, commission: 216 },
      ],
      topProducts: [
        { rank: 1, name: 'Producto C', amount: 1312 },
        { rank: 2, name: 'Producto B', amount: 1188 },
        { rank: 3, name: 'Producto A', amount: 650 },
      ],
      topPlatforms: [
        { rank: 1, name: 'Instagram', detail: 'ROI 4,0× · €1.340' },
        { rank: 2, name: 'TikTok', detail: 'Mayor alcance · €1.120' },
        { rank: 3, name: 'YouTube', detail: 'Mejor retención · €690' },
      ],
      alerts: [
        { type: 'emerald', title: 'Objetivo mensual al 78%', text: 'Comisiones en camino de superar el mes anterior. Faltan 18 días.' },
        { type: 'amber', title: 'Producto C lidera volumen', text: '164 conversiones este mes — considerar más contenido dedicado.' },
      ],
    },
    quarter: {
      label: 'Trimestre',
      updated: 'Q2 2026 · hasta 13 jun',
      kpis: {
        comisiones: { value: 11840, delta: '+24,1%', deltaUp: true, sub: '392 ventas × 15% de comisión' },
        conversiones: { value: 392, delta: '+11,3%', deltaUp: true, rate: '3,1%' },
        engagement: { value: '5,9%', delta: '+4,2%', deltaUp: true, sub: '86.200 interacciones · 1.460.000 impresiones' },
        ventas: { value: 392, delta: '+18%', deltaUp: true, avgPrice: '€87,90' },
        ctr: { value: '4,4%', delta: '+0,3%', deltaUp: true, sub: '64.240 clics en enlaces de afiliado' },
        cpc: { value: '€4,90', delta: '-12%', deltaUp: true, margin: 9820 },
      },
      funnel: { alcance: 1460000, clics: 64240, ventas: 392, ctrPct: 4.4, convPct: 3.1 },
      platforms: {
        instagram: { revenue: 4920, width: 88, roi: '4,6×' },
        tiktok: { revenue: 4280, width: 76, roi: '4,0×' },
        youtube: { revenue: 2640, width: 52, roi: '3,2×' },
      },
      products: {
        a: { commission: 2480, conv: 331, height: 48 },
        b: { commission: 5184, conv: 288, height: 100 },
        c: { commission: 4176, conv: 522, height: 80 },
      },
      engagement: {
        instagram: { rate: '7,0%', likes: 38200, comments: 5420, saved: 9680 },
        tiktok: { rate: '5,6%', likes: 26400, comments: 3120, shares: 6840 },
        youtube: { rate: '4,4%', likes: 12800, comments: 1980, views: 248000 },
        avg: '5,9%',
      },
      activity: { reels: 98, youtube: 18, posts: 52, campaigns: 14 },
      productsTable: [
        { name: 'Producto A', price: 50, commission: 2480, conv: 331, roi: '3,4×', roiClass: 'emerald' },
        { name: 'Producto B', price: 120, commission: 5184, conv: 288, roi: '5,2×', roiClass: 'emerald' },
        { name: 'Producto C', price: 80, commission: 4176, conv: 522, roi: '3,0×', roiClass: 'emerald' },
      ],
      platformsTable: [
        { name: 'Instagram', reach: 520000, engagement: '7,0%', conv: 158, highlight: 'Mejor ROI', color: 'pink' },
        { name: 'TikTok', reach: 680000, engagement: '5,6%', conv: 142, highlight: 'Mayor alcance', color: 'surface' },
        { name: 'YouTube', reach: 260000, engagement: '4,4%', conv: 92, highlight: 'Mejor retención', color: 'red' },
      ],
      campaigns: [
        { name: 'Verano Glow', dates: '1–15 jun', product: 'Producto B', platform: 'Instagram', reach: 62000, conv: 38, commission: 684 },
        { name: 'Routine AM', dates: '5–20 jun', product: 'Producto A', platform: 'TikTok', reach: 98000, conv: 45, commission: 337 },
        { name: 'Spring Launch', dates: 'abr–may', product: 'Producto C', platform: 'Instagram', reach: 186000, conv: 92, commission: 1104 },
        { name: 'Q2 Review', dates: 'abr–jun', product: 'Producto B', platform: 'YouTube', reach: 124000, conv: 64, commission: 1152 },
        { name: 'Flash Sale', dates: '12–13 jun', product: 'Producto B', platform: 'TikTok', reach: 41000, conv: 22, commission: 396 },
      ],
      topProducts: [
        { rank: 1, name: 'Producto B', amount: 5184 },
        { rank: 2, name: 'Producto C', amount: 4176 },
        { rank: 3, name: 'Producto A', amount: 2480 },
      ],
      topPlatforms: [
        { rank: 1, name: 'Instagram', detail: 'ROI 4,6× · €4.920' },
        { rank: 2, name: 'TikTok', detail: 'Mayor alcance · €4.280' },
        { rank: 3, name: 'YouTube', detail: 'Mejor retención · €2.640' },
      ],
      alerts: [
        { type: 'emerald', title: 'Mejor trimestre registrado', text: 'Comisiones +24% vs Q1. Producto B lidera ingresos.' },
        { type: 'emerald', title: 'Engagement en alza', text: 'TikTok superó 680K de alcance acumulado en el trimestre.' },
        { type: 'amber', title: 'Diversificar YouTube', text: 'ROI menor que otras plataformas — oportunidad de optimizar CTAs.' },
      ],
    },
  };


  const fmt = {
    euro(n) {
      return '€' + n.toLocaleString('es-ES');
    },
    num(n) {
      return n.toLocaleString('es-ES');
    },
    pct(n) {
      return n.toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + '%';
    },
  };

  let currentPeriod = '30';

  function $(sel) {
    return document.querySelector(sel);
  }

  function deltaBadgeClass(up) {
    return up
      ? 'inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-400'
      : 'inline-flex items-center gap-1 rounded-full bg-red-500/15 px-2.5 py-0.5 text-xs font-medium text-red-400';
  }

  function roiBadgeClass(cls) {
    return cls === 'emerald'
      ? 'rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-medium text-emerald-400'
      : 'rounded-full bg-amber-500/15 px-2 py-0.5 text-xs font-medium text-amber-400';
  }

  function platformColorClass(color) {
    const map = { pink: 'text-pink-400', surface: 'text-surface-100', red: 'text-red-400' };
    return map[color] || 'text-white';
  }

  function alertClasses(type) {
    const map = {
      red: { border: 'border-red-500/20 bg-red-500/10', dot: 'bg-red-500', title: 'text-red-300' },
      emerald: { border: 'border-emerald-500/20 bg-emerald-500/10', dot: 'bg-emerald-500', title: 'text-emerald-300' },
      amber: { border: 'border-amber-500/20 bg-amber-500/10', dot: 'bg-amber-500', title: 'text-amber-300' },
    };
    return map[type] || map.amber;
  }

  function renderAlerts(alerts) {
    const ul = $('#alerts-list');
    if (!ul) return;
    ul.innerHTML = alerts
      .map((a) => {
        const c = alertClasses(a.type);
        return `<li class="flex gap-3 rounded-xl border ${c.border} p-3">
          <span class="mt-0.5 size-2 shrink-0 rounded-full ${c.dot}" aria-hidden="true"></span>
          <div>
            <p class="text-sm font-medium ${c.title}">${a.title}</p>
            <p class="text-xs text-surface-200">${a.text}</p>
          </div>
        </li>`;
      })
      .join('');
  }

  function renderProductsTable(rows) {
    const tbody = $('#tabla-productos-body');
    if (!tbody) return;
    tbody.innerHTML = rows
      .map(
        (r) => `<tr class="transition-colors hover:bg-surface-800/30">
        <td class="px-5 py-3.5 font-medium text-white">${r.name}</td>
        <td class="px-5 py-3.5 text-surface-200">${fmt.euro(r.price)}</td>
        <td class="px-5 py-3.5 text-brand-300">${fmt.euro(r.commission)}</td>
        <td class="px-5 py-3.5 text-surface-200">${r.conv}</td>
        <td class="px-5 py-3.5"><span class="${roiBadgeClass(r.roiClass)}">${r.roi}</span></td>
      </tr>`
      )
      .join('');
  }

  function renderPlatformsTable(rows) {
    const tbody = $('#tabla-plataformas-body');
    if (!tbody) return;
    tbody.innerHTML = rows
      .map(
        (r) => `<tr class="transition-colors hover:bg-surface-800/30">
        <td class="px-5 py-3.5 font-medium ${platformColorClass(r.color)}">${r.name}</td>
        <td class="px-5 py-3.5 text-surface-200">${fmt.num(r.reach)}</td>
        <td class="px-5 py-3.5 text-surface-200">${r.engagement}</td>
        <td class="px-5 py-3.5 text-surface-200">${r.conv}</td>
        <td class="px-5 py-3.5 text-xs text-emerald-400">${r.highlight}</td>
      </tr>`
      )
      .join('');
  }

  function renderCampaigns(rows) {
    const tbody = $('#tabla-campanas-body');
    if (!tbody) return;
    const platformClass = { Instagram: 'text-pink-400', TikTok: 'text-surface-100', YouTube: 'text-red-400' };
    tbody.innerHTML = rows
      .map(
        (r) => `<tr class="transition-colors hover:bg-surface-800/30">
        <td class="px-5 py-3.5 font-medium text-white">${r.name}</td>
        <td class="px-5 py-3.5 text-surface-200">${r.dates}</td>
        <td class="px-5 py-3.5 text-surface-200">${r.product}</td>
        <td class="px-5 py-3.5 ${platformClass[r.platform] || 'text-surface-200'}">${r.platform}</td>
        <td class="px-5 py-3.5 text-surface-200">${fmt.num(r.reach)}</td>
        <td class="px-5 py-3.5 text-surface-200">${r.conv}</td>
        <td class="px-5 py-3.5 font-medium text-emerald-400">${fmt.euro(r.commission)}</td>
      </tr>`
      )
      .join('');
  }

  function renderTopProducts(items) {
    const ol = $('#top-productos-list');
    if (!ol) return;
    const badgeClasses = [
      'flex size-7 items-center justify-center rounded-lg bg-emerald-500/15 text-xs font-bold text-emerald-400',
      'flex size-7 items-center justify-center rounded-lg bg-amber-500/15 text-xs font-bold text-amber-400',
      'flex size-7 items-center justify-center rounded-lg bg-brand-500/15 text-xs font-bold text-brand-400',
    ];
    ol.innerHTML = items
      .map(
        (item, i) => `<li class="flex items-center gap-3">
        <span class="${badgeClasses[i]}">${item.rank}</span>
        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-medium text-white">${item.name}</p>
          <p class="text-xs text-surface-200">${fmt.euro(item.amount)} en comisiones</p>
        </div>
      </li>`
      )
      .join('');
  }

  function renderTopPlatforms(items) {
    const ol = $('#top-plataformas-list');
    if (!ol) return;
    const badgeClasses = [
      'flex size-7 items-center justify-center rounded-lg bg-pink-500/15 text-xs font-bold text-pink-400',
      'flex size-7 items-center justify-center rounded-lg bg-surface-100/15 text-xs font-bold text-surface-100',
      'flex size-7 items-center justify-center rounded-lg bg-red-500/15 text-xs font-bold text-red-400',
    ];
    ol.innerHTML = items
      .map(
        (item, i) => `<li class="flex items-center gap-3">
        <span class="${badgeClasses[i]}">${item.rank}</span>
        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-medium text-white">${item.name}</p>
          <p class="text-xs text-surface-200">${item.detail}</p>
        </div>
      </li>`
      )
      .join('');
  }

  function applyPeriod(periodKey) {
    const data = PERIODS[periodKey];
    if (!data) return;
    currentPeriod = periodKey;

    const k = data.kpis;

    $('#kpi-comisiones-value').textContent = fmt.euro(k.comisiones.value);
    $('#kpi-comisiones-sub').textContent = k.comisiones.sub;
    const dc = $('#kpi-comisiones-delta');
    dc.textContent = k.comisiones.delta;
    dc.className = deltaBadgeClass(k.comisiones.deltaUp);

    $('#kpi-conversiones-value').textContent = k.conversiones.value;
    $('#kpi-conversiones-rate').textContent = k.conversiones.rate;
    $('#kpi-conversiones-delta').textContent = k.conversiones.delta;
    $('#kpi-conversiones-delta').className = deltaBadgeClass(k.conversiones.deltaUp);

    $('#kpi-engagement-value').textContent = k.engagement.value;
    $('#kpi-engagement-sub').textContent = k.engagement.sub;
    $('#kpi-engagement-delta').textContent = k.engagement.delta;
    $('#kpi-engagement-delta').className = deltaBadgeClass(k.engagement.deltaUp);

    $('#kpi-ventas-value').textContent = k.ventas.value;
    $('#kpi-ventas-price').textContent = k.ventas.avgPrice;
    $('#kpi-ventas-delta').textContent = k.ventas.delta;
    $('#kpi-ventas-delta').className = deltaBadgeClass(k.ventas.deltaUp);

    $('#kpi-ctr-value').textContent = k.ctr.value;
    $('#kpi-ctr-sub').textContent = k.ctr.sub;
    $('#kpi-ctr-delta').textContent = k.ctr.delta;
    $('#kpi-ctr-delta').className = deltaBadgeClass(k.ctr.deltaUp);

    $('#kpi-cpc-value').textContent = k.cpc.value;
    $('#kpi-cpc-margin').textContent = fmt.euro(k.cpc.margin);
    $('#kpi-cpc-delta').textContent = k.cpc.delta;
    $('#kpi-cpc-delta').className = deltaBadgeClass(k.cpc.deltaUp);

    const f = data.funnel;
    $('#funnel-alcance').textContent = fmt.num(f.alcance);
    $('#funnel-clics').innerHTML = `${fmt.num(f.clics)} <span class="text-brand-300">(${fmt.pct(f.ctrPct)})</span>`;
    $('#funnel-ventas').innerHTML = `${f.ventas} <span class="text-emerald-400">(${fmt.pct(f.convPct)})</span>`;
    $('#funnel-bar-clics').style.width = Math.min(100, (f.clics / f.alcance) * 100 * 10) + '%';
    $('#funnel-bar-ventas').style.width = Math.min(100, (f.ventas / f.alcance) * 100 * 20) + '%';

    const pl = data.platforms;
    $('#plat-ig-revenue').textContent = fmt.euro(pl.instagram.revenue);
    $('#plat-tt-revenue').textContent = fmt.euro(pl.tiktok.revenue);
    $('#plat-yt-revenue').textContent = fmt.euro(pl.youtube.revenue);
    $('#plat-ig-bar').style.width = pl.instagram.width + '%';
    $('#plat-tt-bar').style.width = pl.tiktok.width + '%';
    $('#plat-yt-bar').style.width = pl.youtube.width + '%';
    $('#plat-best-roi').textContent = `Instagram (${pl.instagram.roi})`;

    const pr = data.products;
    $('#prod-a-amount').textContent = fmt.euro(pr.a.commission);
    $('#prod-b-amount').textContent = fmt.euro(pr.b.commission);
    $('#prod-c-amount').textContent = fmt.euro(pr.c.commission);
    $('#prod-a-bar').style.height = pr.a.height + '%';
    $('#prod-b-bar').style.height = pr.b.height + '%';
    $('#prod-c-bar').style.height = pr.c.height + '%';

    const eng = data.engagement;
    $('#eng-avg').textContent = `Promedio global: ${eng.avg}`;
    $('#eng-ig-rate').textContent = eng.instagram.rate;
    $('#eng-ig-likes').textContent = fmt.num(eng.instagram.likes);
    $('#eng-ig-comments').textContent = fmt.num(eng.instagram.comments);
    $('#eng-ig-saved').textContent = fmt.num(eng.instagram.saved);
    $('#eng-tt-rate').textContent = eng.tiktok.rate;
    $('#eng-tt-likes').textContent = fmt.num(eng.tiktok.likes);
    $('#eng-tt-comments').textContent = fmt.num(eng.tiktok.comments);
    $('#eng-tt-shares').textContent = fmt.num(eng.tiktok.shares);
    $('#eng-yt-rate').textContent = eng.youtube.rate;
    $('#eng-yt-likes').textContent = fmt.num(eng.youtube.likes);
    $('#eng-yt-comments').textContent = fmt.num(eng.youtube.comments);
    $('#eng-yt-views').textContent = fmt.num(eng.youtube.views);

    $('#act-reels').textContent = data.activity.reels;
    $('#act-youtube').textContent = data.activity.youtube;
    $('#act-posts').textContent = data.activity.posts;
    $('#act-campaigns').textContent = data.activity.campaigns;

    renderAlerts(data.alerts);
    renderProductsTable(data.productsTable);
    renderPlatformsTable(data.platformsTable);
    renderCampaigns(data.campaigns);
    renderTopProducts(data.topProducts);
    renderTopPlatforms(data.topPlatforms);

    $('#fecha-actualizacion').textContent = 'Actualizado: ' + data.updated;
    $('#header-periodo').textContent = 'Consolidado multi-plataforma · ' + data.label;

    const kpisSection = $('#kpis');
    if (kpisSection) {
      kpisSection.classList.add('ring-2', 'ring-brand-500/40');
      setTimeout(() => kpisSection.classList.remove('ring-2', 'ring-brand-500/40'), 600);
    }
  }

  function exportReport() {
    const data = PERIODS[currentPeriod];
    const lines = [
      'InfluenceHub — Reporte de Métricas',
      'Periodo: ' + data.label,
      'Generado: ' + new Date().toLocaleString('es-ES'),
      '',
      '=== KPIs ===',
      'Comisiones totales,' + data.kpis.comisiones.value,
      'Conversiones,' + data.kpis.conversiones.value,
      'Tasa de conversión,' + data.kpis.conversiones.rate,
      'Engagement,' + data.kpis.engagement.value,
      'Ventas,' + data.kpis.ventas.value,
      'CTR,' + data.kpis.ctr.value,
      'Coste por conversión,' + data.kpis.cpc.value,
      '',
      '=== Productos ===',
      'Producto,Precio,Comisión,Conversiones,ROI',
      ...data.productsTable.map((r) => `${r.name},${r.price},${r.commission},${r.conv},${r.roi}`),
      '',
      '=== Plataformas ===',
      'Plataforma,Alcance,Engagement,Conversiones',
      ...data.platformsTable.map((r) => `${r.name},${r.reach},${r.engagement},${r.conv}`),
      '',
      '=== Campañas ===',
      'Campaña,Fechas,Producto,Plataforma,Alcance,Conversiones,Comisiones',
      ...data.campaigns.map((r) => `${r.name},${r.dates},${r.product},${r.platform},${r.reach},${r.conv},${r.commission}`),
    ];

    const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'influencehub-reporte-' + currentPeriod + '.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  function scrollToFilter(targetId, btn) {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.classList.add('ring-2', 'ring-brand-500/50');
      setTimeout(() => el.classList.remove('ring-2', 'ring-brand-500/50'), 1200);
    }
    document.querySelectorAll('[data-filter-btn]').forEach((b) => {
      b.className =
        'rounded-lg bg-surface-800 px-3 py-1.5 text-xs font-medium text-surface-200 transition-colors hover:bg-surface-700';
    });
    if (btn) {
      btn.className =
        'rounded-lg bg-brand-600/20 px-3 py-1.5 text-xs font-medium text-brand-300 transition-colors';
    }
  }

  function init() {
    const periodoSelect = $('#periodo');
    if (periodoSelect) {
      periodoSelect.addEventListener('change', (e) => applyPeriod(e.target.value));
    }

    const exportBtn = $('#btn-exportar');
    if (exportBtn) exportBtn.addEventListener('click', exportReport);

    document.querySelectorAll('[data-filter-btn]').forEach((btn) => {
      btn.addEventListener('click', () => scrollToFilter(btn.dataset.filterTarget, btn));
    });

    applyPeriod('30');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
