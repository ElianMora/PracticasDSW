//Escribir una función que reciba como parámetro un número y regrese si el número
//capturado es impar o par. (utilizar prompt para capturar el número).

function imparAndImpar()
{
    let num = prompt("Ingrese un numero"); 
    if (num % 2)
    {
        console.log("Numero es impar");
    }else{
        console.log("Numero es par");
    }
}

//imparAndImpar();

//Escribir una función llamada "Aviso de Huracán", la cual debe contener un
//parámetro que sea de tipo booleano (hayUnHuracan). Si hay huracán, se deberá
//imprimir "Hay un Huracán", de lo contrario deberá imprimir el mensaje " Está Soleado".

function avisoHuracan()
{
    let hayUnHuracan = prompt("True o False");
    if (hayUnHuracan == true)
    {
        console.log("Hay un huracan");
    }else
    {
        console.log("esta soleado");
    }
}

//avisoHuracan();

/*
Escribir una función con nombre "OperacionesMatematicas", que recibe 3
parametros, uno de tipo string con nombre "operacion" y dos de tipo numérico
llamados "a" y "b".Por lo cual, el tipo string nos indicará el tipo de operación que se
llevará a cabo entre a y b, es decir, si "operación" es igual a "sumar", "a" y "b" se
van a sumar, esto se debe realizar con suma, resta, multiplicación, división y
residuo, en caso de que el valor no corresponda a ninguno de los anteriores , la
función deberá regresar "0".
*/

function OperacionesMatematicas()
{
    let operacion = prompt("Quieres: \nSuma\nResta\nMulti\nDivi\nResiduo");
    let a = parseInt(prompt("Ingrese numero1"));
    let b = parseInt(prompt("Ingrese numero2"));

    switch (operacion)
    {
        case "Suma":
            resultado = a + b;
            console.log("Tu resultado es: " + resultado);
            break;
        case "Resta":
            resultado = a - b;
            console.log("Tu resultado es: " + resultado);
            break;
        case "Multi":
            resultado = a * b;
            console.log("Tu resultado es: " + resultado);
            break;
        case "Divi":
            resultado = a / b;
            console.log("Tu resultado es: " + resultado);
            break;
        case "Residuo":
            resultado = a % b;
            console.log("Tu resultado es: " + resultado);
            break;
        default:
            console.log(" Esa opcion no existe 0");
            break;
    }
}
OperacionesMatematicas();