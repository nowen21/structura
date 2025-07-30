// ======================
// main.js – Lógica sin clases
// ======================
import { CanvasArea } from '../core/CanvasArea.js';
import { Toolbar } from '../ui/Toolbar.js';
import { Sidebar } from '../ui/Sidebar.js'
import { DragManager } from '../core/DragManager.js';
import { ConnectorManager } from '../core/ConnectorManager.js';


document.addEventListener('DOMContentLoaded', () => {
    var canvasArea = new CanvasArea('canvas-area'); // DiagramManager
    const connector = new ConnectorManager('svg-canvas');
    var toolbar = new Toolbar('toolbar'); // DiagramManager
    var sidebar = new Sidebar('sidebar-propiedades'); // DiagramManager
    const dragManager = new DragManager();// DiagramManager

    // CanvasArea
    const canvas = canvasArea.getElemento();

    const conexiones = [];
    let modoConectar = false;
    let nodoSeleccionado = null;

    /**
     * Habilita el modo de conexión entre nodos al hacer clic sobre ellos.
     * Cuando se seleccionan dos nodos consecutivos, se crea un conector entre ellos.
     * 
     * @param {HTMLElement} nodo - Nodo DOM al que se le habilitará la selección para conectar.
     */
    function habilitarModoConectarNodo(nodo) {
        nodo.addEventListener('click', function (e) {
            e.stopPropagation(); // evita que se propague al canvas

            if (!modoConectar) return;

            // Primera selección
            if (!nodoSeleccionado) {
                nodoSeleccionado = nodo;
                nodo.classList.add('border-success'); // resalta nodo seleccionado
            } else {
                // Segunda selección: crear conexión
                window.connectorManager.conectarNodos(nodoSeleccionado, nodo);
                nodoSeleccionado.classList.remove('border-success');
                nodoSeleccionado = null;
                modoConectar = false;
            }
        });
    }



    // Node + NodeFactory
    function crearNodo() {

        const nodo = document.createElement('div');
        nodo.className = 'nodo position-absolute border rounded bg-white p-2';
        nodo.contentEditable = true;
        nodo.innerText = 'Nuevo nodo';
        nodo.style.top = '100px';
        nodo.style.left = '100px';
        // nuevo código 
        habilitarModoConectarNodo(nodo);

        dragManager.habilitarArrastre(nodo);
        return nodo;
    }



    // ConnectorManager
    function obtenerCentro(nodo) {
        const rect = nodo.getBoundingClientRect();
        const canvasRect = connector.getObtenerRectanguloCanvas();
        return {
            x: rect.left + rect.width / 2 - canvasRect.left,
            y: rect.top + rect.height / 2 - canvasRect.top
        };
    }

    function conectarNodos(nodo1, nodo2) {
        const linea = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        const { x: x1, y: y1 } = obtenerCentro(nodo1);
        const { x: x2, y: y2 } = obtenerCentro(nodo2);

        linea.setAttribute('x1', x1);
        linea.setAttribute('y1', y1);
        linea.setAttribute('x2', x2);
        linea.setAttribute('y2', y2);
        linea.setAttribute('stroke', 'red');
        linea.setAttribute('stroke-width', '2');
        connector.getAgregarElemento(linea);


        conexiones.push({ origen: nodo1, destino: nodo2, svgLine: linea });
    }

    function actualizarConectoresDelNodo(nodo) {

        console.log("actualizar conector");

        conexiones.forEach(conexion => {
            if (conexion.origen === nodo || conexion.destino === nodo) {
                const { x: x1, y: y1 } = obtenerCentro(conexion.origen);
                const { x: x2, y: y2 } = obtenerCentro(conexion.destino);
                conexion.svgLine.setAttribute('x1', x1);
                conexion.svgLine.setAttribute('y1', y1);
                conexion.svgLine.setAttribute('x2', x2);
                conexion.svgLine.setAttribute('y2', y2);
            }
        });
    }

    window.connectorManager = {
        actualizarConectoresDelNodo,
        conectarNodos
    };

    // DiagramStorage
    function guardarDiagrama() {
        const data = Array.from(document.querySelectorAll('.nodo')).map(nodo => ({
            text: nodo.innerText,
            top: nodo.style.top,
            left: nodo.style.left
        }));
        localStorage.setItem('miDiagrama', JSON.stringify(data));
    }

    function cargarDiagrama() {
        const data = JSON.parse(localStorage.getItem('miDiagrama') || '[]');
        data.forEach(item => {
            const nodo = crearNodo();
            nodo.innerText = item.text;
            nodo.style.top = item.top;
            nodo.style.left = item.left;
            canvas.appendChild(nodo);
        });
    }

    // Toolbar
    document.getElementById('btn-nodo').addEventListener('click', () => {
        const nodo = crearNodo();
        canvas.appendChild(nodo);
    });

    document.getElementById('btn-nuevo').addEventListener('click', () => {
        localStorage.removeItem('miDiagrama');
        canvasArea.limpiar();
        connector.limpiar();
    });

    document.getElementById('btn-conectar').addEventListener('click', () => {
        modoConectar = true;
        nodoSeleccionado = null;
        alert('Selecciona dos nodos para conectar');
    });

    document.getElementById('btn-exportar').addEventListener('click', guardarDiagrama);

    // DiagramManager
    cargarDiagrama();
});
