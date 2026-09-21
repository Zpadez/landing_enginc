# Landing Page — ENGINC (Pack Starter / HVAC 360 / Mentoría)

Landing page de venta para los packs formativos de ENGINC (cursos y recursos de HVAC). Sitio estático, una sola página, en español, orientado a conversión (CTA "Quiero comenzar" repetido a lo largo del scroll).

Basado en el diseño: `LANDING_PAGE_ENGINC.pdf` (Illustrator, 2 páginas / 2 mitades del scroll).

---

## 1. Stack sugerido

- HTML + CSS + JS plano (sin frameworks), consistente con el resto de proyectos de Enfoca2S Studios.
- Sin backend: los botones "Quiero comenzar" / "Quiero mi Starter ENGINC" enlazan al checkout o formulario externo (definir URL).
- Slider/carrusel simple en JS vanilla (sin librerías) para las secciones con flechas ◀ ▶.
- Imágenes optimizadas (WebP + fallback) por el peso de fotos HVAC en alta resolución.

## 2. Estructura de carpetas propuesta

```
enginc-landing/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js         # sliders, scroll suave, menú
├── img/
│   ├── hero/
│   ├── masterclasses/
│   ├── ebooks/
│   ├── cursos-360/
│   └── icons/
└── README.md
```

## 3. Paleta de colores (aproximada, verificar con el PDF/marca)

| Uso | Color aprox. |
|---|---|
| Primario (morado/índigo — botones, franjas, pills) | `#4A4BA0` |
| Navy oscuro (secciones "¿Y ahora qué hago?", CTA final, testimonios) | `#16284C` / `#0F1B33` |
| Azul acento (masterclasses, overlays de fotos, icono play) | `#1E6FE0` |
| Fondo general | `#E9EAEC` (gris muy claro) |
| Texto sobre fondo claro | Navy oscuro `#16284C` |
| Texto sobre fondo oscuro/morado | Blanco `#FFFFFF` |

## 4. Tipografía

- Sans-serif bold/heavy para titulares (estilo "Poppins/Montserrat ExtraBold" o similar geométrica).
- Mismo tipo de letra en peso regular/medium para cuerpo de texto.
- Títulos de sección: patrón recurrente **"Palabra subrayada" + "Palabra en negrita debajo"** (p. ej. "ENGINC PACK" subrayado / "STARTER" en negrita).

## 5. Componentes reutilizables (se repiten varias veces en el diseño)

- **Navbar**: fondo morado, logo ENGINC (icono + texto) a la izquierda, buscador redondeado a la derecha.
- **Franja de confianza**: banda morada angosta con texto centrado `Pago seguro · Acceso inmediato · Garantía de 7 días`. Aparece varias veces entre secciones.
- **Botón CTA primario**: rectángulo navy oscuro, texto blanco, mayúsculas, esquinas redondeadas (`QUIERO COMENZAR`).
- **Botón CTA secundario**: rectángulo blanco sobre fondo morado, texto morado (`QUIERO MI STARTER ENGINC`).
- **Tarjeta de precio**: bloque morado redondeado con "Solo", precio grande en blanco, "Pago único" + "12 meses de acceso" y botón.
- **Puntos de paginación**: fila de 6 puntos (`• • • • • •`) debajo de bloques con imagen de fondo, indicando slider/scroll.
- **Pills decorativas**: cápsulas moradas sólidas, decorativas, junto a títulos de sección.
- **Cards con video**: miniatura con overlay morado, botón de play circular azul, duración en esquina inferior derecha.
- **Carrusel con flechas**: `◀` / `▶` en los extremos, usado en masterclasses, ebooks, cursos, testimonios.
- **Card de testimonio**: fondo morado, avatar circular, 5 estrellas, nombre + cargo, cita en cursiva/comillas.
- **Chip de pregunta** (íconos de burbuja de chat en la sección "¿Y ahora qué hago?").

