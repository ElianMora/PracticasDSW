//Con un for muestre el mensaje “Hola” siete veces, en el 4to hola debe mostrar el mensaje “soy el 4to” 
//y después del 7mo hola el mensaje “Acabamos de saludar”.

for(var l = 0; l < 7; l++){
    switch(l){
        case 0:
            console.log("Hola");
            break;

        case 1:
            console.log("Hola");
            break;

        case 2:
            console.log("Hola");
            break;

        case 3:
            console.log("Soy el cuarto");
            break;

        case 4:
            console.log("Hola");
            break;

        case 5:
            console.log("Hola");
            break;

        case 6:
            console.log("Nos acabamos de saludar");
            break;
    }
}

console.log("----------------For In----------------");

//Investigar for in, forEach, for of. Realice un ejemplo con cada uno de los for 
//con un arreglo que contenga los primeros 11 meses del año.

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"]

//for in

for (const x in meses) {
  console.log(meses[x]);
}



console.log("----------------For each----------------");

//for each 
meses.forEach((item, index, Array) =>{
    console.log(item, index);
});

console.log("----------------For of----------------");
//for of
for (const i of meses) {
    console.log(i);
}

//hacer que omita el mes de Julio
//agregar diciembre fuera del arreglo
//mostrar todos los meses por medio de un ciclo for incluido diciembre.
console.log("---------------Salta Mes---------------");

meses.push("Diciembre");

for (const h of meses){

    if(h != "Julio"){
        console.log(h);
    }
}


  
