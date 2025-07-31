/**
 * ShapeManager
 * Catálogo y gestor de formas visuales para nodos del framework.
 * Algunas usan clases Bootstrap, otras requieren CSS o SVG personalizado.
 */

export class ShapeManager {
    /**
     * Lista completa de formas disponibles, con su clase CSS e implementación.
     */
    static getFormasDisponibles() {
        return {
            // === FORMAS COMPATIBLES CON BOOTSTRAP (✅) ===
            rectangulo: {
                nombre: "Rectángulo",
                claseCSS: "forma-rectangulo", // se puede usar solo border/padding si quieres
                tipo: "bootstrap"
            },
            elipse: {
                nombre: "Elipse",
                claseCSS: "rounded-pill",
                tipo: "bootstrap"
            },
            circulo: {
                nombre: "Círculo",
                claseCSS: "rounded-circle",
                tipo: "bootstrap"
            },
            tarjeta: {
                nombre: "Tarjeta Kanban",
                claseCSS: "card",
                tipo: "bootstrap"
            },
            nota: {
                nombre: "Nota adhesiva",
                claseCSS: "forma-nota",
                tipo: "css"
            },

            // === FORMAS REQUIEREN CSS PERSONALIZADO (🧩) ===
            rombo: {
                nombre: "Rombo (Decisión)",
                claseCSS: "forma-rombo",
                tipo: "css"
            },
            hexagono: {
                nombre: "Hexágono",
                claseCSS: "forma-hexagono",
                tipo: "css"
            },
            trapecio: {
                nombre: "Trapecio",
                claseCSS: "forma-trapecio",
                tipo: "css"
            },
            estrella: {
                nombre: "Estrella",
                claseCSS: "forma-estrella",
                tipo: "css"
            },
            comparador: {
                nombre: "Paralelogramo",
                claseCSS: "forma-paralelogramo",
                tipo: "css"
            },
            resumen: {
                nombre: "Resumen",
                claseCSS: "forma-rectangulo-redondeado",
                tipo: "css"
            },

            // === FORMAS SVG O CON FONDOS IMAGEN (🖼️) ===
            nube: {
                nombre: "Nube (idea creativa)",
                claseCSS: "forma-nube",
                tipo: "svg"
            },
            carpeta: {
                nombre: "Carpeta (agrupador)",
                claseCSS: "forma-carpeta",
                tipo: "svg"
            },
            documento: {
                nombre: "Documento",
                claseCSS: "forma-documento",
                tipo: "svg"
            },
            persona: {
                nombre: "Persona (empatía)",
                claseCSS: "forma-persona",
                tipo: "svg"
            },
            engranaje: {
                nombre: "Proceso técnico",
                claseCSS: "forma-engranaje",
                tipo: "svg"
            },
            flecha: {
                nombre: "Flecha",
                claseCSS: "forma-flecha",
                tipo: "svg"
            },
            ishikawa: {
                nombre: "Espina de pescado",
                claseCSS: "forma-ishikawa",
                tipo: "svg"
            }
        };
    }

    /**
     * Aplica una forma al nodo visual, reemplazando la clase de forma anterior.
     * @param {HTMLElement} elementoNodo - Nodo DOM
     * @param {string} tipoForma - Clave de la forma ('rombo', 'nube', etc.)
     */
    static aplicarForma(elementoNodo, tipoForma) {
        const formas = this.getFormasDisponibles();
        const clases = Object.values(formas).map(f => f.claseCSS);
        elementoNodo.classList.remove(...clases);

        const forma = formas[tipoForma];
        if (forma) {
            elementoNodo.classList.add(forma.claseCSS);
        } else {
            console.warn(`Forma no reconocida: ${tipoForma}`);
        }
    }

    /**
     * Retorna un arreglo de claves de formas disponibles
     * @returns {Array<string>}
     */
    static listarClavesFormas() {
        return Object.keys(this.getFormasDisponibles());
    }

    /**
     * Devuelve el nombre legible de la forma según su clave
     * @param {string} tipoForma
     * @returns {string|null}
     */
    static obtenerNombreForma(tipoForma) {
        return this.getFormasDisponibles()[tipoForma]?.nombre || null;
    }

    /**
     * Devuelve el tipo de implementación que requiere la forma ('bootstrap', 'css', 'svg')
     * @param {string} tipoForma
     * @returns {string|null}
     */
    static obtenerTipoForma(tipoForma) {
        return this.getFormasDisponibles()[tipoForma]?.tipo || null;
    }
}
