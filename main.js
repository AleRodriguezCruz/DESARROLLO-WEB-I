/*const fruta ={
    nombre:'manzana',
    color:'rojo',
    precio:'4',
    quimicos:false,
    nutrientes:{ // un objeto dentro de otro objeto
         vitaminaC: false,
         folato: false,
         biotina: false,
    }
}


 for (let propiedad in fruta){
    console.log(`${propiedad} : ${fruta[propiedad]}`);
 }
//El método moderno (con ${...}):es una especie de "mini-portal" dentro de una cadena de texto. 

 for(let key in fruta){
    if(fruta.hasOwnProperty(key)){
        console.log(`${key} : ${fruta[key]}`);
    }
 }
 //hasOwnProperty es un método que pertenece a todos los objetos en JavaScript.
 //Se utiliza para verificar si un objeto tiene una propiedad específica como su propia propiedad (no heredada).

 for (let nutriente in fruta.nutrientes){
    console.log(`${nutriente} : ${fruta.nutrientes[nutriente]}`);
 } 
    

/*const computadora = {
    tipo:'escritorio',
    modelo:'asus',
    ram:'16',
    procesador:'Intel i5'
 }

//3 FORMAS DE ACCEDER A UN VALUE (PROPIEDADES)

//notacion punto
/* console.log(computadora.tipo);

///notacion corchete
 console.log(computadora[`ram`]);

 //acceso dinamico  Es increíblemente útil cuando no sabes de antemano 
 // qué propiedad querrá consultar el usuario.
 const prop = 'tipo'
 console.log(computadora[prop]);

 //MODIFICAR PROPIEDADES
 computadora.ram = 32 
 console.log(computadora.ram)

 computadora['procesador'] = 'Intel i7' 
 console.log(computadora.procesador) ;

 //AGREGAR
 computadora['color'] = 'rojo'
 computadora.precio = '34432'
 console.log(computadora)*/

 //OPERACIONES DE COPIAS Y CLONACION
 //SUPERFICIAL
/*const computadora2 = Object.assign({}, computadora);
console.log(computadora2)

//ELIMINAR
 delete computadora.color
 console.log(computadora);

//COPIA SPREAD OPERATOR (copia de un objeto o de un array)
 delete computadora.tipo
const computadoraCipiaSpread = { ... computadora}*/

// ¿Cuál será la suma de todos los valores?/*

/*const ventas = {
enero: 1500,
febrero: 2300,
marzo: 1800
};
const numeros = Object.values(ventas);
console.log(numeros); // [1500, 2300, 1800]
// Sumar todos los valores
const total = numeros.reduce((suma, valor) => suma + valor,
0);
console.log(total); // 5600

const estudiante = {
nombre: "Ana",
edad: 20,
carrera: "Programación"
};
const entradas = Object.entries(estudiante);
console.log(entradas);
// Resultado: [["nombre", "Ana"], ["edad", 20], ["carrera",
// "Programación"]]}

const restaurante = {
pizza: 12.99,
hamburguesa: 8.50,
ensalada: 6.75
};
// Mostrar el menú con formato
Object.entries(restaurante).forEach(([plato, precio]) => {
console.log(`${plato}: $${precio}`);
});

//método .forEach() es un bucle diseñado para arrays.
// Resultado:
// pizza: $12.99     
// hamburguesa: $8.50
// ensalada: $6.75
*/

// Tu turno: ¿Qué imprimirá este código?
/*const videojuego = {
titulo: "Zelda",
plataforma: "Nintendo Switch",
precio: 59.99,
año: 2023
};
console.log(Object.keys(videojuego));
// Respuesta: ["titulo", "plataforma", "precio", "año"]

const estudiante = {
nombre: "Ana",
edad: 20,
carrera: "Programación"
};
const valores = Object.values(estudiante);
console.log(valores);
// Resultado: ["Ana", 20, "Programación"]

const ventas = {
enero: 1500,
febrero: 2300, 
marzo: 1800
}; 
const numeros = Object.values(ventas);
console.log(numeros);
// Resultado: [1500, 2300, 1800]
const total = numeros.reduce((suma, valor) => suma + valor, 0);
console.log(total);
// Resultado: 5600   */

