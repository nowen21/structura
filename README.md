# Structura
Framework web interactivo para crear mapas mentales, diagramas de flujo, Gantt, Kanban, mapas de empatía, cuadros sinópticos y más. Desarrollado con Laravel, jQuery y Bootstrap, permite edición visual, colaboración, exportación e integración multimedia en un entorno educativo y profesional.

# 🧠 Framework Interactivo para Mapas Mentales y Diagramas de Estudio

## 🎯 Objetivo
Este proyecto tiene como finalidad el desarrollo de un **framework interactivo, modular y extensible**, construido con **jQuery, Bootstrap, HTML y Laravel**, que permita a usuarios crear y gestionar de manera visual una variedad de diagramas de estudio, con enfoque educativo y profesional.

---

## ⚙️ Funcionalidades Principales

- 🧩 Creación de nodos y bloques mediante drag & drop
- 🔗 Conectores entre nodos: líneas, flechas, curvas
- ✏️ Edición inline con doble clic
- 📤 Exportación a PNG, PDF y JSON
- 📥 Importación desde archivos JSON
- 🎨 Temas personalizables (modo claro / oscuro)
- 🧭 Minimapa, zoom y navegación fluida
- ⏪ Historial de cambios (deshacer / rehacer)
- 📎 Soporte multimedia (imágenes, videos, enlaces)
- 👥 Edición colaborativa (Livewire / WebSockets)
- 🔐 Gestión de usuarios y permisos de acceso
- 📊 Estadísticas de uso con gráficas
- 🔌 Sistema de plugins/extensiones
- 📚 Biblioteca de plantillas prediseñadas

---

## 🧱 Tipos de Diagramas Soportados

- Mapas mentales
- Mapas de ideas
- Cuadros sinópticos
- Diagramas de flujo
- Árboles de decisión
- Líneas de tiempo
- Mapas conceptuales
- Mapas de empatía
- Tableros Kanban
- Tablas de Gantt
- Infografías interactivas
- Matrices SWOT (FODA)
- Mapas de calor (Heatmaps)
- Diagramas de Ishikawa (espina de pescado)
- Esquemas de comparación y presentación

---

## 🛠️ Tecnologías Utilizadas

| Área                       | Tecnologías                      |
|---------------------------|----------------------------------|
| Interfaz y UI             | jQuery UI, Bootstrap, SVG/Canvas |
| Backend                   | Laravel (Eloquent, REST APIs)    |
| Interactividad dinámica   | Laravel Livewire / AJAX          |
| Autenticación             | Laravel Breeze / Jetstream       |
| Exportación               | html2canvas, jsPDF, DomPDF       |
| Base de datos             | MySQL / MariaDB / JSON           |
| Estadísticas              | Chart.js                         |
| Colaboración              | Laravel Echo + WebSockets        |
| PWA                       | Bootstrap + Manifest.json        |

---

## 🗃️ Estructura de Datos

- `User`: Gestión de usuarios
- `Diagram`: Entidad principal del gráfico
- `Node` / `Block`: Nodos visuales del diagrama
- `Connection`: Relaciones entre nodos
- `DiagramType`: Tipo de diagrama
- `Template`: Plantillas base reutilizables
- `History`: Historial de acciones
- `Media`: Contenido multimedia adjunto
- `Permission`: Roles y permisos de acceso
- `Statistic`: Métricas de uso y actividad

---

## 👥 Público Objetivo

- Docentes y estudiantes de todos los niveles
- Profesionales en formación y capacitadores
- Equipos de trabajo y planificación visual
- Usuarios interesados en aprendizaje visual y estructurado

---

## 🚀 Futuras Integraciones

- IA para generación de mapas automáticos desde texto
- Compatibilidad con Moodle / Google Classroom
- Sincronización con herramientas como Trello o Notion
- Evaluaciones interactivas tipo autoaprendizaje
- Versión móvil PWA para uso desde celulares y tablets

---

## 📄 Licencia
Este proyecto se encuentra en desarrollo. La licencia y condiciones de uso serán definidas en próximas versiones.


