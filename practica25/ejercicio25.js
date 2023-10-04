var valores = [true, 10, false, "codigo", "herramientas", 7];

//Determinar cual de los 2 textos es mayor
alert("Es codigo menor a herramientas: " + (valores[3] < valores[4]));
alert("Es codigo mayor a herramientas: " + (valores[3] > valores[4]));


//Valores booleanos
var boolTrue = valores[0];
var boolFalse = valores[2];
alert("true == false?= " + (valores[0] == valores[2]));
alert("true > false?= "  + (valores[0] > valores[2]));
alert("true < false?= " + (valores[0] < valores[2]));
alert("true != false?= " + (valores[0] != valores[2]));

//5 operaciones matematicas
var suma = valores[1] + valores[5];
var resta = valores[1] - valores[5];
var multiplicacion = valores[1] * valores[5];
var division = valores[1] / valores[5];  
var division2 = valores[5] / valores[1];  

alert("10 + 7= " + suma);
alert("10 - 7= " + resta);
alert("10 * 7= " + multiplicacion);
alert("10 / 7= " + division);
alert("7 / 10= " + division2);