/*/Contar propiedades de un objeto
const usuario = { nombre: "Juan", edad: 25, email:
"juan@email.com" };
console.log(`El usuario tiene $
{Object.keys(usuario).length} propiedades`);
// "El usuario tiene 3 propiedades"

//Verificar si un objeto está vacío
const objetoVacio = {};
const tieneProps = Object.keys(objetoVacio).length > 0;
console.log(tieneProps); // false

//Encontrar el valor máximo
const puntuaciones = {
Ana: 95,
Luis: 87,
María: 92,
Carlos: 88
};
const puntajeMaximo =
Math.max(...Object.values(puntuaciones));
console.log(`Puntuaje más alto: ${puntajeMaximo}`); // 95

//Convertir objeto a formato diferente
const inventario = {
manzanas: 50,
naranjas: 30,
plátanos: 25
};
// Convertir a array de objetos
const arrayProductos =
Object.entries(inventario).map(([fruta, cantidad]) => ({
producto: fruta,
stock: cantidad,
disponible: cantidad > 0
}));
console.log(arrayProductos);
// Resultado

// Filtrar propiedades de un objeto
const empleado = {
nombre: "Ana",
edad: 28,
salario: 45000,
departamento: "IT",
activo: true
};
// Obtener solo propiedades de tipo string
const propiedadesTexto = Object.entries(empleado)
.filter(([clave, valor]) => typeof valor === "string")
.map(([clave, valor]) => clave);
console.log(propiedadesTexto); // ["nombre",
"departamento"];     */ 

//Ejercicios para practicar 
//Ejercicio 1: Análisis de calificaciones
/*const calificicaciones = {
   matematicas: 85,
   historia: 90,
   ciencias: 78,  
   arte:95,
   educacionFisica: 88
};
// 1. Mostrar todas las materias
const valores = Object.keys(calificicaciones);
console.log(valores);

// 2. Calcular el promedio de calificaciones
const promedio = Object.values(calificicaciones).reduce((a,b) => a + b,0) / Object.values(calificicaciones).length;
console.log(promedio);  
// 3. Encontrar la materia con la calificación más alta
const maxCalificacion = Math.max(...Object.values(calificicaciones));
const materiaMax = Object.entries(calificicaciones).find(([materia, calificacion]) => calificacion === maxCalificacion)[0];
console.log(materiaMax);
// 4. contar cuántas materias tienen una calificación por encima de >=90
const materiasArriba90 = Object.values(calificicaciones).filter(calificacion => calificacion >= 90).length;
console.log(materiasArriba90);

//Ejercicio 2: Inventario de tienda

const tienda = {
   camisetas:25,
   pantalones:15,
   zapatos:8,
   gorras:12,
   chaquetas:3
};

//1. Mostrar productos en stock bajo (< 10)
const productosBajoStock = Object.entries(tienda).filter(([producto, cantidad]) => cantidad < 10).map(([producto, cantidad]) => producto);
console.log(productosBajoStock);

// 2. Calcular el total de productos en inventario
const totalProductos = Object.values(tienda).reduce((a,b) => a + b,0);
console.log(totalProductos);

// 3. Mostrar cada producto con su estado de stock (alto/medio/bajo)
const estadoStock = Object.entries(tienda).map(([producto, cantidad]) => {
   let estado;
   if(cantidad >= 20){
      estado = 'alto';
   } else if(cantidad >= 10){
      estado = 'medio';
   } else {
      estado = 'bajo';
   }        
   return {producto, cantidad, estado};
});
console.log(estadoStock);  

// 4. Crear un resumen del inventario
const resumenInventario = Object.entries(tienda).map(([producto, cantidad]) => `${producto}: ${cantidad} unidades`);
console.log(resumenInventario);      


//Ejercicio 3: Sistema de usuarios
const usuarios = {
admin: { rol: "administrador", activo: true,
ultimoAcceso: "2024-01-15" },
juan: { rol: "usuario", activo: true, ultimoAcceso:
"2024-01-10" },
maria: { rol: "moderador", activo: false, ultimoAcceso:
"2023-12-20" },
carlos: { rol: "usuario", activo: true, ultimoAcceso:
"2024-01-12" }
};

// 1. Listar todos los nombres de usuario
const nombres = Object.keys(usuarios);
console.log(nombres);

// 2. Contar usuarios activos
const contarUsuariosActivos = Object.values(usuarios).filter(usuarios => usuarios.activo).length;
console.log(contarUsuariosActivos);

// 3. Mostrar usuarios por rol
const usuarioRol = Object.entries(usuarios).map(([nombre, {rol}]) => `${nombre}: ${rol}`);
console.log(usuarioRol);

// 4. Encontrar el usuario con acceso más reciente
const accesoReciente = Object.entries(usuarios).reduce((reciente, [nombre, {ultimoAcceso}]) => {
   return new Date(ultimoAcceso) > new Date(reciente[1].ultimoAcceso) ? [nombre, {ultimoAcceso}] : reciente;
}, ["", {ultimoAcceso: "1900-01-01"}]);
console.log(accesoReciente[0]); */

