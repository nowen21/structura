/**
 * Clase Sidebar
 * Controla el panel lateral para mostrar y editar propiedades del nodo seleccionado.
 */
export class Sidebar {
    /**
     * Constructor del Sidebar.
     * @param {string} sidebarId - ID del contenedor HTML del sidebar (ej: 'sidebar-propiedades')
     */
    constructor(sidebarId) {
        this.sidebar = document.getElementById(sidebarId);
        this.contenido = this.sidebar.querySelector('#propiedades-contenido');
        this.nodoActual = null;
    }

    /**
     * Muestra el panel con la información del nodo seleccionado.
     * @param {Node} nodo
     */
    mostrar(nodo) {
        this.nodoActual = nodo;

        const color = nodo.elemento.style.backgroundColor;
        const texto = nodo.elemento.querySelector('.contenido-nodo').innerText;

        this.sidebar.classList.remove('d-none');
        this.contenido.innerHTML = `
            <div class="mb-3">
                <label class="form-label">Texto</label>
                <textarea id="sidebar-texto" class="form-control" rows="2">${texto}</textarea>
            </div>

            <div class="mb-3">
                <label class="form-label">Color de fondo</label>
                <input type="color" id="sidebar-color" class="form-control form-control-color" value="${this._formatearColor(color)}">
            </div>

            <button class="btn btn-primary w-100" onclick="sidebar.aplicarCambios()">Aplicar cambios</button>
        `;
    }

    /**
     * Aplica los cambios realizados desde el sidebar al nodo actual.
     */
    aplicarCambios() {
        if (!this.nodoActual) return;

        const nuevoTexto = document.getElementById('sidebar-texto').value;
        const nuevoColor = document.getElementById('sidebar-color').value;

        this.nodoActual.elemento.querySelector('.contenido-nodo').innerText = nuevoTexto;
        this.nodoActual.elemento.style.backgroundColor = nuevoColor;
    }

    /**
     * Oculta el panel lateral.
     */
    ocultar() {
        this.sidebar.classList.add('d-none');
        this.nodoActual = null;
        this.contenido.innerHTML = '';
    }

    /**
     * Convierte RGB a HEX si es necesario.
     * @param {string} color
     * @returns {string}
     */
    _formatearColor(color) {
        if (color.startsWith('rgb')) {
            const rgb = color.match(/\d+/g);
            return `#${rgb.map(c => (+c).toString(16).padStart(2, '0')).join('')}`;
        }
        return color;
    }
}
