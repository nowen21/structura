// =====================
// MAIN.JS – PUNTO DE ENTRADA DEL SISTEMA
// =====================

import { DiagramManager } from '../src/core/DiagramManager.js';
import { CanvasArea } from '../src/core/CanvasArea.js';
import { SVGLayer } from '../src/core/SVGLayer.js';
import { ConnectorManager } from '../src/core/ConnectorManager.js';
import { DragManager } from '../src/core/DragManager.js';
import { Toolbar } from '../src/ui/Toolbar.js';
import { Sidebar } from '../src/ui/Sidebar.js';
import { DiagramStorage } from '../src/storage/DiagramStorage.js';
import { HistoryManager } from '../src/core/HistoryManager.js';
import { ActionDispatcher } from '../src/core/ActionDispatcher.js';



document.addEventListener('DOMContentLoaded', () => {
    const svg = new SVGLayer('svg-canvas');
    const canvas = new CanvasArea('canvas-area');
    const connector = new ConnectorManager(svg);
    const dragger = new DragManager(connector);
    const toolbar = new Toolbar('toolbar');
    const sidebar = new Sidebar('sidebar-propiedades');
    const storage = new DiagramStorage();
    const history = new HistoryManager();
    const dispatcher = new ActionDispatcher();


    const diagram = new DiagramManager({ canvas: canvas, svg: svg, connector: connector, dragger: dragger });
    diagram.setToolbar(toolbar);
    diagram.setSidebar(sidebar);
    diagram.setStorage(storage);
    diagram.setDispatcher(dispatcher);
    diagram.setHistoryManager(history);
    diagram.init();
});



