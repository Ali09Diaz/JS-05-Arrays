console.log("Estoy vivo")
/*
Array

 Un array es un conjunto de datos que se pueden almacenar en una sola variable. Un arreglo es una estructura de datos que podemos definir como una coleccion de variables (que pueden ser diferentes, pero con un mismo contexto).

 */

 //Variables que estan "sueltas"
 let nombre = "Felipe";
 let edad = 31;
 let puesto = "instructor";

 //Usar un array (arreglo) para "juntar" nuestras variables
 //Agregamos los elementos al Array, separados por coma
 let personasDeLaCH31 = ["Felipe", "Jose Angel", "Marco", "Evelyn", "Alejandro"];

 //Podemos almacenar cualquier tipo de dato en un array 
 let cosasRandom = ["Pelota", 31, true, undefined, null];
 console.log(typeof(cosasRandom)); //object
 console.log(typeof(personasDeLaCH31));

 //Al imprimir el tipo de datos de nuestro arreglo, obtenemos un object porque los arrays son objetos (despues veremos que tenemos muchos tipos de objetos)


//Los arrgelos al ser objetos cuentan con metodos que nos permiten manipularlos


//Ya que tengo mi arreglo, como podemos acceder a una informacion?
//Para mostrar la cantidad de elements que tengo en un arreglo, usamos un metodo llamado Length



//Metodo Legth para mostrar los elementos de un array
console.log(personasDeLaCH31.length); //me da como resultado un 5 porque tengo 5 "elementos" en la CH31, pero tengo 4 posiciones, es decir, 0,1,2,3,4 



//Declarar un array
[5, 4, 3, 2, 1]

//Inicializar un array
let cuentaRegresiva = [5, 4, 3, 2, 1];


//Aceder a un elemento en especifico

console.log(personasDeLaCH31[0]);//Felipe
console.log(personasDeLaCH31[25]);//undefinded, porque el elemento aun no existe 

//Tambien podemos aaceder a un elemento de mi arreglo por medio de una variable 

//Declaro el indice en una variable
let index = 4;

//Paso a esta vriable como indice del arreglo 
console.log(personasDeLaCH31[index]); //Alejandro. porque en la posicion 4 tenemos a Alejandro 


//Ejemplo de un array para un consultorio dental 
let pacientes = [];

let dentistas = ["Dr. smith", "Dra. Garcia", "Dr. House", "Dr. Simi"];

//Para hacer modificaciones, usamos el index para acceder al dato y luego lo reasignamos

dentistas[3] = "Similares"
//console.log(dentistas[3]);

dentistas[8] = "Dr. strange" //
//console.log(dentistas[8]);

console.log(dentistas);

console.log (typeof(dentistas[7])); //el 7 es la posicion 7, es decir el elemento 8 que es Dr. Strange

//Funcion para imprimir asteriscos y poner una division en la informacion de mi consola
function imprimirAsteriscos (){
    console.log("***************************************");
}

//Invocacion de mi funcion 
imprimirAsteriscos();



//Metodo de arrays
let listaDelSuper = ["Gansitos", "Coca-colas", "Arroz", "Atun", "Verduritas"];

//Metodo Length para conocer la longitud del array 
console.log ("La cantidad de elementos de mi array es de: " + listaDelSuper.length);

//Metodo push() para poner elementos al final de mi array
listaDelSuper.push("Jabon para ropa", "Jabon para trastes");

console.log(listaDelSuper);

console.log ("La cantidad de elementos de mi array actualizado es de: " + listaDelSuper.length);

//Metodo pop() para eliminar elementos del final del array
listaDelSuper.pop();
console.log(listaDelSuper);
console.log(listaDelSuper.length);

//Agregar un elemento al principio del array con el metodo unshift()
listaDelSuper.unshift("Sabritones");
console.log(listaDelSuper);
console.log(listaDelSuper.length);
    

//Eliminar el primer elemento del array shift elimina elementos al principio del array
listaDelSuper.shift();
console.log(listaDelSuper);


