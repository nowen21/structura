// =====================
// MAIN.JS – PUNTO DE ENTRADA DEL SISTEMA
// =====================

import { DragManager } from '../core/DragManager.js';
import { CanvasArea } from '../core/CanvasArea.js';
import { DiagramManager } from '../core/DiagramManager.js';
import { HistoryManager } from '../core/HistoryManager.js';
import { ActionDispatcher } from '../core/ActionDispatcher.js';

import { Toolbar } from '../ui/Toolbar.js';
import { Sidebar } from '../ui/Sidebar.js';

import { DiagramStorage } from '../storage/DiagramStorage.js';

import { ConnectorManager } from '../core/ConnectorManager.js';







function conectarNodos(id1, id2) {

    // 1. Crear instancias de clases principales
    var canvasArea = new CanvasArea('canvas-area'); // ID del div de trabajo
    var toolbar = new Toolbar('toolbar');
    var sidebar = new Sidebar('sidebar-propiedades');
    var diagramStorage = new DiagramStorage();
    const historyManager = new HistoryManager();
    var actionDispatcher = new ActionDispatcher();
    const dragManager = new DragManager();

    const svg = document.getElementById('svg-canvas');
    const connectorManager = new ConnectorManager(svg);

    var diagramManager = new DiagramManager({
        canvas: canvasArea,
        toolbar: toolbar,
        sidebar: sidebar,
        storage: diagramStorage,
        history: historyManager,
        dispatcher: actionDispatcher,
        dragger: dragManager,
        connector: connectorManager
    });


    // 2. Inicializar el sistema
    diagramManager.init();

    // 3. Cargar diagrama existente o crear uno nuevo
    const dataCargada = diagramStorage.cargar();

    if (dataCargada && dataCargada.nodos?.length > 0) {
        diagramManager.cargarDesdeJSON(dataCargada);
    } else {
        diagramManager.nuevoDiagrama();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    conectarNodos('nodo-1', 'nodo-2');
});


