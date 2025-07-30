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
        this.color = opciones.color || '#ffffff';
        this.texto = opciones.texto || 'Nuevo nodo';

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
        nodo.className = 'nodo position-absolute border rounded bg-white p-2';
        //nodo.contentEditable = true;
        nodo.innerText = this.texto;
        nodo.style.top = `${this.posY}px`;
        nodo.style.left = `${this.posX}px`;
        nodo.style.backgroundColor = this.color;
        // nuevo código 

        // Contenido editable
        nodo.innerHTML = `
            <div contentEditable="true" class="contenido-nodo">${this.texto}</div>
            <div class="acciones-nodo">
                <button class="btn-conectar" title="Conectar"><i class="bi bi-link-45deg"></i></button>
                <button class="btn-eliminar" title="Eliminar"><i class="bi bi-x-circle"></i></button>
            </div>
        `;

        // Eventos internos
        nodo.querySelector('.btn-eliminar').addEventListener('click', () => {
            // En lugar de eliminar directamente, lanza un evento personalizado
            const evento = new CustomEvent('eliminarNodo', {
                detail: { nodo: this } // 'this' es la instancia de Node
            });
            nodo.dispatchEvent(evento);
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
