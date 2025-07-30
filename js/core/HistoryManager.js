/**
 * Clase HistoryManager
 * Administra el historial de cambios para deshacer y rehacer.
 */
export class HistoryManager {
    constructor() {
        this.pilaDeshacer = [];
        this.pilaRehacer = [];
        this.maxHistorial = 50;
    }

    /**
     * Guarda un nuevo estado en el historial.
     * @param {object} estado - Objeto JSON representando el diagrama
     */
    guardarEstado(estado) {
        const copia = JSON.parse(JSON.stringify(estado)); // evitar referencias
        this.pilaDeshacer.push(copia);
        if (this.pilaDeshacer.length > this.maxHistorial) {
            this.pilaDeshacer.shift();
        }
        this.pilaRehacer = []; // limpiar rehacer al guardar nuevo estado
    }

    /**
     * Recupera el último estado para deshacer.
     * @returns {object|null}
     */
    deshacer() {
        if (this.pilaDeshacer.length > 1) {
            const estadoActual = this.pilaDeshacer.pop();
            this.pilaRehacer.push(estadoActual);
            return this.pilaDeshacer[this.pilaDeshacer.length - 1];
        }
        return null;
    }

    /**
     * Recupera el siguiente estado para rehacer.
     * @returns {object|null}
     */
    rehacer() {
        if (this.pilaRehacer.length > 0) {
            const estado = this.pilaRehacer.pop();
            this.pilaDeshacer.push(estado);
            return estado;
        }
        return null;
    }

    /**
     * Reinicia el historial completamente.
     */
    limpiar() {
        this.pilaDeshacer = [];
        this.pilaRehacer = [];
    }
}
