/**
 * Clase SVGLayer
 * Encapsula el elemento SVG donde se dibujan las líneas entre nodos.
 */
export class SVGLayer {
    /**
     * Constructor de la capa SVG.
     * @param {string} svgId - ID del elemento SVG (por ejemplo, 'svg-canvas')
     */
    constructor(svgId) {
        this.svg = document.getElementById(svgId);
        if (!this.svg) {
            console.error(`No se encontró el SVG con ID "${svgId}"`);
            return;
        }
        this.svg.classList.add('position-absolute');
        this.conexiones = [];
    }

    /**
     * Limpia todas las líneas SVG del canvas.
     */
    limpiar() {
        this.svg.innerHTML = '';
        this.conexiones = [];
    }


    agregarLinea(linea) {
        this.svg.appendChild(linea);
    }

    /**
     * Devuelve el elemento SVG.
     * @returns {SVGElement}
     */
    getElemento() {
        return this.svg;
    }
}
