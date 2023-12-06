let posActual = 0;//Guarda la posicion actual en el ciclo de la tabla lugares
let timer = 8000;//el contador de cada cuanto tiempo se va a cambiar el TR que se muestra
let waiter = 2500;//Es el contador para coordinar la animacion y el cambiado
let interval//es una variable para iniciar el ciclo durante la carga de la pagina

function startSwitch() {
    interval = setInterval(controller, timer)//inicia los ciclos
}

async function controller() {
    animationOut();//aplica la animacion de desvanecimiento 
    const myTimeout = setTimeout(tableSwitch, waiter);//espera cierto tiempo para correr la funcion TableSwitch()

}



function tableSwitch() {

    switch (posActual) {//checa posicion actual para desvanecer las TR no necesarias y muestra la siguiente
        case 0:
            document.getElementById("row1").style.display = "None"; //desaparece este TR
            document.getElementById("row2").style.display = "flex";//muestra este TR
            document.getElementById("row3").style.display = "None";//desaparece este TR
            animationIn();//aplica la animacion de aparocion
            posActual = 1;//declara la nueva posicion
            break;

        case 1:
            document.getElementById("row1").style.display = "None";//desaparece este TR
            document.getElementById("row2").style.display = "None";//desaparece este TR
            document.getElementById("row3").style.display = "flex";//muestra este TR
            animationIn();//aplica la animacion de aparocion
            posActual = 2;//declara la nueva posicion
            break;

        case 2:
            document.getElementById("row1").style.display = "flex";//muestra este TR
            document.getElementById("row2").style.display = "None";//desaparece este TR
            document.getElementById("row3").style.display = "None";//desaparece este TR
            animationIn();//aplica la animacion de aparocion
            posActual = 0;//declara la nueva posicion
            break;
    }
}
function stopSwitch() {
    clearInterval(interval)//detiene los ciclos
    switcher = false;//Hace nada

}

function animationIn() {

    switch (posActual) {//checa la posiciona ctual
        case 0:
            document.getElementById("row2").animate(//agarra el TR con la id row2 y lo anima
                [
                    // keyframes
                    { opacity: 0 },//empieza con una opacidad de 0
                    { opacity: 1, easing: "ease-in" }//termina con una opacidad de 1 con un efecto
                ],
                {
                    // timing options
                    duration: 2000,//duracion de la animacion
                    iterations: 1,//cuantas veces se va a ejecutar
                },
            );
            break;

        case 1:
            document.getElementById("row3").animate(//agarra el TR con la id row3 y lo anima
                [
                    // keyframes
                    { opacity: 0 },//empieza con una opacidad de 0
                    { opacity: 1, easing: "ease-in" }//termina con una opacidad de 1 con un efecto
                ],
                {
                    // timing options
                    duration: 2000,//duracion de la animacion
                    iterations: 1,//cuantas veces se va a ejecutar
                },
            );
            break;

        case 2:
            document.getElementById("row1").animate(//agarra el TR con la id row1 y lo anima
                [
                    // keyframes
                    { opacity: 0 },//empieza con una opacidad de 0
                    { opacity: 1, easing: "ease-in" }//termina con una opacidad de 1 con un efecto
                ],
                {
                    // timing options
                    duration: 2000,//duracion de la animacion
                    iterations: 1,//cuantas veces se va a ejecutar
                },
            );
            break;
    }
}
function animationOut() {
    switch (posActual) {//checa la posicion actual
        case 0:
            document.getElementById("row1").animate(//agarra el TR con la id row1 y lo anima
                [
                    // keyframes
                    { opacity: 1, easing: "ease-out" },//empieza con una opacidad de 1 con un efecto
                    { opacity: 0 }//termina con una opacidad de 0
                ],
                {
                    // timing options
                    duration: waiter + 200,//la duracion es la misma que el tiempo de espera de la funcion tableSwitch con unos microsegundos agregados para evitar desincronizacion
                    iterations: 1,//cuantas veces se va a ejecutar
                },
            );

            break;

        case 1:
            document.getElementById("row2").animate(//agarra el TR con la id row2 y lo anima
                [
                    // keyframes
                    { opacity: 1, easing: "ease-out" },//empieza con una opacidad de 1 con un efecto
                    { opacity: 0 }//termina con una opacidad de 0
                ],
                {
                    // timing options
                    duration: waiter + 200,//la duracion es la misma que el tiempo de espera de la funcion tableSwitch con unos microsegundos agregados para evitar desincronizacion
                    iterations: 1,//cuantas veces se va a ejecutar
                },
            );

            break;

        case 2:
            document.getElementById("row3").animate(//agarra el TR con la id row3 y lo anima
                [
                    // keyframes
                    { opacity: 1, easing: "ease-out" },//empieza con una opacidad de 1 con un efecto
                    { opacity: 0 }//termina con una opacidad de 0
                ],
                {
                    // timing options
                    duration: waiter + 200,//la duracion es la misma que el tiempo de espera de la funcion tableSwitch con unos microsegundos agregados para evitar desincronizacion
                    iterations: 1,//cuantas veces se va a ejecutar
                },
            );
            break;

    }
}

function showRegistro() {//codigo en desuso
    document.getElementById("registro").style.display = "block";
    window.location.hash = '#registro';
}



// agarra el modal
var modal = document.getElementById("myModal");

// agarra el boton que abre el modal
var btn = document.getElementById("myBtn");

// agarra el span que cierra el modal
var span = document.getElementsByClassName("close")[0];

// cuando se preciona el boton ejecuta la funcion
btn.onclick = function() {
  modal.style.display = "block";//muestra el modal
}

// cuando presionan el span en el modal se cierra
span.onclick = function() {
  modal.style.display = "none";
}

// si se presiona fuera del modal se cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



