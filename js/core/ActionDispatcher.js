/**
 * Clase ActionDispatcher
 * Permite registrar y emitir eventos entre componentes (tipo pub/sub).
 */
export class ActionDispatcher {
    constructor() {
        this.eventos = {};
    }

    /**
     * Escuchar un evento específico.
     * @param {string} tipo - Nombre del evento
     * @param {Function} callback - Función a ejecutar cuando ocurra
     */
    on(tipo, callback) {
        if (!this.eventos[tipo]) {
            this.eventos[tipo] = [];
        }
        this.eventos[tipo].push(callback);
    }

    /**
     * Emitir un evento y pasarle datos.
     * @param {string} tipo - Nombre del evento
     * @param {*} payload - Datos a pasar
     */
    emit(tipo, payload) {
        if (this.eventos[tipo]) {
            this.eventos[tipo].forEach(cb => cb(payload));
        }
    }

    /**
     * Eliminar todos los suscriptores de un evento.
     * @param {string} tipo
     */
    off(tipo) {
        if (this.eventos[tipo]) {
            delete this.eventos[tipo];
        }
    }
}