## 6. Secciones (orden de scroll, de arriba hacia abajo)

1. **Header / Hero**
   - Navbar morado con logo + buscador.
   - Imagen de fondo (técnico HVAC trabajando) con overlay azul.
   - Texto grande superpuesto: "PACK STARTER" (itálica) + "ENGINC" (bold enorme).

2. **Intro del pack + oferta**
   - Título "ENGINC PACK STARTER" (subrayado + bold).
   - Puntos de paginación.
   - Descripción corta del método.
   - Tarjeta de precio (Solo 19$ · Pago único · 12 meses de acceso) + lista de lo que incluye (8 masterclasses +10h, 10 ebooks técnicos, Acceso 12 meses).
   - Botón `QUIERO COMENZAR`.
   - Franja de confianza (pago seguro / acceso inmediato / garantía 7 días).

3. **Bloque de dudas frecuentes (mini-FAQ visual)**
   - Fondo navy oscuro. 3 íconos de chat con preguntas cortas ("¿Y ahora qué hago con este proyecto?", "¿Por dónde comienzo?", "Tengo poco tiempo para aprender…").

4. **Contraste universidad vs. ENGINC**
   - Fondo con imagen tech/azul oscuro.
   - "La universidad **te enseña ingeniería**" / "Nosotros te enseñamos a **comenzar a aplicarla**".

5. **"¿Por qué creamos estos documentos para ti?"**
   - Título de sección + marca de agua "ENGINC" en outline gigante de fondo.
   - Video testimonial/explicativo del fundador (thumbnail con play, duración 02:36).
   - "¿Te ha pasado?" + subtítulo.
   - 4 chips con preguntas tipo ("¿Por dónde comienzo?", "¿Qué información debo recopilar?", "¿Qué condiciones utilizo?", "¿Qué norma debo consultar?") en carrusel.
   - Imagen 3D de cerebro + frase "No siempre es que te falte conocimiento. Muchas veces necesitas aprender a **CONECTARLO**" sobre fondo navy.

6. **"¿Qué incluye el Starter ENGINC?"**
   - Título subrayado + bold.
   - Fotos de técnicos trabajando (pizarra con diagramas, equipos HVAC).
   - "Conocimientos clave, **experiencias reales y guías prácticas**." + badge `+10 horas de aprendizaje`.

7. **Catálogo — 8 Masterclasses**
   - Título + carrusel horizontal de tarjetas con foto/thumbnail (una con texto "Recopilar información en proyectos HVAC", el resto con overlay de play).

8. **Catálogo — 10 Ebooks técnicos**
   - Título + carrusel horizontal de tarjetas: foto + nombre (ej. "Ventilación en hospitales") + descripción corta ("Guía práctica con casos reales").

9. **Extra incluido**
   - Fondo navy. Imagen de e-reader/libro abierto.
   - "Hoja de estrategia **de diseño para sistemas de agua helada y VRF** (paso a paso)".

10. **Cierre de oferta Starter**
    - Franja de confianza.
    - Tarjeta de precio final (Solo 19$ · Pago único · 12 meses de acceso) + botón `QUIERO MI STARTER ENGINC`.

11. **Puente "Aprender es solo el primer paso"**
    - Ilustración de escalera con 3 pasos: **Aprende → Aplica → Evoluciona** (muñeco caminando, subiendo escalones).
    - Texto: "Lleva tu conocimiento a proyectos reales".

12. **Pack HVAC 360 (tier 2, "Más Popular")**
    - Franja de encabezado navy con badge "MÁS POPULAR".
    - Título "PACK HVAC 360" + descripción.
    - Tarjeta de precio (Solo 89$ · Pago único · 12 meses) + lista de beneficios (Todo el Starter, 8 cursos completos +60h, formatos y hojas de cálculo, checklists, comunidad).
    - Botón `QUIERO COMENZAR` + franja de confianza.

