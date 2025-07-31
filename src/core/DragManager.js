/**
 * DragManager.js
 * 
 * Permitir que los objetos (nodos) puedan moverse libremente con el mouse.
 * 
 * Autor: José Dúmar
 * Fecha: 2025
 */

export class DragManager {
    constructor(connectorManager) {
        this.connectorManager = connectorManager;
        // Esta propiedad guarda el nodo que se está moviendo.
        this.elementoActivo = null;

        // Coordenadas del mouse (para saber cómo se mueve).
        this.posX = 0;
        this.posY = 0;
    }

    /**
     * Activar el arrastre sobre un elemento (nodo).
     * @param {HTMLElement} elemento - El nodo que quieres que se pueda mover.
     */
    habilitarArrastre(e, nodo) {
        if (e.target.closest('.acciones-nodo')) return;
        e.preventDefault();

        let inicialX = e.clientX;
        let inicialY = e.clientY;

        const onMouseMove = e => {
            const offsetX = e.clientX - inicialX;
            const offsetY = e.clientY - inicialY;

            nodo.style.top = (nodo.offsetTop + offsetY) + 'px';
            nodo.style.left = (nodo.offsetLeft + offsetX) + 'px';

            inicialX = e.clientX;
            inicialY = e.clientY;

            this.connectorManager.actualizarTodo();
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }



    /**
     * Esta función se ejecuta cuando el mouse se está moviendo mientras arrastras.
     * @param {MouseEvent} e 
     */
    _moverElemento(e) {
        if (!this.elementoActivo) return;

        // Calculamos cuánto se movió el mouse
        const deltaX = e.clientX - this.posX;
        const deltaY = e.clientY - this.posY;

        // Actualizamos la posición del nodo
        const nuevoTop = this.elementoActivo.offsetTop + deltaY;
        const nuevoLeft = this.elementoActivo.offsetLeft + deltaX;

        this.elementoActivo.style.top = nuevoTop + "px";
        this.elementoActivo.style.left = nuevoLeft + "px";

        // Actualizamos las nuevas posiciones del mouse
        this.posX = e.clientX;
        this.posY = e.clientY;
    }

    /**
     * Esta función se ejecuta cuando sueltas el nodo.
     * Limpia los eventos para que no siga moviéndose solo.
     * @param {Function} mover 
     * @param {Function} soltar 
     */
    _soltarElemento(mover, soltar) {
        document.removeEventListener("mousemove", mover);
        document.removeEventListener("mouseup", soltar);
        this.elementoActivo = null;
    }
}
