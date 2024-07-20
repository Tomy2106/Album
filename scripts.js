// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const totalFotos = 70;
    let index = 0;
    const fotoElement = document.getElementById('foto');
    const anteriorBtn = document.getElementById('anterior');
    const siguienteBtn = document.getElementById('siguiente');
    const musicaElement = document.getElementById('musica');
  
    // Función para mostrar la foto actual
    function mostrarFoto(direccion) {
      // Calcular el índice de la siguiente foto
      if (direccion === 'anterior') {
        index = (index - 1 + totalFotos) % totalFotos;
      } else {
        index = (index + 1) % totalFotos;
      }
  
      // Cambiar la imagen
      fotoElement.src = `images/${index + 1}.png`; // +1 porque los nombres de archivo comienzan desde 1.png
    }
  
    // Mostrar la primera foto al cargar la página
    fotoElement.src = `images/1.png`;
  
    // Event listener para el botón anterior
    anteriorBtn.addEventListener('click', function() {
      mostrarFoto('anterior');
    });
  
    // Event listener para el botón siguiente
    siguienteBtn.addEventListener('click', function() {
      mostrarFoto('siguiente');
    });
  
    // Reproducir música automáticamente al cargar la página
    musicaElement.play().then(function() {
      console.log('La música se está reproduciendo automáticamente.');
    }).catch(function(error) {
      console.error('Error al reproducir música automáticamente:', error);
      // Puedes mostrar un mensaje de error o realizar alguna acción adicional aquí
    });
  });
  