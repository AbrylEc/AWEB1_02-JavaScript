/*Display: Clase encargada de controlar la calculadora y va a interactuar con nuestros 
 botones y mostrar lo que se debe mostrar en nuestro*/

class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        /*El displayValorAnterior es el valor que queremos modificar, y el 
         valorActual que vamos a crear son los números que estamos guardando.*/
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            multiplicar: 'x',
            dividir: '/'
        };
    }

    /*Método para borrar un caracter*/
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }

    /*Método para borrar el valorActual y setear todo, dejando el display vacío*/
    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores('');

    }

    computar(tipo) {
        this.tipoOperacion !== "igual" && this.calcular();
        this.tipoOperacion = tipo;
        /*El operador condicional es el único operador de JavaScript que toma 
          tres operandos. El operador puede tener uno de dos valores según una 
          condición. La sintaxis es:
          condition ? val1 : val2
          Si condition es true, el operador tiene el valor de val1. De lo 
          contrario, tiene el valor de val2. Puedes utilizar el operador 
          condicional en cualquier lugar donde normalmente utilizas un operador 
          estándar.
          var status = (age >= 18) ? 'adult' : 'minor';*/
        this.valorAnterior = this.valorActual.length === 0 ? this.valorAnterior : this.valorActual;
        this.valorActual = "";
        this.imprimirValores();
        
        /*this.tipoOperacion !== 'igual' && this.calcular();
         this.tipoOperacion = tipo;
         console.log(this.valorActual);
         console.log(this.valorAnterior);
         this.valorAnterior = this.valorActual || this.valorAnterior;
         console.log(this.valorActual);
         this.valorActual = '';
         this.imprimirValores();*/
    }

    /*Método agregarNumero: Recibe un número como parámetro. El valor actual, el número que se está
     agregando sea igual al número que recibimos. La calculadora va a recibir
     un número al presionar un botón y vamos a setear el valor actual del 
     display al nùmero que acabamos de setear.*/
    agregarNumero(numero) {
        if (numero === '.' && this.valorActual.includes('.'))
            return /*Control de ingreso de un solo punto para decimales*/
        /*Se realiza esta línea para que en el dislay se muestren los númeos de 
         manera seguida. Si se iguala únicamente a número, se mostrará un número 
         a la vez. Se los convierte a String para que interprete todos los caracteres, 
         incluyendo el punto*/
        this.valorActual = this.valorActual.toString() + numero;
        this.imprimirValores();
    }

    /*Mètodo imprimirValores: No va a tener agrumentos. Cada vez que se toque un
     botón, se podrá imprimir ese valor en la pantalla*/
    imprimirValores() {
        /*displayValorActual va a tener un textContent que va a setear el texto
         que tiene dentro de HTML*/
        this.displayValorActual.textContent = this.valorActual;
        // console.log(this.displayValorActual.textContent);
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
        // console.log(this.displayValorAnterior.textContent)
    }

    calcular() {
        /*Vamor a parsear el valorAnterior para que deje de ser un String y 
         volviendo a ser un número para ejecutar los cálculos correctamente.*/
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if (isNaN(valorActual) || isNaN(valorAnterior)) {
            return;
        }
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual);
        //console.log(this.valorActual);
    }
}


