// =====================
// MAIN.JS – PUNTO DE ENTRADA DEL SISTEMA
// =====================

import { DiagramManager } from '../core/DiagramManager.js';
import { CanvasArea } from '../core/CanvasArea.js';
import { SVGLayer } from '../core/SVGLayer.js';
import { ConnectorManager } from '../core/ConnectorManager.js';
import { DragManager } from '../core/DragManager.js';

document.addEventListener('DOMContentLoaded', () => {
    const svg = new SVGLayer('svg-canvas');
    const canvas = new CanvasArea('canvas-area');
    const connector = new ConnectorManager(svg);
    const dragger = new DragManager(connector);
    const diagram = new DiagramManager({canvas:canvas,svg:svg,connector:connector,dragger:dragger});
    diagram.init();
});



