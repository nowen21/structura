/**
 * ConnectorManager
 * ----------------
 * Clase encargada de gestionar las conexiones visuales (líneas SVG) entre nodos 
 * dentro del sistema de diagramación. Centraliza la creación, inserción y 
 * actualización de conectores, manteniendo una referencia de todas las conexiones 
 * activas en el lienzo SVG.
 * 
 * Funcionalidades principales:
 * - Agregar líneas SVG como conectores al canvas.
 * - Obtener las dimensiones del canvas para cálculos relativos.
 * - Mantener una lista interna de conectores para posibles actualizaciones o eliminación.
 * - (Opcional) Conectar nodos visualmente calculando sus posiciones automáticamente.
 * 
 * Esta clase permite mantener un código más limpio, organizado y preparado 
 * para escalabilidad en diagramas interactivos con conexiones dinámicas.
 */

import { Connector } from './Connector.js';

export class ConnectorManager {
    /**
     * Inicializa el administrador de conexiones.
     * @param {SVGElement} svgCanvas - El lienzo SVG donde se dibujan las líneas
     */
    constructor(svgCanvas) {
        this.svgCanvas =  svgCanvas;       // Aquí se dibujan todas las líneas
        this.connectors = [];               // Lista de todas las conexiones activas
    }

    /**
     * Conecta dos nodos visualmente con una línea.
     * @param {HTMLElement} nodoOrigen - Nodo de origen
     * @param {HTMLElement} nodoDestino - Nodo de destino
     */
    conectar(nodoOrigen, nodoDestino) {
        // Evitamos conexiones duplicadas
        if (this._existeConexion(nodoOrigen, nodoDestino)) {
            console.log("Ya existe una conexión entre estos nodos.");
            return;
        }

        const nuevaConexion = new Connector(nodoOrigen, nodoDestino, this.svgCanvas);
        this.connectors.push({
            origen: nodoOrigen,
            destino: nodoDestino,
            connector: nuevaConexion
        });
    }


    /**
     * Verifica si ya existe una conexión entre dos nodos (en cualquier orden).
     */
    _existeConexion(nodoOrigen, nodoDestino) {
        return this.connectors.some(c =>
            (c.origen === nodoOrigen && c.destino === nodoDestino) ||
            (c.origen === nodoDestino && c.destino === nodoOrigen)
        );
    }

    /**
     * Elimina todas las conexiones existentes.
     */
    limpiarConexiones() {
        this.connectors.forEach(c => c.connector.destroy());
        this.connectors = [];
    }

    /**
     * Actualiza las posiciones de todas las líneas (por ejemplo, si se mueve un nodo).
     */
    actualizarTodo() {
        this.connectors.forEach(c => c.connector.updatePosition());
    }

}
