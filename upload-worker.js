// Cloudflare Worker opcional para habilitar la medición real de subida en turbo_net.
// 1) Crea un Worker en Cloudflare.
// 2) Pega este código.
// 3) Publica el Worker.
// 4) Copia la URL del Worker en "Opciones avanzadas" dentro de turbo_net.

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400'
};

export default {
  async fetch(request) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method === 'GET') {
      return Response.json({ ok: true, service: 'turbo_net upload endpoint' }, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return Response.json({ ok: false, error: 'Method not allowed' }, { status: 405, headers: corsHeaders });
    }

    const body = await request.arrayBuffer();

    return Response.json({
      ok: true,
      receivedBytes: body.byteLength,
      receivedMiB: Number((body.byteLength / 1024 / 1024).toFixed(2))
    }, { headers: corsHeaders });
  }
};
