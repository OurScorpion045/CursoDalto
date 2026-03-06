import { CelAltaGama } from "./CelularAltaGama.js";

const celAltaGama01 = new CelAltaGama("Samsung S26 Ultra", "Negro", "234g", "6.8'", "200MP", "12Gb", "12MP");
const celAltaGama02 = new CelAltaGama("Apple Iphone 17 Pro Max", "Naranja", "233g", "6.9'", "48MP", "12GB", "48MP");

const samsungCard = document.querySelector("#samsung-card");
const iphoneCard = document.querySelector("#iphone-card");
const testCard = document.querySelector("#test-card");
const samsungButton = document.querySelector("#samsung-button");
const iphoneButton = document.querySelector("#iphone-button");

samsungCard.innerHTML = `
<p>Modelo: ${celAltaGama01.getModelo()}</p>
<p>Color: ${celAltaGama01.getColor()}</p>
<p>Peso: ${celAltaGama01.getPeso()}</p>
<p>Resolucion Pantalla: ${celAltaGama01.getResolucionPantalla()}</p>
<p>Resolucion Camara Principal: ${celAltaGama01.getResolucionCamara()}</p>
<p>Ram: ${celAltaGama01.getRam()}</p>
<p>Resolucion Camara Secundaria: ${celAltaGama01.getResolucionSegundaCamara()}</p>
`;

iphoneCard.innerHTML = `
<p>Modelo: ${celAltaGama02.getModelo()}</p>
<p>Color: ${celAltaGama02.getColor()}</p>
<p>Peso: ${celAltaGama02.getPeso()}</p>
<p>Resolucion Pantalla: ${celAltaGama02.getResolucionPantalla()}</p>
<p>Resolucion Camara Principal: ${celAltaGama02.getResolucionCamara()}</p>
<p>Ram: ${celAltaGama02.getRam()}</p>
<p>Resolucion Camara Secundaria: ${celAltaGama02.getResolucionSegundaCamara()}</p>
`;

samsungButton.addEventListener("click", () => {
    testCard.innerHTML = `
    <p>Prueba Encendido: ${celAltaGama01.encender()}</p>
    <p>Prueba Apagado: ${celAltaGama01.apagar()}</p>
    <p>Prueba Reinicio: ${celAltaGama01.reiniciar()}</p>
    <p>Prueba Fotografia: ${celAltaGama01.tomarFoto()}</p>
    <p>Prueba Video: ${celAltaGama01.grabar()}</p>
    <p>Prueba Video en camara lenta: ${celAltaGama01.grabarCamaraLenta()}</p>
    <p>Prueba reconocimiento facial: ${celAltaGama01.reconocimientoFacial()}</p>
    `;
});

iphoneButton.addEventListener("click", () => {
    testCard.innerHTML = `
    <p>Prueba Encendido: ${celAltaGama02.encender()}</p>
    <p>Prueba Apagado: ${celAltaGama02.apagar()}</p>
    <p>Prueba Reinicio: ${celAltaGama02.reiniciar()}</p>
    <p>Prueba Fotografia: ${celAltaGama02.tomarFoto()}</p>
    <p>Prueba Video: ${celAltaGama02.grabar()}</p>
    <p>Prueba Video en camara lenta: ${celAltaGama02.grabarCamaraLenta()}</p>
    <p>Prueba reconocimiento facial: ${celAltaGama02.reconocimientoFacial()}</p>
    `;
});