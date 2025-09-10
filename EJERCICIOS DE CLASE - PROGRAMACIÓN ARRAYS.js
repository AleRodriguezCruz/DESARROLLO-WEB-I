//Ejercicio 1: Sistema de Inventario de Tienda

let productos = ['laptop', 'mouse', 'teclado', 'monitor'];
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
   console.log(titulosLibros);

