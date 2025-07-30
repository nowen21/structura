export class Connector {
    constructor(nodoOrigen,nodoDestino,svgCanvas) {
        this.nodoOrigen = nodoOrigen;
        this.nodoDestino = nodoDestino;
        this.svgCanvas = svgCanvas;
        this._updateHandler = null;

        // Crear la línea
        this.line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        this.line.setAttribute('stroke', 'red');
        this.line.setAttribute('stroke-width', '2');

        // ¡Agregar al DOM!
        this.svgCanvas.agregarLinea(this.line);

        // Dibujar inicialmente
        this.updatePosition();

        // Escuchar movimientos
        this._addListeners();
    }

    obtenerCentro(nodo) {
        const rect = nodo.getBoundingClientRect();
        const canvasRect = this.svgCanvas.getElemento().getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2 - canvasRect.left,
            y: rect.top + rect.height / 2 - canvasRect.top
        };
    }
    updatePosition() {
        const { x: x1, y: y1 } = this.obtenerCentro(this.nodoOrigen);
        const { x: x2, y: y2 } = this.obtenerCentro(this.nodoDestino);
        this.line.setAttribute("x1", x1);
        this.line.setAttribute("y1", y1);
        this.line.setAttribute("x2", x2);
        this.line.setAttribute("y2", y2);
    }


    _addListeners() {
        // Se guarda una referencia a la función para poder removerla después
        this._updateHandler = () => this.updatePosition();

        // Ojo: esto actualizará todas las líneas al mover cualquier cosa.
        // Para optimizar, puedes usar eventos personalizados en cada nodo.
        document.addEventListener("mousemove", this._updateHandler);
    }

    destroy() {
        if (this.line && this.line.remove) {
            this.line.remove();
        }

        // Remover el listener correctamente
        if (this._updateHandler) {
            document.removeEventListener("mousemove", this._updateHandler);
        }
    }
}
