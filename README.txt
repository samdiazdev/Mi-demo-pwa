MI DEMO PWA - INSTALACIÓN EN IPHONE

1. Descomprime mi-demo-pwa.zip en tu ordenador.
2. Entra en https://github.com y crea un repositorio nuevo, por ejemplo "mi-demo-pwa".
3. Sube TODOS los archivos y carpetas que están dentro de la carpeta mi-demo-pwa (index.html, app.js, etc.). No subas solamente el ZIP.
4. En el repositorio, entra en Settings > Pages.
5. En "Build and deployment", selecciona "Deploy from a branch".
6. Selecciona la rama "main" y la carpeta "/ (root)", y pulsa Save.
7. Espera a que GitHub Pages publique el sitio. La dirección será parecida a:
   https://TU-USUARIO.github.io/mi-demo-pwa/
8. En tu iPhone, abre ESA dirección con Safari.
9. Pulsa Compartir > Añadir a pantalla de inicio. Si aparece "Abrir como app web", actívalo y pulsa Añadir.
10. Abre Mi Demo desde el icono de la pantalla de inicio.

PRUEBA SIN INTERNET
- Abre la app una vez con Internet y espera unos segundos a que se almacenen sus archivos.
- Cierra la app.
- Activa el modo avión y vuelve a abrirla desde el icono.
- Añade un registro: el contador debe conservarse al cerrar y abrir de nuevo.

NOTAS
- Necesitas conexión la primera vez para publicar y cargar la app.
- GitHub Pages sirve los archivos por HTTPS; el Service Worker necesita HTTPS (o localhost durante desarrollo).
- El contador se guarda localmente en el almacenamiento del navegador de esa instalación. No se sincroniza entre dispositivos.
- No borres los datos del sitio ni desinstales la app si quieres conservar el contador. Esta demo no incluye exportación de copias de seguridad.
