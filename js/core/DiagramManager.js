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


    init() {
        this._cargarDiagrama();

        document.getElementById('btn-nodo').addEventListener('click', () => {
            const nodo = this._crearNodo();
            this.canvas.agregarNodo(nodo);
        });
        /**
         * Evento para limpiar completamente el espacio de trabajo del diagrama.
         * Al hacer clic en el botón con ID 'btn-nuevo':
         * 1. Se elimina del localStorage cualquier dato guardado bajo la clave 'miDiagrama'.
         * 2. Se limpia el área de nodos (`canvas`), eliminando todos los elementos visuales creados.
         * 3. Se limpia la capa SVG (`svg`), eliminando todas las líneas de conexión u otros elementos gráficos.
         */

        document.getElementById('btn-nuevo').addEventListener('click', () => {
            localStorage.removeItem('miDiagrama');
            this.canvas.limpiar();
            this.svg.limpiar();
        });

        document.getElementById('btn-conectar').addEventListener('click', () => {
            this.modoConectar = true;
            this.nodoSeleccionado = null;
            //alert('Selecciona dos nodos para conectar');
        });

        document.getElementById('btn-exportar').addEventListener('click', () => this._guardarDiagrama());
    }

    _conectarNodos(nodo1, nodo2) {
        this.connector.conectar(nodo1, nodo2);
        nodo1.classList.remove('border-success');
        this.nodoSeleccionado = null;
        this.modoConectar = false;
    }

    _crearNodo(tipo = 'idea') {

        const node = this.nodeFactory.crearNodo(tipo); // Nueva instancia de Node
        const nodo = node.getElemento(); // Obtienes el di

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
        this.dragger.habilitarArrastre(nodo);
        return nodo;
    }



}