//Saber la posicion de las verduritas
console.log(listaDelSuper.indexOf("Verduritas"));


//Metodo splice para agregar, eliminar o reemplzar elementos

//nombreArreglo.splice(inicio, cantidadElementosAEliminar, elementoAInsertar1, elementoAInsertar2, ...);


listaDelSuper.splice(2, 0, "Cacahuates", "Manzana"); //


//Kenia ['Gansitos', 'Coca-colas', 'Cacahuates', 'Manzana', 'Arroz', 'Atún', 'Verduritas', 'Jabón para ropa']

//Brandon ['Gansitos','Coca-Colas','Cacahuates','Manzana', 'Arroz','Atún','Verduritas','Jabón para ropa']

console.log(listaDelSuper);

listaDelSuper.splice(5, 2, "Platano");

console.log(listaDelSuper);


//Metodo .map() 

let numeros = [1, 2, 3, 4, 5];

//Crear otro arreglo con los numeros multiplicados x2 [2, 4, 6, 8, 10]


let numerosPorDos = numeros.map(function(numero){
    return numero * 2;
});


console.log(numerosPorDos);



/*

Imaginemos que tenemos un array de pacientes. Este array tiene datos registrados como nombre, edad. Necesitamos modificar este arreglo para que revisemos la edad de cada paciente, y si la edad es mayor a 40 anios, el paciente necesita una atencion especial. 


    Aspectos a considerar>

    - 2 arreglos (original y el modificado)
    - condicion if
    - funcion para agregar el nuevo dato a cada elemento
    - metodo map()
*/

//Arreglo de pacientes original
let pacientesConsultorio = [
    {   
        nombre: "Felipe", 
        edad: 31,
    },
    {
        nombre: "Fatima",
        edad: 26,
    },
    {
        nombre: "Jesus",
        edad: 51,
    }
]


//Funcion para agregar el texto Necesita atencion especial
function agregarEstadoSalud(paciente){
    let estado = "Saludable";


    //Si el paciente tiene mas de 40 anios
    if (paciente.edad>40){
        estado = "Necesita atencion especial";
    }

    return {
        ...paciente, //copia del paciente
        estadoSalud :estado, //para agregar un nuevo campo o variable (como la edad o el nombre)
    };
}


//Vamos a aplicar la funcion en cada elemento del arreglo con el map
let pacientesConsultorioConEstado = pacientesConsultorio.map(agregarEstadoSalud);

console.log(pacientesConsultorio);
console.log(pacientesConsultorioConEstado);



//Ejercicio carreritas

//Array Original
let corredores = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"];
console.log(corredores);

//Jorge adelanta a Roberto (cambiamos las posiciones de Jorge y Roberto)
corredores.splice(2, 1, );
corredores.splice(0, 0, "Jorge",);
    // [ "Jorge", "Roberto", "Andrea", "Ramiro", "Sofia" ]

//Ramiro adelanta a Jorge (cambiamos las posiciones de Ramiro y Jorge)
corredores.splice(3, 1, );
corredores.splice(0, 0, "Ramiro",);
    //[ "Ramiro", "Jorge", "Roberto", "Andrea", "Sofia" ]

//Roberto se lesiona y sale de la carrera (eliminamos el primer elemento)
corredores.splice(2, 1, );
    //[ "Ramiro", "Jorge", "Andrea", "Sofia" ]

//Andrea baja una posicion (intercambiamos las posiciones de Andrea y del ultimo corredor)
corredores.splice(2, 1, );
corredores.push("Andrea");
    //[ "Ramiro", "Jorge", "Sofia", "Andrea" ]

//El quinto corredor es reemplazado por Jose (cambiamos las posiciones del ultimo corredor con Jose)
corredores.push("Jose");
    //[ "Ramiro", "Jorge", "Sofia", "Andrea", "Jose" ]

//Imprimimos arreglo final

console.log("Asi quedaron las posiciones de los corredores: " + corredores);
    //[ "Ramiro", "Jorge", "Sofia", "Andrea", "Jose" ]

