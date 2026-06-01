# turbo_net - versión con servicios externos

Esta versión de turbo_net no usa archivos `.bin` ni servidor propio.  
La medición se realiza contra servicios externos de Cloudflare Speed Test:

- Descarga: `https://speed.cloudflare.com/__down`
- Subida: `https://speed.cloudflare.com/__up`

## Archivos necesarios

Solo necesitas subir estos archivos a tu repositorio:

```text
index.html
.nojekyll
README.md
```

## Publicación en GitHub Pages

1. Sube los archivos al repositorio.
2. Entra a `Settings > Pages`.
3. Selecciona `Deploy from branch`.
4. Elige `main` y `/root`.
5. Guarda los cambios.

## Importante

Los resultados pueden variar porque dependen de:

- WiFi o cable de red.
- Congestión de red.
- Navegador.
- VPN.
- Distancia al nodo de Cloudflare.
- Bloqueadores o políticas CORS.

Esta versión es más realista que usar archivos `.bin` dentro de GitHub Pages, porque evita caché local o archivos mal generados.