13. **Catálogo — 8 Cursos completos**
    - Grid 4x2 de tarjetas de curso (foto + título, ej. "Cálculo y selección de equipos HVAC para quirófanos").

14. **Herramientas para aplicar**
    - Bloque azul grisáceo con 3 íconos de estrella: Planificación de actividades / Cálculo de cargas térmicas / Cálculo de ductería.

15. **Beneficios de la plataforma**
    - 4 chips con ícono de estrella: Cursos y masterclasses / Ebooks y descargables / Tu progreso de aprendizaje / Acceso desde cualquier dispositivo.

16. **Pack HVAC 360 + Mentoría 1:1 (tier 3)**
    - Fondo navy. Foto/avatar del mentor + cita destacada: *"Tu proyecto. Tu crecimiento. Mi experiencia para acompañarte."* — Ing. José Díaz, Fundador de ENGINC.
    - Tarjeta de precio (Solo 119$ · Pago único · 12 meses) + botón `QUIERO EL PACK + MENTORÍA`.
    - "Cupos limitados" + lista de contenido (Todo el Pack HVAC 360, sesión 1:1 de 90 min, revisión de proyecto, diagnóstico, recomendaciones, plan de acción 7/30 días, grabación de la sesión).
    - Botón `QUIERO COMENZAR`.

17. **Testimonios**
    - Carrusel de tarjetas moradas: avatar, 5 estrellas, nombre + cargo, cita.

18. **Garantía ENGINC**
    - Banda con imagen tech de fondo: "Garantía ENGINC de 7 días — Entra. Conoce la plataforma. Decide."

19. **Preguntas frecuentes**
    - Título + lista de preguntas (¿Cuánto tiempo tengo acceso? ¿Las clases son en vivo? ¿Incluye certificado? ¿Puedo verlo desde mi teléfono? ¿Incluye VRF? ¿Puedo cambiar de plan después?). *(Respuestas a definir con el cliente — el diseño solo muestra las preguntas, posible acordeón).*

20. **CTA final**
    - Banda morada: "¿Listo para comenzar? Tu futuro profesional comienza con la decisión que tomes hoy." + botón `QUIERO COMENZAR`.

21. **Comparativa de planes**
    - 4 tarjetas de precio en fila (Starter / HVAC 360 / Mentoría / — confirmar el 4to plan con el cliente, en el diseño se repite el mismo precio de referencia).

22. **Footer**
    - Fondo navy. Logo ENGINC + tagline "Conocimiento que construye sueños" + enlaces (Términos · Privacidad · Soporte · Contacto) + copyright "© 2026 ENGINC. Todos los derechos reservados."

## 7. Pendientes / a confirmar con el cliente

- [ ] URL de checkout/pago para cada botón CTA (Starter, HVAC 360, Mentoría).
- [ ] Contenido real de las 8 masterclasses, 10 ebooks y 8 cursos (el diseño repite placeholders).
- [ ] Respuestas de la sección de FAQ (el diseño solo lista las preguntas).
- [ ] Testimonios reales (nombre, cargo, foto, cita) — el diseño usa el mismo testimonio repetido como placeholder.
- [ ] Foto/avatar del mentor (Ing. José Díaz) y video del fundador (02:36).
- [ ] Detalle del 4º plan en la comparativa final (el diseño muestra 4 tarjetas con el mismo precio de placeholder).
- [ ] Definir si el FAQ va en acordeón (recomendado para mobile, dado que el diseño es una sola columna larga).
- [ ] Confirmar paleta exacta de marca (colores aquí son aproximados, sacados por muestreo del PDF).

## 8. Notas de responsive

El diseño del PDF está pensado para desktop/scroll largo. Para mobile:
- Los carruseles (masterclasses, ebooks, cursos, testimonios) deben quedar en scroll horizontal táctil o 1 tarjeta visible + flechas.
- El grid 4x2 de "8 Cursos completos" pasa a 1 o 2 columnas.
- Las franjas de confianza y CTA final deben apilar texto y botón en vertical.
