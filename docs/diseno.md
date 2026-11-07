# Dirección visual

Se parte del [estudio compartido de Gemini](https://gemini.google.com/share/1eb97ca0d140), leído mediante navegador el 5 de septiembre de 2026.

David descartó expresamente el minimalismo visual de Emil Kowalski. Se ha elegido una composición con más presencia: tipografía grande, retrato en color, módulos de tamaños distintos, superficies marfil, carbón, verde suave y coral, y diagramas de datos, producto e IA hechos con CSS y SVG.

Referencias consultadas:
- [Brittany Chiang](https://brittanychiang.com/): organización de la experiencia, navegación por secciones y accesibilidad.
- [Rauno Freiberg](https://rauno.me/): atención a los detalles de interacción.
- [Gionatan Nese](https://www.gionatannese.com/): identidad personal y relación entre tipografía y composición.

El diseño es propio. Los diagramas de servicios son ilustraciones conceptuales, no capturas de proyectos ni resultados medidos. La experiencia de Hawkers muestra las tecnologías verificadas. Los únicos recuentos destacados son los años de trayectoria y las 11 certificaciones del contenido recuperado.

La navegación indica la sección activa; los empleos y las certificaciones usan `<details>` nativo: el contenido está en el HTML, se despliega sin JavaScript y se abre entero al imprimir. Las certificaciones conservan emisor y fecha de expedición, sin afirmar vigencia actual. Los enlaces de contacto abren LinkedIn.

La página conserva el contenido principal sin JavaScript. En móvil, antes de hidratar o sin JavaScript, el botón del menú enlaza a la navegación de secciones del pie; con JavaScript abre el diálogo. Las animaciones de entrada y hover respetan movimiento reducido. Los logos y las fuentes (`app/fonts/`, OFL, latín y latín extendido) se sirven localmente y el build no depende de Google Fonts. La foto principal es un WebP de 860 px (unos 26 KB); el original de 1,7 MB vive en `scripts/assets/` solo para generar la imagen social y no se publica.

En inglés, «Criterio.» se traduce como «Sense.»: «Judgement.» no cabía en el titular móvil y «Sense» enlaza con «solutions that make sense».
