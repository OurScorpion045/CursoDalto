import { Calculadora } from './Calculadora.js';

const calculadora = new Calculadora();

const visor = document.querySelector("#visor");

const button00 = document.querySelector("#button-0");
const button01 = document.querySelector("#button-1");
const button02 = document.querySelector("#button-2");
const button03 = document.querySelector("#button-3");
const button04 = document.querySelector("#button-4");
const button05 = document.querySelector("#button-5");
const button06 = document.querySelector("#button-6");
const button07 = document.querySelector("#button-7");
const button08 = document.querySelector("#button-8");
const button09 = document.querySelector("#button-9");

const buttonSumar = document.querySelector("#button--sumar");
const buttonRestar = document.querySelector("#button--restar");
const buttonMultiplicar = document.querySelector("#button--multiplicar");
const buttonDividir = document.querySelector("#button--dividir");
const buttonResultado = document.querySelector("#button--resultado");
const buttonRaizCuadrada = document.querySelector("#button--raiz-cuadrada");
const buttonRaizCubica = document.querySelector("#button--raiz-cubica");
const buttonPotencia = document.querySelector("#button--potenciar");

const buttonDel = document.querySelector("#button--del");

button00.addEventListener("click", () => {
    visor.innerHTML += `0`;
});

button01.addEventListener("click", () => {
    visor.innerHTML += `1`;
});

button02.addEventListener("click", () =>{
    visor.innerHTML += `2`;
});

button03.addEventListener("click", () => {
    visor.innerHTML += `3`;
});

button04.addEventListener("click", () => {
    visor.innerHTML += `4`;
});

button05.addEventListener("click", () => {
    visor.innerHTML += `5`;
});

button06.addEventListener("click", () => {
    visor.innerHTML += `6`;
});

button07.addEventListener("click", () => {
    visor.innerHTML += `7`;
});

button08.addEventListener("click", () => {
    visor.innerHTML += `8`;
});

button09.addEventListener("click", () => {
    visor.innerHTML += `9`;
});

buttonSumar.addEventListener("click", () => {
    visor.innerHTML += `+`;
});

buttonRestar.addEventListener("click", () => {
    visor.innerHTML += `-`;
});

buttonMultiplicar.addEventListener("click", () => {
    visor.innerHTML += `x`;
});

buttonDividir.addEventListener("click", () => {
    visor.innerHTML += `/`;
});

buttonRaizCuadrada.addEventListener("click", () => {
    visor.innerHTML += `√`;
});

buttonRaizCubica.addEventListener("click", () => {
    visor.innerHTML += '∛';
});

buttonPotencia.addEventListener("click", () => {
    visor.innerHTML += '^';
})

buttonDel.addEventListener("click", () => {
    let texto = contenido();
    let longitud = texto.length - 1;
    texto = texto.substring(0, longitud);
    visor.innerHTML = texto;

});

buttonResultado.addEventListener("click", () => {
    let texto = contenido();

    if (texto.includes("+")) {
        let indexOp = texto.indexOf("+");
        let num1 = parseInt(texto.substring(0, indexOp));
        let num2 = parseInt(texto.substring(indexOp + 1));
        calculadora.setNum1(num1);
        calculadora.setNum2(num2);
        let resultado = calculadora.sumar();
        visor.innerHTML = resultado;
    } else if (texto.includes("-")) {
        let indexOp = texto.indexOf("-");
        let num1 = parseInt(texto.substring(0, indexOp));
        let num2 = parseInt(texto.substring(indexOp + 1));
        calculadora.setNum1(num1);
        calculadora.setNum2(num2);
        let resultado = calculadora.restar();
        visor.innerHTML = resultado;
    } else if (texto.includes("x")) {
        let indexOp = texto.indexOf("x");
        let num1 = parseInt(texto.substring(0, indexOp));
        let num2 = parseInt(texto.substring(indexOp + 1));
        calculadora.setNum1(num1);
        calculadora.setNum2(num2);
        let resultado = calculadora.multiplicar();
        visor.innerHTML = resultado;
    } else if (texto.includes("/")) {
        let indexOp = texto.indexOf("/");
        let num1 = parseInt(texto.substring(0, indexOp));
        let num2 = parseInt(texto.substring(indexOp + 1));
        calculadora.setNum1(num1);
        calculadora.setNum2(num2);
        let resultado = calculadora.dividir();
        visor.innerHTML = resultado;
    } else if (texto.includes("√")) {
        let indexOp = texto.indexOf("√");
        let num1 = parseInt(texto.substring(0, indexOp));
        calculadora.setNum1(num1);
        let resultado = calculadora.raizCuadrada();
        visor.innerHTML = resultado;
    } else if (texto.includes("∛")) {
        let indexOp = texto.indexOf("∛");
        let num1 = parseInt(texto.substring(0, indexOp));
        calculadora.setNum1(num1);
        let resultado = calculadora.raizCubica();
        visor.innerHTML = resultado;
    } else if (texto.includes("^")) {
        let indexOp = texto.indexOf("^");
        let num1 = parseInt(texto.substring(0, indexOp));
        let num2 = parseInt(texto.substring(indexOp + 1));
        calculadora.setNum1(num1);
        calculadora.setNum2(num2);
        let resultado = calculadora.potencia();
        visor.innerHTML = resultado;
    }
})

function contenido() {
    return document.getElementById("visor").textContent;
}