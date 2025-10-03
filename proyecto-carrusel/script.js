// ======================================================
// DATA Y ESTADO
// ======================================================

// --- INICIO EJERCICIO 6: Carga Dinámica de Imágenes ---
// Esta es nuestra lista de imágenes. El carrusel se construirá a partir de aquí.
const imageData = [
    { url: 'https://picsum.photos/600/400?random=1', alt: 'Paisaje 1' },
    { url: 'https://picsum.photos/600/400?random=2', alt: 'Paisaje 2' },
    { url: 'https://picsum.photos/600/400?random=3', alt: 'Paisaje 3' },
    { url: 'https://picsum.photos/600/400?random=4', alt: 'Paisaje 4' },
    { url: 'https://picsum.photos/600/400?random=5', alt: 'Paisaje 5' },
];
// --- FIN EJERCICIO 6 ---

// Variable para rastrear la imagen actual
let currentIndex = 0;
let intervalId = null;
let isPlaying = false;
let seconds = 0;

// --- INICIO EJERCICIO 5: Selector de Velocidad ---
// Variable para controlar qué tan rápido van pasando las fotos.
let intervalSpeed = 3000;
// --- FIN EJERCICIO 5 ---

// ======================================================
// Paso 4: JavaScript - Seleccionar Elementos del DOM
// ======================================================
// Seleccionar elementos del DOM
const imagesContainer = document.querySelector('.carousel-images');
const indicatorsContainer = document.querySelector('.carousel-indicators');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const playPauseBtn = document.getElementById('playPauseBtn');
const timerDisplay = document.getElementById('timer');

// --- INICIO EJERCICIO 1: Contador de Imágenes ---

const imageCounter = document.getElementById('imageCounter');


// --- INICIO EJERCICIO 2: Botón de Reinicio ---

const resetBtn = document.getElementById('resetBtn');


// --- INICIO EJERCICIO 3: Modo Aleatorio ---

const randomBtn = document.getElementById('randomBtn');


// --- INICIO EJERCICIO 5: Selector de Velocidad ---

const speedSelect = document.getElementById('speedSelect');


// Dejamos estas "arrays" vacías porque las vamos a llenar después.
let images = [];
let indicators = [];


// ======================================================
// LAS FUNCIONES 🛠️
// ======================================================

// --- INICIO EJERCICIO 6: Carga Dinámica de Imágenes ---
/**
 * Arma el carrusel desde cero usando la lista 'imageData'.
 */
function buildCarousel() {
    // ---  VERIFICACIÓN CONTRA ARRAY VACÍO O INEXISTENTE ---
    // Antes de hacer nada, revisamos si tenemos imágenes con las que trabajar.
    if (!imageData || imageData.length === 0) {
        // Si no hay, mostramos un mensaje útil.
        imagesContainer.innerHTML = '<p style="text-align: center;">No hay imágenes para mostrar.</p>';
        // Y ocultamos los controles que no sirven para nada.
        indicatorsContainer.style.display = 'none';
        playPauseBtn.style.display = 'none';
        // ¡Importante! Detenemos la función aquí para que no se ejecute el resto del código.
        return;
    }
    // --- FIN DE LA VERIFICACIÓN ---


    // ---  VERIFICACIÓN PARA CUANDO HAY UNA SOLA IMAGEN ---
    // Si solo tenemos una foto, no tiene sentido mostrar botones para cambiarla.
    if (imageData.length <= 1) {
        prevButton.style.display = 'none';
        nextButton.style.display = 'none';
        indicatorsContainer.style.display = 'none';
        playPauseBtn.style.display = 'none';
    }
    // --- FIN DE LA VERIFICACIÓN ---
    imagesContainer.innerHTML = '';
    indicatorsContainer.innerHTML = '';

    imageData.forEach((data, index) => {
        const img = document.createElement('img');
        img.src = data.url;
        img.alt = data.alt;
        img.classList.add('carousel-image');
        if (index === 0) img.classList.add('active');
        imagesContainer.appendChild(img);

        const indicator = document.createElement('span');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => handleIndicatorClick(index));
        indicatorsContainer.appendChild(indicator);
    });

    images = document.querySelectorAll('.carousel-image');
    indicators = document.querySelectorAll('.indicator');
}
// --- FIN EJERCICIO 6 ---


/**
 *Paso 5: Función para Mostrar una Imagen Específica
 // Función para mostrar una imagen específica
 */
function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    // Mostrar la imagen en el índice especificado
    images[index].classList.add('active');
    
    indicators.forEach(ind => ind.classList.remove('active'));
    indicators[index].classList.add('active');
    
    // --- INICIO EJERCICIO 1: Contador de Imágenes ---
    // De paso, actualizamos el contador. Le sumamos 1 porque a la gente no le gusta ver "Imagen 0".
    imageCounter.textContent = `Imagen ${index + 1} de ${images.length}`;
    // --- FIN EJERCICIO 1 ---
}

