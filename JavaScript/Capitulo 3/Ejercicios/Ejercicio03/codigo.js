import { App } from "./App.js";

const app01 = new App("Angry Birds", "5.2M", "4.7 Estrellas", "250Mb");
const app02 = new App("Flappy Bird", "4.7M", "4.8 Estrellas", "125Mb");
const app03 = new App("PUBG Mobile", "6.9M", "4.5 Estrellas", "2.3Gb");
const app04 = new App("LOL Mobile", "8.2M", "4.3 Estrellas", "3.0 Gb");
const app05 = new App("Fnaf 1", "4.0M", "4.6 Estrellas", "235Mb");
const app06 = new App("Fnaf 2", "5.6M", "4.8 Estrellas", "140Mb");
const app07 = new App("Fnaf 3", "4.8M", "3.8 Estrellas", "125Mb");

const game01 = document.querySelector("#game01-card");
const game02 = document.querySelector("#game02-card");
const game03 = document.querySelector("#game03-card");
const game04 = document.querySelector("#game04-card");
const game05 = document.querySelector("#game05-card");
const game06 = document.querySelector("#game06-card");
const game07 = document.querySelector("#game07-card");

const commandCard = document.querySelector("#command-card");

function imprimirApp(game, app) {
    game.innerHTML = `
    <p>Nombre: ${app.getNombre()}</p>
    <p>Numero Descargas: ${app.getNumDescargas()}</p>
    <p>Puntuacion: ${app.getPuntuacion()}</p>
    <p>Peso: ${app.getPeso()}</p>
    `;
}

function seleccionarApp(game, app) {
    game.addEventListener("click", () => {
        commandCard.innerHTML = `
        <p>${app.instalar()}</p>
        <p>${app.abrir()}</p>
        <p>${app.cerrar()}</p>
        <p>${app.desinstalar()}</p>
        `
    })
}



imprimirApp(game01, app01);
imprimirApp(game02, app02);
imprimirApp(game03, app03);
imprimirApp(game04, app04);
imprimirApp(game05, app05);
imprimirApp(game06, app06);
imprimirApp(game07, app07);

seleccionarApp(game01, app01);
seleccionarApp(game02, app02);
seleccionarApp(game03, app03);
seleccionarApp(game04, app04);
seleccionarApp(game05, app05);
seleccionarApp(game06, app06);
seleccionarApp(game07, app07);