//Ejercicio 1: Sistema de Inventario de Tienda

/*let productos = ['laptop', 'mouse', 'teclado', 'monitor'];
let precios = [1500, 500, 800, 300];


    //Agregar un nuevo producto 'webcam' con precio 1200
productos.push('webcam');
precios.push(1200);
console.log(productos);
console.log(precios);   

  //Encontrar si existe el producto 'mouse' en el inventario
  const existeMouse = productos.includes('mouse');
  console.log(existeMouse);

  //Obtener todos los productos que cuestan menos de 1000 pesos
  const productosMenos1000 = productos.filter((productos, index ) => precios[index] <1000);
  console.log(productosMenos1000);

    //Calcular el precio total de todos los productos
     const totalProductos = precios.reduce((a, b) => a + b, 0);
     console.log(totalProductos);  


     //Ejercicio 2: Lista de Reproducción Musical

     let playlist = ['Bohemian Rhapsody', 'Hotel California', 'Imagine', 'Yesterday'];
 
     //Agregar ‘Stairway to Heaven’ al inicio de la playlist
     playlist.unshift('Stairway to Heaven');
     console.log(playlist);   


	//Eliminar la última canción de la lista
   let ultimaCancion = playlist.pop();
   console.log(playlist);
   console.log(ultimaCancion);   

	//	Verificar si ‘Imagine’ está en la playlist
   let verificarImagine= playlist.includes('Imagine');
   console.log(verificarImagine);


	//	Crear una nueva playlist solo con las canciones que tienen más de 8 caracteres
   let cancionesMas8 = playlist.filter(cancion => cancion.length > 8);
   console.log(cancionesMas8);   


  //Ejercicio 3: Registro de Calificaciones

//La profe Xenia necesita procesar las calificaciones de sus estudiantes.

let calificaciones = [85, 92, 78, 96, 88, 73, 90, 87];

	//Encontrar la calificación más alta
   let calificacionMax = Math.max(...calificaciones);
console.log(calificacionMax);

	//Verificar si todos los estudiantes aprobaron (calificación >= 70)
   let calificacionesAprobadas = calificaciones.every(calificacion => calificacion >= 70);
   console.log(calificacionesAprobadas);

	//Obtener solo las calificaciones sobresalientes (>= 90)
   let calificacionesSobresalientes = calificaciones.filter(calificacion => calificacion >= 90);
   console.log(calificacionesSobresalientes);   

	//Calcular el promedio de todas las calificaciones 
   let promedioCalificaciones = calificaciones.reduce((a, b) => a + b, 0) / calificaciones.length; 
   console.log(promedioCalificaciones);

   //Ejercicio 4: Organizador de Tareas

//Estás desarrollando una app de productividad para organizar tareas diarias.

let tareas = ['comprar víveres', 'llamar al dentista', 'terminar proyecto', 'hacer ejercicio'];

let completadas = [false, true, false, false];

	//Agregar una nueva tarea ‘revisar emails’
   tareas.push('revisar emails');
   completadas.push(false);
   console.log(tareas);
   console.log(completadas);  

	//	Marcar la primera tarea como completada
   completadas[0] = true;
   console.log(completadas);

	//	Obtener solo las tareas que NO están completadas

let tareasCompletas = tareas.filter((tareas, index) => !completadas[index]);
console.log(tareasCompletas);
	//	Contar cuántas tareas faltan por completar
   let tareasPorCompletar = completadas.filter(estados => !estados).length;
   console.log(tareasPorCompletar); 

   //Ejercicio 5: Catálogo de Libros

  let libros = [

    {titulo: 'Cien años de soledad', autor: 'García Márquez', año: 1967},

    {titulo: '1984', autor: 'George Orwell', año: 1949},

    {titulo: 'Don Quijote', autor: 'Cervantes', año: 1605},

    {titulo: 'El principito', autor: 'Saint-Exupéry', año: 1943}

];



	//Agregar un nuevo libro: {titulo: ‘Rayuela’, autor: ‘Cortázar’, año: 1963}
   libros.push({titulo: 'Rayuela', autor: 'Cortázar', año: 1963});
   console.log(libros);

	//	Encontrar el libro más antiguo
   let libroAntiguo = libros.reduce((antiguo, libro) => libro.año < antiguo.año ? libro : antiguo);
   console.log(libroAntiguo);

	//	Obtener todos los libros publicados después de 1950
   let librosDespues1950 = libros.filter(libro => libro.año >1950);
   console.log(librosDespues1950);

	//	Crear un array solo con los títulos de todos los libros 
   let titulosLibros = libros.map(libros => libros.titulo);
   console.log(titulosLibros);*/

   