/**
 * Pasa a la siguiente foto.
 */
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

/**
 * Vuelve a la foto anterior.
 */
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

/**
 * El interruptor de play/pause.
 */
function togglePlayPause() {
    if (isPlaying) {
        clearInterval(intervalId);
        intervalId = null;
        playPauseBtn.textContent = '▶️ Iniciar';
        isPlaying = false;
    } else {
        intervalId = setInterval(() => {
            seconds++;
            timerDisplay.textContent = seconds + 's';
            nextImage();
        }, intervalSpeed); // Usa la velocidad variable
        playPauseBtn.textContent = '⏸️ Pausar';
        isPlaying = true;
        seconds = 0;
        timerDisplay.textContent = '0s';
    }
}

/**
 * Se activa cuando hacemos clic en un puntito.
 */
function handleIndicatorClick(index) {
    if (isPlaying) togglePlayPause();
    currentIndex = index;
    showImage(currentIndex);
}

// --- INICIO EJERCICIO 2: Botón de Reinicio ---
/**
 * El botón de reinicio. 
 */
function resetCarousel() {
    if (isPlaying) togglePlayPause();
    currentIndex = 0;
    showImage(currentIndex);
    seconds = 0;
    timerDisplay.textContent = '0s';
}
// --- FIN EJERCICIO 2 ---

// --- INICIO EJERCICIO 3: Modo Aleatorio ---
/**
 * Muestra una foto al azar.
 */
function randomImage() {
    if (isPlaying) togglePlayPause();
    let newIndex;
    // Este bucle se asegura de que la nueva foto NUNCA sea la misma que la actual.
    do {
        newIndex = Math.floor(Math.random() * images.length);
    } while (newIndex === currentIndex);
    currentIndex = newIndex;
    showImage(currentIndex);
}
// --- FIN EJERCICIO 3 ---

// --- INICIO EJERCICIO 5: Selector de Velocidad ---
/**
 * Cambia la velocidad.
 */
function changeSpeed() {
    intervalSpeed = parseInt(speedSelect.value); // Leemos la nueva velocidad del menú.
    // Si está activo, lo reiniciamos para que agarre la nueva velocidad al instante.
    if (isPlaying) {
        togglePlayPause(); // Lo paramos...
        togglePlayPause(); // ...y lo volvemos a iniciar.
    }
}
// --- FIN EJERCICIO 5 ---

// --- INICIO EJERCICIO 4: Navegación con Teclado ---
/**
 * Controla el carrusel con el teclado
    Flecha derecha (→): siguiente imagen
    Flecha izquierda (←): imagen anterior
    Barra espaciadora: play/pause
 
 */
function handleKeyPress(e) {
    if (e.key === 'ArrowRight') {
        if (isPlaying) togglePlayPause();
        nextImage();
    } else if (e.key === 'ArrowLeft') {
        if (isPlaying) togglePlayPause();
        prevImage();
    } else if (e.key === ' ') {
        e.preventDefault(); // ¡Oye navegador, no te muevas para abajo!
        togglePlayPause();
    }
}
// --- FIN EJERCICIO 4 ---

// ======================================================
// ¡ACCIÓN! 
// ======================================================

document.addEventListener('DOMContentLoaded', () => {
    // --- VERIFICACIÓN DE ELEMENTOS HTML ESENCIALES ---
    // Antes de empezar, nos aseguramos de que los botones principales existan en el HTML.
    if (!playPauseBtn || !nextButton || !prevButton) {
        // Si falta alguno, enviamos un error a la consola para ayudar a depurar.
        console.error("Error crítico: Faltan botones de control en el HTML. El carrusel no puede funcionar.");
        // Y detenemos todo para evitar más errores.
        return;
    }
    // --- FIN DE LA VERIFICACIÓN ---
    buildCarousel(); // Ejercicio 6
    showImage(currentIndex);

    //Paso 6: Navegación con Botón "Siguiente"
    nextButton.addEventListener('click', () => { if (isPlaying) togglePlayPause(); nextImage(); });
    prevButton.addEventListener('click', () => { if (isPlaying) togglePlayPause(); prevImage(); });
    playPauseBtn.addEventListener('click', togglePlayPause);
    
    // --- Conexiones de los Ejercicios ---
    resetBtn.addEventListener('click', resetCarousel);           // Ejercicio 2
    randomBtn.addEventListener('click', randomImage);            // Ejercicio 3
    speedSelect.addEventListener('change', changeSpeed);         // Ejercicio 5
    document.addEventListener('keydown', handleKeyPress);        // Ejercicio 4
});