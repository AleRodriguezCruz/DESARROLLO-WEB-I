// ======================================================
// PASO 1: SELECCIÓN DE ELEMENTOS DEL DOM
// ======================================================
const inputTarea = document.getElementById('input-tarea');
const btnAgregar = document.getElementById('btn-agregar');
const listaTareas = document.getElementById('lista-tareas');
const numeroTareas = document.getElementById('numero-tareas');
const filtrosContainer = document.querySelector('.filtros');

// ======================================================
// PASO 2: EVENT LISTENERS (ESCUCHADORES DE EVENTOS)
// ======================================================
document.addEventListener('DOMContentLoaded', iniciarApp);
btnAgregar.addEventListener('click', agregarTarea);
inputTarea.addEventListener('keypress', (e) => e.key === 'Enter' && agregarTarea());
listaTareas.addEventListener('click', manejarClickEnLista);
filtrosContainer.addEventListener('click', manejarFiltros);

// Listeners para Arrastrar y Soltar (Drag and Drop)
listaTareas.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('tarea-item')) {
        e.target.classList.add('dragging');
    }
});

listaTareas.addEventListener('dragend', (e) => {
    if (e.target.classList.contains('tarea-item')) {
        e.target.classList.remove('dragging');
        guardarTareas();
    }
});

listaTareas.addEventListener('dragover', (e) => {
    e.preventDefault();
    const tareaArrastrada = document.querySelector('.dragging');
    const tareaDebajo = e.target.closest('.tarea-item:not(.dragging)');

    if (tareaDebajo) {
        const rect = tareaDebajo.getBoundingClientRect();
        const offsetY = e.clientY - rect.top - rect.height / 2;
        if (offsetY < 0) {
            listaTareas.insertBefore(tareaArrastrada, tareaDebajo);
        } else {
            listaTareas.insertBefore(tareaArrastrada, tareaDebajo.nextSibling);
        }
    }
});


// ======================================================
// PASO 3: FUNCIONES PRINCIPALES
// ======================================================

function iniciarApp() {
    cargarTareas();
    actualizarContador();
    filtrarTareas();
}

function crearElementoTarea(textoTarea, completada) {
    const nuevaTarea = document.createElement('li');
    nuevaTarea.className = 'tarea-item';
    nuevaTarea.draggable = true; // Hace que el elemento se pueda arrastrar
    if (completada) {
        nuevaTarea.classList.add('completada');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = completada;

    const spanTexto = document.createElement('span');
    spanTexto.textContent = textoTarea;

    const btnEditar = document.createElement('button');
    btnEditar.className = 'btn-editar';
    btnEditar.textContent = 'Editar';

    const btnEliminar = document.createElement('button');
    btnEliminar.className = 'btn-eliminar';
    btnEliminar.textContent = 'Eliminar';

    nuevaTarea.appendChild(checkbox);
    nuevaTarea.appendChild(spanTexto);
    nuevaTarea.appendChild(btnEditar);
    nuevaTarea.appendChild(btnEliminar);
    
    listaTareas.appendChild(nuevaTarea);
}

function agregarTarea() {
    const textoTarea = inputTarea.value.trim();
    if (textoTarea === '') {
        alert('Por favor escribe una tarea');
        return;
    }
    crearElementoTarea(textoTarea, false);
    inputTarea.value = '';
    
    actualizarYGuardar();
    filtrarTareas();
}

function manejarClickEnLista(e) {
    const elemento = e.target;
    const tareaItem = elemento.closest('.tarea-item');
    if (!tareaItem) return;

    if (elemento.type === 'checkbox') {
        tareaItem.classList.toggle('completada');
    } else if (elemento.classList.contains('btn-editar')) {
        editarTarea(tareaItem);
        return; // Evita que se llame actualizarYGuardar dos veces
    } else if (elemento.classList.contains('btn-eliminar')) {
        tareaItem.remove();
    }
    
    actualizarYGuardar();
    filtrarTareas();
}

function editarTarea(tareaItem) {
    const spanTexto = tareaItem.querySelector('span');
    const textoActual = spanTexto.textContent;
    const inputEdicion = document.createElement('input');
    inputEdicion.type = 'text';
    inputEdicion.value = textoActual;
    
    spanTexto.replaceWith(inputEdicion);
    inputEdicion.focus();

    const guardarCambio = () => {
        const nuevoTexto = inputEdicion.value.trim();
        spanTexto.textContent = nuevoTexto || textoActual;
        inputEdicion.replaceWith(spanTexto);
        actualizarYGuardar();
    };

    inputEdicion.addEventListener('blur', guardarCambio);
    inputEdicion.addEventListener('keypress', (e) => e.key === 'Enter' && inputEdicion.blur());
}

// ======================================================
// PASO 4: FUNCIONES DE FILTRADO
// ======================================================

function manejarFiltros(e) {
    if (e.target.classList.contains('filtro-btn')) {
        document.querySelector('.filtro-btn.active').classList.remove('active');
        e.target.classList.add('active');
        filtrarTareas();
    }
}

function filtrarTareas() {
    const filtroActivo = document.querySelector('.filtro-btn.active').dataset.filtro;
    const tareas = listaTareas.querySelectorAll('.tarea-item');

    tareas.forEach(tarea => {
        const estaCompletada = tarea.classList.contains('completada');
        let mostrar = true;

        if (filtroActivo === 'pendientes' && estaCompletada) {
            mostrar = false;
        } else if (filtroActivo === 'completadas' && !estaCompletada) {
            mostrar = false;
        }

        tarea.style.display = mostrar ? 'flex' : 'none';
    });
}

// ======================================================
// PASO 5: LOCALSTORAGE Y CONTADOR
// ======================================================

function actualizarContador() {
    const totalTareasPendientes = listaTareas.querySelectorAll('.tarea-item:not(.completada)').length;
    numeroTareas.textContent = totalTareasPendientes;
}

function guardarTareas() {
    const tareas = [];
    listaTareas.querySelectorAll('.tarea-item').forEach(tareaItem => {
        tareas.push({
            texto: tareaItem.querySelector('span').textContent,
            completada: tareaItem.classList.contains('completada')
        });
    });
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

function cargarTareas() {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas'));
    if (tareasGuardadas) {
        tareasGuardadas.forEach(tarea => crearElementoTarea(tarea.texto, tarea.completada));
    }
}

function actualizarYGuardar() {
    actualizarContador();
    guardarTareas();
}