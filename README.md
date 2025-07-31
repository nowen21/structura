# Structura
Framework web interactivo para crear mapas mentales, diagramas de flujo, Gantt, Kanban, mapas de empatía, cuadros sinópticos y más. Desarrollado con Laravel, jQuery y Bootstrap, permite edición visual, colaboración, exportación e integración multimedia en un entorno educativo y profesional.

# 🧠 Framework Interactivo para Mapas Mentales y Diagramas de Estudio

## 🎯 Objetivo
Este proyecto tiene como finalidad el desarrollo de un **framework interactivo, modular y extensible**, construido con **jQuery, Bootstrap, HTML y Laravel**, que permita a usuarios crear y gestionar de manera visual una variedad de diagramas de estudio, con enfoque educativo y profesional.

---
## 📁 Estructura del Proyecto

El framework está organizado en una arquitectura modular, limpia y escalable. A continuación se describe la estructura actual del proyecto:

├── public/
│ └── index.php # Punto de entrada principal (HTML base)
├── main.js # Archivo central que orquesta la lógica del framework
├── src/
│ ├── core/ # Módulos fundamentales del sistema
│ │ ├── ActionDispatcher.js # Gestión de eventos entre componentes
│ │ ├── CanvasArea.js # Área principal de dibujo sobre el lienzo
│ │ ├── Connector.js # Lógica para crear líneas entre nodos
│ │ ├── ConnectorManager.js # Gestor de conexiones entre nodos
│ │ ├── DiagramManager.js # Coordinador general del diagrama activo
│ │ ├── DiagramTypeManager.js # Control de tipos de diagramas
│ │ ├── DragManager.js # Gestión de arrastre y posición de nodos
│ │ ├── HistoryManager.js # Control del historial (undo/redo)
│ │ ├── Node.js # Definición del nodo gráfico y su lógica
│ │ ├── NodeFactory.js # Fábrica para crear nodos según tipo
│ │ ├── SVGLayer.js # Capa SVG para líneas y conectores
│
│ ├── inicializacion/ # Módulos de arranque y configuración inicial
│
│ ├── storage/ # Persistencia local (e.g., localStorage, JSON)
│
│ └── ui/ # Componentes visuales e interfaz de usuario
│ ├── styles/ # Archivos CSS y temas personalizados
│ ├── ShapeManager.js # Gestor de formas y elementos gráficos
│ ├── Sidebar.js # Lógica del panel lateral de herramientas
│ ├── Toolbar.js # Controles de herramientas principales
│
├── LICENSE # Archivo de licencia del proyecto
└── README.md # Documentación principal del proyecto

---

### 🧩 Componentes ya desarrollados

Todos los módulos listados anteriormente ya han sido implementados y conforman una base sólida para:

- **Creación, edición y conexión** de nodos visuales
- **Interacción fluida** sobre el canvas
- **Gestión modular** de funcionalidades (drag, toolbar, historial, nodos, SVG, etc.)
- **Diseño extensible** para integrar nuevos tipos de diagramas y funciones


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


