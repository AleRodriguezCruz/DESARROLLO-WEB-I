   
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
