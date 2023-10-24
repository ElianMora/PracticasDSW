//elementos). Realice un arreglo con los días de la semana (utilice las propiedades investigadas).
const dias =["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];


for(var l = 0; l < 7; l++ ){
    console.log(dias[l]);

}


console.log("--------------Sumar--------------");
//Utilice while para sumar los números del 1 al 5.

var i = 0;
var total = 0;
while(i <= 5){
    total = total + i;
    console.log(total);
    i++;
}

console.log("-----------Exponencial-----------");
//Con do while, obtenga el factorial del número 5.
var j = 0;
var expo = 1;
do{
    j += 1;
    expo = expo * j;
    console.log(expo);
    
}while(j < 5);