const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.carousel-control-prev');
const nextBtn = document.querySelector('.carousel-control-next');


prevBtn.addEventListener('click', () => {
  carousel.scrollBy(-carousel.offsetWidth, 0);
});

nextBtn.addEventListener('click', () => {
  carousel.scrollBy(carousel.offsetWidth, 0);
});

carousel.addEventListener('scroll', () => {
  prevBtn.disabled = carousel.scrollLeft === 0;
  nextBtn.disabled = carousel.scrollLeft + carousel.offsetWidth === carousel.scrollWidth;
});

const button = document.getElementById('move-button');
let clicks = 0;

button.addEventListener('click', function() {
  clicks++;
    let newTop;
    let newLeft;
  if (clicks === 1) {
     newTop = carousel.clientHeight - button.offsetHeight - 10;
     newLeft = carousel.clientWidth - button.offsetWidth - 10;
      setTimeout(()=>{alert('¡Atrapame!');},500)
  }
  if (clicks === 2) {
     newTop = carousel.clientHeight + button.offsetHeight - carousel.clientHeight;
     newLeft = carousel.clientWidth + button.offsetWidth  - carousel.clientWidth;
       setTimeout(()=>{ alert('¡No te rindas Kelly!');},500)
  }
  if (clicks === 3) {
     newTop = (carousel.clientHeight/2);
     newLeft = (carousel.clientWidth/2);
       setTimeout(()=>{alert('Ya casi Negrita!');},500)
  }
  if (clicks === 4) {
          setTimeout(()=>{alert('Esta es la ultima!');},500)
          document.getElementById("move-button").addEventListener("click", function(){
                  // Crear el div, el h1 y la imagen
            var nuevoDiv = document.createElement("div");
            var nuevoH1 = document.createElement("h1");
            var nuevoH3 = document.createElement("h3");
            var nuevaImagen = document.createElement("img");
                  // Agregar el contenido y los estilos necesarios
                  nuevoH1.innerHTML = "Te amo Kelly";
                  nuevoH3.innerHTML = "Espero pasemons un buen rato!";
                  nuevaImagen.src = "assets/RYK.jpg";
                  nuevaImagen.alt = "Imagen de Kelly";
                  nuevaImagen.style.width = "500px";

                  // Agregar el h1 y la imagen al div
                  nuevoDiv.appendChild(nuevoH1);
                  nuevoDiv.appendChild(nuevoH3);
                  nuevoDiv.appendChild(nuevaImagen);
                  nuevoH1.style.color='#645CBB';
                  nuevoH3.style.color='#A084DC';
                  nuevoH1.style.margin="50px 10px 20px 30px";
                  nuevoH3.style.margin="50px 10px 20px 30px";
                  nuevoDiv.style.display ="flex";
                  nuevoDiv.style.alignItems="center";
                  // Agregar el div al contenedor
                  document.getElementById("contenedor").appendChild(nuevoDiv);
                });
        }
  button.style.top = newTop + 'px';
  button.style.left = newLeft + 'px';
}
);
