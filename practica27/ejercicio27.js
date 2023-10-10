var peso;
var opcion;
var peso_tierra = 9.8;
var peso_marte = 3.7;
var peso_jupiter = 24.79;
var resultado;

peso = prompt("Cuanto pesas?");
opcion = parseInt(prompt("Elige una opcion"));

//version de if
/*
if(opcion == 1){
    resultado = peso * peso_marte / peso_tierra;
    console.log("Su peso es: " + resultado);
}else if(opcion == 2){
    resultado = peso * peso_jupiter / peso_tierra;
    console.log("Su peso es: " + resultado); 
}else{
    console.log("No existe esa opcion");
}
*/

//version de switch

switch(opcion){
    case 1:
        resultado = peso * peso_marte / peso_tierra;
        console.log("Su peso es: " + resultado);
        break;

    case 2:
        resultado = peso * peso_jupiter / peso_tierra;
        console.log("Su peso es: " + resultado); 
        break;
    default:
        console.log("No existe esa opcion");
        break;

}

