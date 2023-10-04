
var num1        = parseInt(prompt("Ingrese numero 1"));
var num2        = parseInt(prompt("Ingrese numero 2"));
var operacion   = parseInt(prompt("Que operacion quiere realizar?\nSuma: 1\nResta: 2\nMultiplicacion: 3\nDivision: 4"));
if(operacion == 1){
    var resu = num1 + num2;
    alert(resu);
}else 
if(operacion == 2){
    var resu = num1 - num2;
    alert(resu);
}else 
if(operacion == 3){
    var resu = num1 * num2;
    alert(resu);
}else 
if(operacion == 4){
    var resu = num1 / num2;
    alert(resu);
}else 
{
    alert("Ingrese una operacion correcta");
}








/*
var men1 = "Bienvenido a nuestro sitio web";
var men2 = " Texto comillas dobles,";
var men3 = ' Texto comillas simples';

alert(men1 + men2 + men3)
*/
/*
var cliente = false;
var Iva = true;
alert(Iva);
*/
/*
var array = ['tijuana', 'rosarito', 'ensenada','mexicali'];
alert(array[3-1])
*/