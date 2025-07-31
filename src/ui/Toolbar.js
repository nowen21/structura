/**
 * Clase Toolbar
 * Controla los botones de herramientas y su conexión con DiagramManager.
 */
export class Toolbar {
    /**
     * Constructor del toolbar.
     * @param {string} toolbarId - ID del contenedor HTML del toolbar
     */
    constructor(toolbarId) {
        this.toolbar = document.getElementById(toolbarId);
        this.diagramManager = null;
    }

    /**
     * Este método se encarga de decirle a cada botón de la aplicación qué debe hacer cuando alguien lo presion.
     * @param {DiagramManager} manager - Instancia del gestor principal
     */
    vincularEventos(manager) {
        if (this.eventosVinculados) return;
        this.diagramManager = manager;

        this._vincularBoton('btn-conectar', () => this.diagramManager.conectarNodos());
        this._vincularBoton('btn-nuevo', () => this.diagramManager.nuevoDiagrama());
        this._vincularBoton('btn-nodo', () => this.diagramManager.agregarNodo('idea'));
        this._vincularBoton('btn-texto', () => this.diagramManager.agregarTexto());
        this._vincularBoton('btn-imagen', () => this.diagramManager.agregarImagen());
        this._vincularBoton('btn-flecha', () => this.diagramManager.agregarConexion());
        this._vincularBoton('btn-eliminar', () => this.diagramManager.eliminarSeleccionado());

        this._vincularBoton('btn-deshacer', () => this.diagramManager.deshacer());
        this._vincularBoton('btn-rehacer', () => this.diagramManager.rehacer());

        this._vincularBoton('btn-exportar', () => this.diagramManager.exportar());
        this._vincularBoton('btn-importar', () => this.diagramManager.importar());
        this.eventosVinculados = true;
    }

    /**
     * Asocia un botón HTML con un evento.
     * @param {string} idBoton - ID del botón en el HTML
     * @param {Function} accion - Función a ejecutar al hacer clic
     */
    _vincularBoton(idBoton, accion) {
        const boton = document.getElementById(idBoton);
        if (boton) {
            boton.addEventListener('click', accion);
        } else {
            console.warn(`Botón con ID "${idBoton}" no encontrado.`);
        }
    }
    // cómo hago para vincular este al nodo?
    btnConectar(nodo) {
        const boton = nodo.querySelector('.btn-conectar');
        if (!boton) return;

        boton.addEventListener('click', (e) => {
            nodoSeleccionado = null;
            modoConectar = true;
        });
    }
}