let productos = [
{id: 1, nombre: "Laptop Gaming", precio: 25000, categoria: "tecnologia", stock: 5},
{id: 2, nombre: "Auriculares", precio: 1500, categoria: "tecnologia", stock: 15},
{id: 3, nombre: "Cafetera", precio: 2500, categoria: "hogar", stock: 8},
{id: 4, nombre: "Libro JavaScript", precio: 450, categoria: "libros", stock: 20},
{id: 5, nombre: "Silla Ergonómica", precio: 3500, categoria: "oficina", stock: 3}
];

let carrito = [
{productoId: 1, cantidad: 1},
{productoId: 2, cantidad: 2},
{productoId: 4, cantidad: 3}
];


//🎯 Tareas a resolver:
//1. Calcular el total del carrito incluyendo todos los productos
let totalCarrito = carrito.reduce((total, item) => {
    let producto = productos.find(p => p.id === item.productoId);
    return total + (producto.precio * item.cantidad);
}, 0);

console.log("Total del carrito: $" + totalCarrito);  

//2. Aplicar un descuento del 15% si el total supera los $5000
if (totalCarrito > 5000){
    totalCarrito *= 0.85; // Aplicar descuento del 15%
    console.log("Total del carrito con descuento: $" + totalCarrito.toFixed(2));
}
else {
    console.log("No se aplica descuento. Total del carrito: $" + totalCarrito.toFixed(2));  

}


//3. Verificar si hay suficiente stock para todos los productos del carrito

let stockSuficiente = carrito.every(item => {
    let producto = productos.find(p => p.id === item.productoId);
    return producto && producto.stock >= item.cantidad;
}
);

console.log("¿Hay suficiente stock para todos los productos del carrito? " + stockSuficiente);  

//4. Generar un resumen detallado de la compra

