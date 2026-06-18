#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
echo "============================================"
echo "  InfluenceHub — Vista previa en puerto 3000"
echo "  Carpeta: $(pwd)"
echo "============================================"
echo ""
echo "Cuando veas 'Serving HTTP on port 3000':"
echo "  1. Pestaña PUERTOS (Ports) abajo"
echo "  2. Puerto 3000 → clic en el GLOBO"
echo "  3. Si no aparece: Reenviar puerto → escribir 3000"
echo ""
python3 -m http.server 3000
