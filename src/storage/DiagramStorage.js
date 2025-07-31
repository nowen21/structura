/**
 * Clase DiagramStorage
 * Encargada de guardar y cargar el diagrama desde localStorage.
 */
export class DiagramStorage {
    constructor(clave = 'mi-diagrama') {
        this.clave = clave;
    }

    /**
     * Guarda el estado actual del diagrama como JSON.
     * @param {object} data - Objeto serializado desde DiagramManager
     */
    guardar(data) {
        try {
            const json = JSON.stringify(data);
            localStorage.setItem(this.clave, json);
        } catch (e) {
            console.error('Error guardando en localStorage', e);
        }
    }

    /**
     * Carga el diagrama desde localStorage.
     * @returns {object|null}
     */
    cargar() {
        try {
            const data = localStorage.getItem(this.clave);  // esto está cargando por defecto y no debe ser así
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Error cargando desde localStorage', e);
            return null;
        }
    }

    /**
     * Limpia el diagrama guardado.
     */
    eliminar() {
        localStorage.removeItem(this.clave);
    }
}
