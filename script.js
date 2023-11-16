// 1). Realizar un programa que pregunte al usuario un número y calcule su expresión binaria. El programa permitirá ingresar números hasta que el usuario ingrese el número cero. Para calcular la expresión binaria de un número decimal, se debe dividir por dos hasta llegar al resultado 1 y tomar los restos empezando por el último hasta el primero.

// expresion binaria del nro decimal 8 es 1000
// expresion binaria del nro decimal 11 es 1011

// EJERCICIO 1
function pedirNumero (){
    let condition = true;
    
    while (condition) {
        let numero  = parseInt(prompt('Ingrese un numero'));

        if (numero <= 0) {
            condition = false;
            // console.log('El numero es menor o igual a 0');
        }else {
            obtenerBinario();

            function obtenerBinario() { 
                let binario = '';

                while (numero > 0) {
                    binario = parseInt(numero % 2) + binario;
                    // console.log('binario: ' + binario);
                    numero = parseInt(numero / 2);
                    // console.log('numero: ' + numero);
                }
                console.log(binario);
                return binario;
            }
        }
    }
}

// pedirNumero();


// 2-Realice un algoritmo que permita al usuario ingresar un número por teclado y muestre por pantalla una pirámide de la siguiente forma, en la cual la fila correspondiente al número ingresado sea la que tiene la cúspide.  Por ejemplo si se ingresa el número 6, se debería obtener el siguiete gráfico:

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * * 
// * * * * *
// * * * *
// * * *
// * * 
// *

//EJERCICIO 2
function arbol() {
    let numero = parseInt(prompt('Ingrese un numero'));
    let asterisco = "";

    for (let i = 0; i < numero; i++) {
        asterisco += "*";
        // console.log(asterisco);        
    }
    
    for (let i = 0; i <= numero - 1 ; i++) {
        let acc = 1;
        asterisco = asterisco.substring(0, asterisco.length - (acc));
        // console.log(asterisco);
        // console.log(i);
    }
}

// arbol();


// 3). Realizar un programa que pregunte al usuario un número y calcule el valor de su posición en la serie de Fibonacci.
// La serie de Fibonacci se define de la siguiente manera: Para el número 0 el resultado es 0 (el valor de la posición cero es cero) y para el 1 es 1, y para el resto de los números, el resultado es la suma de los dos números anteriores en la serie. Por ejemplo el valor en la serie para el número 2 es 1 ya que sumo los dos números anteriores en la lista (0 y 1), el de 6 es 8 debido a que los dos números que lo anteceden en la serie son 5 y 3, cuya suma es 8, y el de 13 es 233 porque 89 + 144 = 233.

// EJERCICIO 3
function fibonacci() {
    let numero = parseInt(prompt('Ingrese un numero'));
    // let listaFibonacci = [];

    let f0 = 0 
    let f1 = 1
    
    sumar(f0, f1);

    function sumar(param0, param1) {
        let param2 = param0 + param1;
        let param3 = param2 + param1;
        console.log(param2, param3);
        sumar(param2, param3);
    }
}

// fibonacci();


// 4-Desarrolla un programa que permita convertir un número binario ingresado por el usuario a su equivalente en sistema decimal. El programa solicitará al usuario que ingrese un número binario y, utilizando un bucle y operaciones matemáticas, realizará la conversión correspondiente. El resultado final, que será el número en formato decimal, se imprimirá en la consola.

// EJERICICIO 4
function binarioADecimal(){
    let binario = Number(prompt('Ingrese un numero binario'));
    let characters = String(binario);
    let acc = 0;
    let acu = characters.length - 1;
    
    for (let i = 0; i < characters.length; i++) {
        let multi = 2 ** i; 
        let resultado = Number(characters[acu]) * multi;
        acc += resultado;
        acu--;
    }
    console.log(acc);
}

// binarioADecimal();





