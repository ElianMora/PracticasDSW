
let maravillas = ["chichen-itza.svg", "coliseo.svg", "cristo-redentor.svg", "machu-picchu.svg", "muralla-china.svg","petra.svg","taj-mahal.svg"];//crea un array con el nombre de las imagenes
let correcta = [1,0,2,1,2,0,1];//crea un array con las opciones correctas


let opciones = [];//crea un array vacio para las diferentes opciones

opciones.push(["Machu Picchu", "Chichen Itza", "Coliseo"]);//el primer listado de opciones a elegir
opciones.push(["Coliseo", "Petra", "Cristo Redentor"]);//el segundo listado de opciones a elegir
opciones.push(["Muralla China", "Taj Mahal", "Cristo Redentor"]);//el tercer listado de opciones a elegir
opciones.push(["Petra", "Machu Picchu", "Taj Mahal"]);//el cuarto listado de opciones a elegir
opciones.push(["Chichen Itza", "Petra", "Muralla China"]);//el quinto listado de opciones a elegir
opciones.push(["Petra", "Machu Pichu", "Chichen Itza"]);//el sexto listado de opciones a elegir
opciones.push(["Coliseo", "Taj Mahal", "Cristo Redentor"]);//el septimo listado de opciones a elegir

let posActual = 0;//se inicializa la variable que marca nuestra posicion
let cantidadAcertadas = 0;//se inicializa la variable que mantiene la cantidad de aciertos 

function comenzarJuego(){//inicia la funcion comienza juego
    posActual = 0;//marca la posicion inicial
    cantidadAcertadas = 0;//marca las cantidades acertadas
    document.getElementById("pantalla-inicial").style.display = "none";//muestra la pantalla inicial
    document.getElementById("pantalla-juego").style.display = "block";//muestra la pantalla de juego
    cargarMaravilla();//inicia el metodo cargaMaravilla

}

function cargarMaravilla(){//inicia la funcion cargaMaravilla
    if(maravillas.length <= posActual){//if de mientra la cantidad del array de maravillas sea menor a la posicion actual
        terminarJuego();//ejecuta el metodo termina juego
    }
    else{//else
        limpiarOpciones();//ejecuta el metodo limpiar opciones

        document.getElementById("imgMaravilla").src = "img/" + maravillas[posActual];//agarra la imagen basado en el indice comparado con la posicion actual
        document.getElementById("n0").innerHTML = opciones[posActual][0];//agarra la opcion a mostrar en el boton 1
        document.getElementById("n1").innerHTML = opciones[posActual][1];//agarra la opcion a mostrar en el boton 2
        document.getElementById("n2").innerHTML = opciones[posActual][2];//agarra ña opcion a mostrar en el boton 3
    }
}

function limpiarOpciones(){//inicia la funcion limpiar opciones
    document.getElementById("n0").className = "nombre";//coloca un nombre generico en la opcion1
    document.getElementById("n1").className = "nombre";//coloca un nombre generico en la opcion2
    document.getElementById("n2").className = "nombre";//coloca un nombre generico en la opcion3
    document.getElementById("l0").className = "letra";//coloca un nombre generico en la letra 1
    document.getElementById("l1").className = "letra";//coloca un nombre generico en la letra 2
    document.getElementById("l2").className = "letra";//coloca un nombre generico en la letra 3
}

function comprobarRespuesta(opElegida){// inicia la funcion para comprobar la respuesta
    if(opElegida==correcta[posActual]){//acertó
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";//declara el nombre como correcto
        document.getElementById("l" + opElegida).className = "letra letraAcertada";//declara la letra como correcta
        cantidadAcertadas++;
    }else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";//declara el nombre como incorrecto
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";//declara el nombre como incorrecto
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";//declara cual era la respuesta correcta
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";//declara cual era la letra correcta
    }
    posActual++;//aumenta la posicion actual
    setTimeout(cargarMaravilla,1000);//inicia una cuenta regresiva para moverse a la siguiente opcion
}
function terminarJuego(){//inicia la funcion termina juego
    document.getElementById("pantalla-juego").style.display = "none"; //deshabilita la pantalla de juego
    document.getElementById("pantalla-final").style.display = "block";//habilita la pantalla final
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;//muestra la cantidad de intentos correctos final
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas;//muestra la cantidad de intentos incorrectos
}

function volverAlInicio(){//inicia la funcion de volver al inicio
    document.getElementById("pantalla-final").style.display = "none";//deshabilita la pantalla final
    document.getElementById("pantalla-inicial").style.display = "block";//habilita la pantalla inicial
    document.getElementById("pantalla-juego").style.display = "none";//deshabilita la pantalla de juego
}