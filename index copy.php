<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Prueba SVG Canvas con Bootstrap</title>

  <!-- Bootstrap 5 CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Bootstrap Icons -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">

  <style>
    #canvas-area {
      position: relative;
      background-color: #f8f9fa;
      height: 600px;
      border: 1px solid #ddd;
    }

    #svg-canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .nodo {
      position: absolute;
      top: 150px;
      left: 150px;
      background-color: white;
      border: 2px solid #007bff;
      border-radius: 6px;
      padding: 10px;
      z-index: 1;
      cursor: move;
    }
  </style>
</head>

<body class="container py-4">

  <h3 class="text-center mb-4">Prueba de línea SVG con Bootstrap 5</h3>

  <div class="row">
    <!-- Menú lateral tipo Canva -->
    <div class="col-md-2">
      <div class="card shadow-sm">
        <div class="card-header bg-dark text-white text-center">
          <strong>Herramientas</strong>
        </div>
        <div class="card-body d-grid gap-2">
          <button id="btn-nuevo" class="btn btn-outline-secondary btn-sm">
            <i class="bi bi-file-earmark"></i> Nuevo
          </button>
          <button id="btn-nodo" class="btn btn-outline-primary btn-sm">
            <i class="bi bi-diagram-3"></i> Nodo
          </button>
          <button id="btn-conectar" class="btn btn-outline-primary btn-sm">
            <i class="bi bi-link-45deg"></i> Conectar
          </button>
          <button id="btn-texto" class="btn btn-outline-secondary btn-sm">
            <i class="bi bi-fonts"></i> Texto
          </button>
          <button id="btn-imagen" class="btn btn-outline-success btn-sm">
            <i class="bi bi-image"></i> Imagen
          </button>
          <button id="btn-flecha" class="btn btn-outline-info btn-sm">
            <i class="bi bi-arrow-right"></i> Flecha
          </button>
          <button id="btn-eliminar" class="btn btn-outline-danger btn-sm">
            <i class="bi bi-trash"></i> Eliminar
          </button>
          <hr>
          <button id="btn-deshacer" class="btn btn-outline-dark btn-sm">
            <i class="bi bi-arrow-counterclockwise"></i> Deshacer
          </button>
          <button id="btn-rehacer" class="btn btn-outline-dark btn-sm">
            <i class="bi bi-arrow-clockwise"></i> Rehacer
          </button>
          <button id="btn-exportar" class="btn btn-outline-primary btn-sm">
            <i class="bi bi-download"></i> Exportar
          </button>
          <button id="btn-importar" class="btn btn-outline-primary btn-sm">
            <i class="bi bi-upload"></i> Importar
          </button>
        </div>
      </div>
    </div>

    <!-- Área de trabajo -->
    <div class="col-md-8">
      <div id="canvas-area" class="position-relative bg-light">
        <svg id="svg-canvas"></svg>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="col-md-2">
      <div id="sidebar-propiedades" class="bg-white border rounded shadow-sm p-3 d-none">
        <h6 class="fw-bold text-center mb-2">Propiedades</h6>
        <div id="propiedades-contenido"></div>
      </div>
    </div>
  </div>

  <!-- Bootstrap JS Bundle -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

  <script type="module"   src="js/inicializacion/main.js"></script>
</body>
</html>


