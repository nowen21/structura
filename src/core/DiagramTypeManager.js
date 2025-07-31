/**
 * DiagramTypeManager
 * Administra los tipos de diagramas que el framework soporta.
 * Cada tipo incluye nombre, descripción, ícono sugerido y formas compatibles.
 */

export class DiagramTypeManager {
    /**
     * Retorna el catálogo de tipos de diagramas disponibles.
     * @returns {Object} Diccionario de diagramas
     */
    static getTiposDiagramas() {
        return {
            mapaMental: {
                nombre: "Mapa Mental",
                descripcion: "Organiza ideas de forma radial para estimular el pensamiento creativo.",
                icono: "🧠",
                formasRecomendadas: ["elipse", "nube", "circulo", "nota"]
            },
            cuadroSinoptico: {
                nombre: "Cuadro Sinóptico",
                descripcion: "Muestra jerarquías y relaciones en forma de esquema textual.",
                icono: "📚",
                formasRecomendadas: ["rectangulo", "resumen", "comparador"]
            },
            diagramaFlujo: {
                nombre: "Diagrama de Flujo",
                descripcion: "Representa procesos mediante símbolos estandarizados.",
                icono: "🔁",
                formasRecomendadas: ["rectangulo", "rombo", "elipse"]
            },
            arbolDecision: {
                nombre: "Árbol de Decisión",
                descripcion: "Descompone decisiones complejas en ramas con posibles resultados.",
                icono: "🌳",
                formasRecomendadas: ["rombo", "rectangulo", "comparador"]
            },
            lineaTiempo: {
                nombre: "Línea de Tiempo",
                descripcion: "Muestra eventos ordenados cronológicamente.",
                icono: "🕒",
                formasRecomendadas: ["tarjeta", "circulo", "nota"]
            },
            kanban: {
                nombre: "Tablero Kanban",
                descripcion: "Organiza tareas en columnas por estado de avance.",
                icono: "📋",
                formasRecomendadas: ["tarjeta", "rectangulo"]
            },
            gantt: {
                nombre: "Tabla de Gantt",
                descripcion: "Planificación visual de tareas en el tiempo.",
                icono: "📅",
                formasRecomendadas: ["rectangulo", "barra", "comparador"]
            },
            mapaEmpatia: {
                nombre: "Mapa de Empatía",
                descripcion: "Visualiza emociones, pensamientos y comportamientos de un usuario.",
                icono: "🤝",
                formasRecomendadas: ["persona", "nota", "elipse"]
            },
            infografia: {
                nombre: "Infografía",
                descripcion: "Comunicación visual combinando texto, íconos e imágenes.",
                icono: "🖼️",
                formasRecomendadas: ["nube", "documento", "estrella"]
            },
            matrizFoda: {
                nombre: "Matriz FODA",
                descripcion: "Analiza Fortalezas, Oportunidades, Debilidades y Amenazas.",
                icono: "⚖️",
                formasRecomendadas: ["rectangulo", "comparador", "cuadro"]
            },
            ishikawa: {
                nombre: "Ishikawa (Espina de Pescado)",
                descripcion: "Identifica causas raíz de un problema complejo.",
                icono: "🐟",
                formasRecomendadas: ["ishikawa", "rectangulo", "flecha"]
            },
            mapaCalor: {
                nombre: "Mapa de Calor",
                descripcion: "Visualiza densidad o intensidad de datos por color.",
                icono: "🔥",
                formasRecomendadas: ["cuadro", "color", "barra"]
            }
        };
    }

    /**
     * Retorna un array con los IDs de tipos de diagramas disponibles.
     * @returns {Array<string>}
     */
    static listarTipos() {
        return Object.keys(this.getTiposDiagramas());
    }

    /**
     * Devuelve los detalles de un tipo de diagrama específico.
     * @param {string} tipo
     * @returns {Object|null}
     */
    static obtenerTipo(tipo) {
        return this.getTiposDiagramas()[tipo] || null;
    }
}
