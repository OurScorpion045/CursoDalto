var primero = true;

function verificarEdad() {
    let edad = prompt("Escribe tu edad");
    let mayorEdad = false;
    if (parseInt(edad) >= 18) {
        mayorEdad = true;
    } else {
        mayorEdad = false;
    }
    return mayorEdad;
}

function permitirEntrada(mayorEdad) {
    if (mayorEdad == true) {
        alert("Puedes pasar");
        entradaGratis();
    } else {
        alert("Eres menor de edad, no puedes pasar!!");
    }
}

function entradaGratis() {
    let horaActual = prompt("Que hora es?");
    if (parseInt(horaActual) >= 2) {
        if (primero == true) {
            alert("Felicidades, eres el primero en entrar despues de las 2AM, tu entrada es gratis");
            primero = false;
        } else {
            alert("Promocion no valida");
        }
    } else {
        alert("Promocion no valida");
    }
}

for (let i = 0; i <= 4; i++) {
    let mayorEdad = verificarEdad()
    permitirEntrada(mayorEdad);
}