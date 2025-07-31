/**
 * Clase Node
 * Representa un nodo visual flotante editable y draggable en el canvas.
 */
export class Node {
    static contador = 0;

    /**
     * Constructor del nodo.
     * @param {string} tipo - Tipo de nodo ('idea', 'texto', etc.)
     * @param {object} opciones - Configuración inicial (posición, contenido, color)
     */
    constructor(tipo = 'idea', opciones = {}) {
        this.tipo = tipo;
        this.id = opciones.id || `nodo-${++Node.contador}`;

        this.posX = opciones.x || 100;
        this.posY = opciones.y || 100;
        this.color = opciones.color || '#d41c1cff';
        this.texto = opciones.texto || 'Nuevo nododd';

        this.elemento = this._crearElementoNodo();

        this.modoConectar = false;
        this.nodoSeleccionado = null;
    }


    /**
     * Crea el elemento HTML del nodo.
     * @returns {HTMLElement}
     */
    _crearElementoNodo() {
        const nodo = document.createElement('div');
        nodo.id = this.id;
        nodo.className = 'nodo position-absolute border rounded p-2';
        nodo.style.top = `${this.posY}px`;
        nodo.style.left = `${this.posX}px`;

        // Definimos el contenido interno del nodo
        nodo.innerHTML = `
    <div class="card shadow-sm border-0 h-100">
        <div class="card-header">
        ${this.texto}
        </div>
        <div class="card-body p-2 text-center">
            <div contentEditable="true" class="contenido-nodo fw-semibold small text-dark">
                
            </div>
        </div>
        <div class="card-footer bg-transparent border-0 d-flex justify-content-between px-2 pt-0 acciones-nodo">
            <button class="btn btn-sm btn-outline-primary btn-conectar" title="Conectar">
                <i class="bi bi-link-45deg"></i>
            </button>
            <button class="btn btn-sm btn-outline-danger btn-eliminar" title="Eliminar">
                <i class="bi bi-x-circle"></i>
            </button>
        </div>
    </div>
`;

        // Aplica el color de fondo al contenido editable
        const contenido = nodo.querySelector('.contenido-nodo');
        contenido.style.backgroundColor = this.color;

        // Eventos personalizados
        nodo.querySelector('.btn-eliminar').addEventListener('click', () => {
            nodo.dispatchEvent(new CustomEvent('eliminarNodo', { detail: { nodo: this } }));
        });

        nodo.querySelector('.btn-conectar').addEventListener('click', () => {
            nodo.dispatchEvent(new CustomEvent('modoConectarNodo', { detail: { nodo: this } }));
        });

        return nodo;
    }

    getModificarVariables() {
        return { sel: this.nodoSeleccionado, con: this.modoConectar }
    }

    /**
     * Habilita el modo de conexión entre nodos al hacer clic sobre ellos.
     * Cuando se seleccionan dos nodos consecutivos, se crea un conector entre ellos.
     * 
     * @param {HTMLElement} nodo - Nodo DOM al que se le habilitará la selección para conectar.
     */





    /**
     * Devuelve el elemento HTML asociado al nodo.
     * @returns {HTMLElement}
     */
    getElemento() {
        return this.elemento;
    }

    /**
     * Serializa el nodo a un objeto JSON.
     * @returns {object}
     */
    serializar() {
        return {
            id: this.id,
            tipo: this.tipo,
            texto: this.elemento.querySelector('.contenido-nodo').innerText,
            x: parseInt(this.elemento.style.left),
            y: parseInt(this.elemento.style.top),
            color: this.elemento.style.backgroundColor
        };
    }
}
