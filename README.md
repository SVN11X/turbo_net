# turbo_net

**turbo_net** es una página web estática para medir velocidad de internet desde GitHub Pages.

## Funcionalidades incluidas

- Medición de latencia tipo HTTP.
- Cálculo de jitter.
- Estimación de pérdida HTTP.
- Medición de descarga multi-conexión.
- Medición de subida opcional con backend externo.
- Velocímetro visual en tiempo real.
- Historial local en el navegador.
- Botón para copiar resultados.
- Diseño responsive para computador y celular.

## Estructura del repositorio

```text
/index.html
/speedtest_10mb.bin
/speedtest_50mb.bin
/speedtest_100mb.bin
/upload-worker.js
/README.md
/.nojekyll
```

## Publicar en GitHub Pages

1. Sube todos los archivos al repositorio.
2. En GitHub entra a **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Selecciona la rama `main` y carpeta `/root`.
5. Guarda los cambios.

La página quedará disponible en una URL similar a:

```text
https://tuusuario.github.io/turbo_net/
```

## Sobre la medición de subida

GitHub Pages solo sirve archivos estáticos. Por eso puede medir latencia y descarga, pero no puede recibir datos para calcular subida real.

Para activar subida real:

1. Crea un Worker en Cloudflare.
2. Copia el contenido de `upload-worker.js`.
3. Publica el Worker.
4. Copia la URL del Worker.
5. En turbo_net abre **Opciones avanzadas** y pega la URL.
6. Ejecuta el test completo.

## Nota importante

Los resultados son referenciales. Pueden variar por el WiFi, distancia al router, congestión de red, navegador, caché, CDN de GitHub Pages y carga del equipo.

Esta herramienta no usa la marca, servidores ni tecnología propietaria de Ookla.
