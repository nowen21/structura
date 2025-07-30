import { Node } from './Node.js';
/**
 * NodeFactory.js
 * 
 * Esta clase funciona como una fábrica de nodos visuales. Cuando se llama al método crearNodo(tipo), la clase genera un nuevo nodo con una apariencia y contenido predeterminado dependiendo del tipo especificado (por ejemplo: idea, texto, imagen, etc.).
 *
 */

export class NodeFactory {
    constructor() {
        
    }
    /**
     * Crea un nuevo nodo visual combinando una configuración por defecto
     * con las opciones personalizadas que se le pasen.
     * 
     * @param {string} tipo - El tipo de nodo que se desea crear.
     *        Ejemplos: 'idea', 'texto', 'imagen', 'decision', 'titulo', etc.
     * 
     * @param {object} opciones - Opciones adicionales como:
     *        { texto: '...', color: '...', x: 100, y: 200, id: 'nodo-1' }
     *        Estas opciones pueden sobreescribir los valores por defecto.
     * 
     * @returns {Node} Una instancia lista del nodo con propiedades completas.
     */
    crearNodo(tipo = 'idea', opciones = {}) {
        // 1. Obtener configuración base para ese tipo de nodo
        const config = this._obtenerConfiguracionPorDefecto(tipo);

        // 2. Mezclar configuración base con las opciones del usuario
        const finalOptions = { ...config, ...opciones };

        // 3. Crear el nodo y devolverlo (la clase Node debe estar importada)
        return new Node(tipo, finalOptions);
    }

    /**
     * Define las propiedades por defecto para cada tipo de nodo.
     * Esto ayuda a que cada tipo tenga un estilo o contenido diferente
     * sin tener que escribirlo cada vez manualmente.
     * 
     * @param {string} tipo - Tipo de nodo solicitado.
     * @returns {object} Objeto con texto y color base para ese tipo.
     */
    _obtenerConfiguracionPorDefecto(tipo) {
        switch (tipo) {
            case 'idea':
                return {
                    texto: 'Nueva idea',
                    color: '#27e350ff' // un tono cálido
                };
            case 'texto':
                return {
                    texto: 'Texto libre',
                    color: '#fef9e7' // amarillo claro
                };
            case 'imagen':
                return {
                    texto: 'URL de imagen',
                    color: '#f8f9fa' // gris claro (como fondo para imágenes)
                };
            case 'decision':
                return {
                    texto: '¿Decisión?',
                    color: '#f9ebea' // rojo claro, llamativo
                };
            case 'titulo':
                return {
                    texto: 'Título',
                    color: '#d1c4e9' // violeta claro
                };
            default:
                // Si no reconoce el tipo, asigna una configuración neutra
                return {
                    texto: 'Nodo',
                    color: '#ffffff' // blanco
                };
        }
    }
}