let resumenCompra = carrito.map(item => {
    let producto = productos.find(p => p.id === item.productoId);
    return {    
        nombre: producto.nombre,
        cantidad: item.cantidad,
        precioUnitario: producto.precio,
        subtotal: producto.precio * item.cantidad
    };
}
);

console.log("Resumen detallado de la compra:");
console.table(resumenCompra);

//5. Encontrar el producto más caro en el carrito
let productoMasCaro = carrito.reduce((masCaro, item) => {
    let producto = productos.find(p => p.id === item.productoId);
    return (!masCaro || producto.precio > masCaro.precio) ? producto : masCaro;
}, null);

console.log("Producto más caro en el carrito:", productoMasCaro);   

let estudiantes = [ {id: 1, nombre: "Ana García", edad: 20, carrera: "Ingeniería", semestre: 6, calificaciones: [95, 87, 92, 89, 94], asistencia: 95, beca: false}, {id: 2, nombre: "Carlos López", edad: 22, carrera: "Medicina", semestre: 8, calificaciones: [78, 82, 75, 80, 77], asistencia: 88, beca: true}, {id: 3, nombre: "María Rodríguez", edad: 19, carrera: "Derecho", semestre: 4, calificaciones: [92, 95, 88, 91, 93], asistencia: 97, beca: false}, {id: 4, nombre: "Diego Hernández", edad: 21, carrera: "Ingeniería", semestre: 6, calificaciones: [85, 79, 88, 82, 86], asistencia: 92, beca: false}, {id: 5, nombre: "Laura Martín", edad: 23, carrera: "Medicina", semestre: 10, calificaciones: [88, 92, 86, 90, 89], asistencia: 94, beca: true} ];
// Análisis de Rendimiento Académico
//🎯 Tareas a resolver:
//1. Calcular el promedio general de cada estudiante
let promediosEstudiantes = estudiantes.map(estudiante => {
    let promedio = estudiante.calificaciones.reduce((a, b) => a + b, 0) / estudiante.calificaciones.length;
    return {nombre: estudiante.nombre, promedio: promedio.toFixed(2)};
}  );
console.log("Promedio general de cada estudiante:");
console.table(promediosEstudiantes);   


//2. Identificar estudiantes candidatos a beca (promedio >= 90 y asistencia >= 95)
let candidatosBeca = promediosEstudiantes.filter(estudiante => estudiante.promedio >= 90).map(estudiante => estudiante.nombre);
console.log("Estudiantes candidatos a beca:");
console.log(candidatosBeca);  

//3. Agrupar estudiantes por carrera y calcular el promedio por carrera 
let promediosPorCarrera = {};
estudiantes.forEach(estudiante => {
    let promedio = estudiante.calificaciones.reduce((a, b) => a + b, 0) / estudiante.calificaciones.length; 
      if (!promediosPorCarrera[estudiante.carrera]) {
         promediosPorCarrera[estudiante.carrera] = {total: 0, count: 0};
      }
      promediosPorCarrera[estudiante.carrera].total += promedio;
      promediosPorCarrera[estudiante.carrera].count += 1;
}
);

for (let carrera in promediosPorCarrera) {
    promediosPorCarrera[carrera] = (promediosPorCarrera[carrera].total / promediosPorCarrera[carrera].count).toFixed(2);
}     
console.log("Promedio por carrera:");
console.table(promediosPorCarrera);

//4. Encontrar al estudiante con mejor rendimiento general
let mejorEstudiante = promediosEstudiantes.reduce((mejor, estudiante) => {
    return estudiante.promedio > mejor.promedio ? estudiante : mejor;
}, {nombre: "", promedio: 0});
console.log("Estudiante con mejor rendimiento general:");
console.log(mejorEstudiante); 


//5. Generar una lista de estudiantes en riesgo académico (promedio < 80)
let estudiantesRiesgo = promediosEstudiantes.filter(estudiante => estudiante.promedio < 80).map(estudiante => estudiante.nombre);
console.log("Estudiantes en riesgo académico:");
console.log(estudiantesRiesgo);     
