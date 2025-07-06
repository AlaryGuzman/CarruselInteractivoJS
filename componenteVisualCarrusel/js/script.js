// let indice = 0;
// const items = document.querySelectorAll('.carrusel-item');
// const total = items.length;
// const tiempo = 4000; 

// const siguiente = () => {
//     items[indice].classList.remove('activo');
//     indice = (indice + 1) % total;
//     items[indice].classList.add('activo');
// };

// const anterior = () => {
//     items[indice].classList.remove('activo');
//     indice = (indice - 1 + total) % total;
//     items[indice].classList.add('activo');
// };

// document.querySelector('.btn-next').addEventListener('click', () => {
//     siguiente();
//     reiniciarIntervalo();
// });

// document.querySelector('.btn-prev').addEventListener('click', () => {
//     anterior();
//     reiniciarIntervalo();
// });

// let intervalo = setInterval(siguiente, tiempo);

// const reiniciarIntervalo = () => {
//     clearInterval(intervalo);
//     intervalo = setInterval(siguiente, tiempo);
// };

let indice = 0;
const items = document.querySelectorAll('.carrusel-item');
const indicadores = document.querySelectorAll('.indicador');
const total = items.length;
const tiempo = 4000;

const mostrarImagen = (i) => {
    items[indice].classList.remove('activo');
    indicadores[indice].classList.remove('activo');
    indice = i;
    items[indice].classList.add('activo');
    indicadores[indice].classList.add('activo');
};

const siguiente = () => {
    let nuevoIndice = (indice + 1) % total;
    mostrarImagen(nuevoIndice);
};

let intervalo = setInterval(siguiente, tiempo);

const reiniciarIntervalo = () => {
    clearInterval(intervalo);
    intervalo = setInterval(siguiente, tiempo);
};

indicadores.forEach(indicador => {
    indicador.addEventListener('click', () => {
        let i = parseInt(indicador.getAttribute('data-indice'));
        mostrarImagen(i);
        reiniciarIntervalo();
    });
});
