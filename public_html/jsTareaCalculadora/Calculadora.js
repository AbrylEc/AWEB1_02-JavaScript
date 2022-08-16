/*El nombre del proyecto va con mayúscula inicial porque abarcará una clase*/

/*Declaración de la clase Calculadora*/
class Calculadora {
    sumar(num1, num2) {
        return num1 + num2;
    }

    restar(num1, num2) {
       /* if (num1 - num2 === 0) {
            return '0';
        }else if(-num1 + num2 === 0 ){
            return '0';          
        }*/
        return num1 - num2;
    }

    multiplicar(num1, num2) {
       /* if (num1 * num2 === 0) {
            return '0';
        } */
        return num1 * num2;
    }

    dividir(num1, num2) {
        return num1 / num2;
    }
}


