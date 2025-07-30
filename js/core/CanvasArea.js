/**
 * Clase CanvasArea
 * Controla el área visual donde se colocan y mueven los nodos.
 */
export class CanvasArea {
    /**
     * Constructor del área de trabajo.
     * @param {string} containerId - ID del contenedor HTML (por ejemplo, 'canvas-area')
     */
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error(`No se encontró el contenedor con ID "${containerId}"`);
            return;
        }
       
        this.container.classList.add('position-relative'); // Asegura contexto de posición absoluta
    }

    /**
     * Limpia todo el contenido del área.
     */
    limpiar() {
        this.getElemento().innerHTML = '';
    }

    /**
     * Agrega un nodo HTML al canvas.
     * @param {HTMLElement} nodoElemento
     */
    agregarNodo(nodoElemento) {
        this.container.appendChild(nodoElemento);
    }

    /**
     * Devuelve el contenedor DOM del canvas.
     * @returns {HTMLElement}
     */
    getElemento() {
        return this.container;
    }



    /**
     * Permite ejecutar una función sobre todos los nodos hijos actuales.
     * @param {Function} callback
     */
    paraCadaNodo(callback) {
        this.container.querySelectorAll('.nodo').forEach(callback);
    }

    


 
}
