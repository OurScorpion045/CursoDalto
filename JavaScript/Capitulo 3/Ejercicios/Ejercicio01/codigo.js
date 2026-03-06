import { Celular } from './Celular.js';

const celular01 = new Celular("Samsung A14s", "Negro", "1.2Kg", "2400x1080p", "40mp", "6Gb");
const celular02 = new Celular("Xaomi M14", "Azul", "1.0 Kg", "3200x1440p", "45mp", "8Gb");
const celular03 = new Celular("Apple Iphone13", "Rojo", "1.4Kg", "3088x1440p", "50mp", "10Gb");

const card01 = document.querySelector("#specs-card01");
const card02 = document.querySelector("#specs-card02");
const card03 = document.querySelector("#specs-card03");

const button01 = document.querySelector("#celular01");
const button02 = document.querySelector("#celular02");
const button03 = document.querySelector("#celular03");
const testCard = document.querySelector("#test-card");

let celulares = [celular01, celular02, celular03];
let cards = [card01, card02, card03];
let cont = 0;

for (let celular of celulares) {
    cards[cont].innerHTML = `
    <p>Modelo: ${celular.getModelo()}</p>
    <p>Color: ${celular.getColor()}</p>
    <p>Peso: ${celular.getPeso()}</p>
    <p>Resolucion Pantalla: ${celular.getResolucionPantalla()}</p>
    <p>Resolucion Camara: ${celular.getResolucionCamara()}</p>
    <p>RAM: ${celular.getRam()}</p>
    `;
    cont++;
}

button01.addEventListener("click", () => {
    testCard.innerHTML = `
    <p>Prueba Encendido: ${celular01.encender()}</p>
    <p>Prueba Apagado: ${celular01.apagar()}</p>
    <p>Prueba Reinicio: ${celular01.reiniciar()}</p>
    <p>Prueba Fotografia: ${celular01.tomarFoto()}</p>
    <p>Prueba Video: ${celular01.grabar()}</p>
    `;
});

button02.addEventListener("click", () => {
    testCard.innerHTML = `
    <p>Prueba Encendido: ${celular02.encender()}</p>
    <p>Prueba Apagado: ${celular02.apagar()}</p>
    <p>Prueba Reinicio: ${celular02.reiniciar()}</p>
    <p>Prueba Fotografia: ${celular02.tomarFoto()}</p>
    <p>Prueba Video: ${celular02.grabar()}</p>
    `;
});

button03.addEventListener("click", () => {
    testCard.innerHTML = `
    <p>Prueba Encendido: ${celular03.encender()}</p>
    <p>Prueba Apagado: ${celular03.apagar()}</p>
    <p>Prueba Reinicio: ${celular03.reiniciar()}</p>
    <p>Prueba Fotografia: ${celular03.tomarFoto()}</p>
    <p>Prueba Video: ${celular03.grabar()}</p>
    `;
});