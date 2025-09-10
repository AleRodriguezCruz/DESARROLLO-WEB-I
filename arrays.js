//1. Métodos para Agregar o Eliminar Elementos
//push - Agrega uno o más elementos al FINAL del array.
let frutas = ['manzana', 'pera'];
frutas.push('banana');
// Resultado: ['manzana', 'pera', 'banana']

//pop - Elimina el ÚLTIMO elemento del array.
let frutas = ['manzana', 'pera', 'banana'];
frutas.pop();
// Resultado: ['manzana', 'pera']

//unshift() - Agrega uno o más elementos al INICIO del array.
let frutas = ['pera', 'banana'];
frutas.unshift('manzana');
// Resultado: ['manzana', 'pera', 'banana']

//shift() - Elimina el PRIMER elemento del array.
let frutas = ['manzana', 'pera', 'banana'];
frutas.shift();
// Resultado: ['pera', 'banana']

//splice() - Cambia el contenido de un array eliminando, reemplazando o agregando elementos.
let numeros = [1, 2, 5, 6];
// A partir del índice 2, elimina 0 elementos y agrega el 3 y el 4.
numeros.splice(2, 0, 3, 4);
// Resultado: [1, 2, 3, 4, 5, 6]

//slice() - Devuelve una COPIA de una parte del array, sin modificar el original.
let numeros = [1, 2, 3, 4, 5];
// Crea una copia desde el índice 1 hasta el 3 (el 4 no se incluye).
let copia = numeros.slice(1, 4);
// Resultado: [2, 3, 4]

//2. Métodos para Iterar o Recorrer Arrays

//forEach() - Ejecuta una función para CADA elemento del array. No devuelve nada.
let numeros = [1, 2, 3];
numeros.forEach(num => console.log(num * 2));
// Imprime en consola: 2, 4, 6

//map() - Crea un NUEVO array con los resultados de aplicar una función a cada elemento.
let numeros = [1, 2, 3];
let dobles = numeros.map(num => num * 2);
// Resultado: [2, 4, 6]

//filter() - Crea un NUEVO array con todos los elementos que cumplen una condición.
let numeros = [1, 2, 3, 4, 5];
let pares = numeros.filter(num => num % 2 === 0);
// Resultado: [2, 4]

//reduce() - Reduce el array a un ÚNICO valor, aplicando una función acumuladora.
let numeros = [1, 2, 3, 4];
// Suma todos los números, empezando con un total de 0.
let suma = numeros.reduce((total, num) => total + num, 0);
// Resultado: 10

//every() - Comprueba si TODOS los elementos del array cumplen una condición.
let numeros = [2, 4, 6];
let todosPares = numeros.every(num => num % 2 === 0);
// Resultado: true

//some() - Comprueba si AL MENOS UN elemento del array cumple una condición.
let numeros = [1, 3, 4];
let hayPar = numeros.some(num => num % 2 === 0);
// Resultado: true

//find() - Devuelve el PRIMER ELEMENTO que cumple una condición.
let numeros = [1, 3, 4, 6];
let primerPar = numeros.find(num => num % 2 === 0);
// Resultado: 4

//findIndex() - Devuelve la POSICIÓN (índice) del primer elemento que cumple una condición.
let numeros = [1, 3, 4, 6];
let indicePrimerPar = numeros.findIndex(num => num % 2 === 0);
// Resultado: 2
//3. Métodos para Buscar o Verificar

//includes() - Determina si un array INCLUYE un determinado elemento. Devuelve true o false.
let frutas = ['manzana', 'pera', 'banana'];
let tienePera = frutas.includes('pera');
// Resultado: true

//indexOf() - Devuelve la PRIMERA POSICIÓN en la que se encuentra un elemento.
let frutas = ['manzana', 'pera', 'banana', 'pera'];
let posicion = frutas.indexOf('pera');
// Resultado: 1

//lastIndexOf() - Devuelve la ÚLTIMA POSICIÓN en la que se encuentra un elemento.
let frutas = ['manzana', 'pera', 'banana', 'pera'];
let ultimaPosicion = frutas.lastIndexOf('pera');
// Resultado: 3

//4. Métodos para Manipular el Contenido

//sort() - ORDENA los elementos del array (modifica el original).
let numeros = [3, 1, 4, 2];
numeros.sort();
// Ojo: por defecto ordena como texto. Para números, se usa una función.
numeros.sort((a, b) => a - b); // Ordena números de menor a mayor.
// Resultado: [1, 2, 3, 4]

//reverse() - INVIERTE el orden de los elementos del array (modifica el original).
let numeros = [1, 2, 3, 4];
numeros.reverse();
// Resultado: [4, 3, 2, 1]

//fill() - RELLENA todos los elementos de un array con un valor estático.
let numeros = [1, 2, 3, 4];
numeros.fill(0);
// Resultado: [0, 0, 0, 0]

//5. Métodos para Crear o Transformar
//concat() - UNE dos o más arrays para crear uno nuevo.
let arr1 = [1, 2];
let arr2 = [3, 4];
let combinado = arr1.concat(arr2);
// Resultado: [1, 2, 3, 4]

//join() - Convierte todos los elementos de un array en un STRING (texto).
let frutas = ['manzana', 'pera', 'banana'];
// Une los elementos usando ', ' como separador.
let resultado = frutas.join(', ');
// Resultado: "manzana, pera, banana"

//Array.from() - Crea un NUEVO array a partir de un objeto similar a un array (como un string).
let str = "hola";
let arr = Array.from(str);
// Resultado: ['h', 'o', 'l', 'a']

//Array.isArray() - Verifica si una variable es un ARRAY. Devuelve true o false.
Array.isArray([1, 2, 3]); // true
Array.isArray("texto");   // false
