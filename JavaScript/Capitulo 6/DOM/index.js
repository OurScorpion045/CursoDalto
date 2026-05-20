const parrafo = document.getElementById("parrafo");

const parrafos = document.getElementsByTagName("p");

let inputCss = document.querySelector(".input");

inputCss.setAttribute("style", "background-color: #2F6");


const titulo = document.querySelector(".titulo");

titulo.setAttribute("style", "color: #f00");
console.log(titulo.getAttribute("style"));