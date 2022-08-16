/*DECLARACIÓN DE VARIABLES
 Las variables var pueden ser modificadas y re-declaradas dentro de
 su ámbito; las variables let pueden ser modificadas, pero no 
 re-declaradas; las variables const no pueden ser modificadas ni 
 re-declaradas. Todas ellas se elevan a la parte superior de su ámbito.*/
const displayValorAnterior = document.getElementById('valorAnterior');
const displayValorActual = document.getElementById('valorActual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

/*Instanciamos la clase DisplayTareaCalculadora, displayValorAnterior y 
 displayValorActual como parámetros para que los vaya actualizando.*/
const display = new Display(displayValorAnterior, displayValorActual);

/*Instanciamos la clase creando la variable calculadora para poder
 hacer los cálculos*/
const calculadora = new Calculadora();

/*Prueba de resultados en consola ctrl+shift+i reemplazando / por paréntesis
 console.log/calculadora.sumar/2, 3//;
 console.log/calculadora.restar/2, 3//;
 console.log/calculadora.multiplicar/2, 3//;
 console.log/calculadora.dividir/2, 3//;*/

/*El operador => está precedido por la lista de argumentos de la función y va
 seguido por la expresión que se devuelve como resultado de la ejecución de 
 la función. Deberá agregarse un método en el Display para imprimir los valores
 en la pantalla.*/
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton =>{
    boton.addEventListener('click', () => display.computar(boton.value));
});






