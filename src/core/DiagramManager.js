import { NodeFactory } from './NodeFactory.js';
export class DiagramManager {
    constructor({ canvas, svg, connector, dragger }) {
        this.canvas = canvas;
        this.svg = svg;
        this.connector = connector;
        this.dragger = dragger;


        this.conexiones = [];
        this.modoConectar = false;
        this.nodoSeleccionado = null;
        this.nodeFactory = new NodeFactory(this);
        this.toolbar = null;
        this.sidebar = null;
        this.storage = null;
        this.history = null;
        this.dispatcher = null;
    }

    // Inyección opcional de dependencias
    setToolbar(toolbar) {
        this.toolbar = toolbar;
    }

    setSidebar(sidebar) {
        this.sidebar = sidebar;
    }

    setStorage(storage) {
        this.storage = storage;
    }

    setHistoryManager(history) {
        this.history = history;
    }

    setDispatcher(dispatcher) {
        this.dispatcher = dispatcher;
    }


    _guardarDiagrama() {
        const data = Array.from(document.querySelectorAll('.nodo')).map(nodo => ({
            text: nodo.innerText,
            top: nodo.style.top,
            left: nodo.style.left
        }));
        localStorage.setItem('miDiagrama', JSON.stringify(data));
    }

    _cargarDiagrama() {
        const data = JSON.parse(localStorage.getItem('miDiagrama') || '[]');
        data.forEach(item => {
            const nodo = this._crearNodo();
            nodo.innerText = item.text;
            nodo.style.top = item.top;
            nodo.style.left = item.left;
            this.canvas.agregarNodo(nodo);
        });
    }


    nuevoDiagrama() {
        this.canvas.limpiar();
        this.svg.limpiar();
        this.nodos = [];
        this.conexiones = [];
    }

    init() {

        if (this.toolbar) {
            this.toolbar.vincularEventos(this);
        }
        this.nodos = [];
        this.conexiones = [];

        this._cargarDiagrama();


        /**
         * Evento para limpiar completamente el espacio de trabajo del diagrama.
         * Al hacer clic en el botón con ID 'btn-nuevo':
         * 1. Se elimina del localStorage cualquier dato guardado bajo la clave 'miDiagrama'.
         * 2. Se limpia el área de nodos (`canvas`), eliminando todos los elementos visuales creados.
         * 3. Se limpia la capa SVG (`svg`), eliminando todas las líneas de conexión u otros elementos gráficos.
         */



        document.getElementById('btn-exportar').addEventListener('click', () => this._guardarDiagrama());
    }

    _conectarNodos(nodoOrigen, nodoDestino) {
        this.connector.conectar(nodoOrigen, nodoDestino);
        nodoOrigen.classList.remove('border-success');
        this.nodoSeleccionado = null;
        this.modoConectar = false;
    }
    agregarNodo(tipo = 'idea') {
        this.canvas.agregarNodo(this._crearNodo(tipo));
    }
    _crearNodo(tipo = 'idea') {
        const node = this.nodeFactory.crearNodo(tipo); // Nueva instancia de Node
        const nodo = node.getElemento(); // Obtienes el di
        //this.eventConectar(nodo);

        this.registrarEventosNodo(nodo);


        nodo.addEventListener('mousedown', e => this.dragger.habilitarArrastre(e, nodo));
        //this.dragger.habilitarArrastre(nodo);
        return nodo;
    }

    eventConectar(nodo) {
        nodo.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!this.modoConectar) return;

            if (!this.nodoSeleccionado) {
                this.nodoSeleccionado = nodo;
                nodo.classList.add('border-success');
            } else {
                this._conectarNodos(this.nodoSeleccionado, nodo);
            }
        });
    }
    conectarNodos() {
        this.modoConectar = true;
        this.nodoSeleccionado = null;
    }

    /**
  * Registra los eventos personalizados emitidos por un nodo.
  * 
  * Este método asocia listeners a eventos definidos en la clase `Node` para manejar acciones clave como:
  * eliminar, conectar, editar, cambiar color y duplicar nodos.
  * 
  * @param {HTMLElement} elemento - El nodo HTML al que se le vincularán los eventos.
  * 
  * Eventos que maneja:
  * - `eliminarNodo`: Llama a `eliminarNodo()` para remover el nodo del canvas y de la estructura de datos.
  * - `modoConectarNodo`: Llama a `activarModoConectar()` para iniciar la selección de un segundo nodo a conectar.
  * - `editarNodo`: Llama a `sidebar.mostrarPropiedades()` para mostrar la interfaz de edición del nodo.
  * - `cambiarColorNodo`: Muestra un prompt para elegir un nuevo color en formato HEX y lo aplica al nodo.
  * - `duplicarNodo`: Llama a `duplicarNodo()` para crear una copia del nodo original con una posición desplazada.
  */
    registrarEventosNodo(elemento) {
        elemento.addEventListener('eliminarNodo', (e) => {
            this.eliminarNodo(e.detail.nodo);
        });

        elemento.addEventListener('modoConectarNodo', (e) => {
            this.activarModoConectar(e.detail.nodo);
        });

        elemento.addEventListener('editarNodo', (e) => {
            this.sidebar.mostrarPropiedades(e.detail.nodo);
        });

        elemento.addEventListener('cambiarColorNodo', (e) => {
            const nuevoColor = prompt('Selecciona un color en formato HEX:', e.detail.color || '#ffffff');
            if (nuevoColor) {
                e.detail.nodo.getElemento().style.backgroundColor = nuevoColor;
            }
        });

        elemento.addEventListener('duplicarNodo', (e) => {
            this.duplicarNodo(e.detail.nodo);
        });
    }

    /**
  * Activa o gestiona la lógica del modo de conexión entre nodos.
  * 
  * Este método se llama cada vez que el usuario hace clic en un nodo mientras está activo el modo conectar.
  * - En la primera llamada, guarda el nodo como seleccionado.
  * - En la segunda llamada, realiza la conexión y reinicia el modo.
  * 
  * @param {Node} nodo - Instancia del nodo sobre el que se hizo clic.
  */
    activarModoConectar(nodo) {
        if (!this.nodoSeleccionado) {
            console.log('SI');
            this.modoConectar = true;
            // Selecciona el primer nodo
            this.nodoSeleccionado = nodo.getElemento();
            nodo.getElemento().classList.add('border-success');
        } else {
            // // Ya hay uno seleccionado: conectar
            const origen = this.nodoSeleccionado;
            const destino = nodo.getElemento();

            origen.classList.remove('border-success');

            if (origen !== destino) {
                this._conectarNodos(origen, destino);
            }
        }
    }


    eliminarNodo(nodo) {
        const index = this.nodos.findIndex(n => n.id === nodo.id);
        if (index !== -1) {
            this.nodos.splice(index, 1);
        }
        nodo.getElemento().remove();
        // También eliminar sus conexiones si las estás guardando
    }
}
