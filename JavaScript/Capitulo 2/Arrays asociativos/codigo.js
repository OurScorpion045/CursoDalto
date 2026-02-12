let pc = {
    nombre: "MarioPC",
    procesador: "Intel Core i5-9600",
    ram: "16GB",
    almacenamiento: "256GB"
}

frase = `
El nombre de mi pc es: <b>${pc["nombre"]}</b> <br>
El procesador de mi pc es: <b>${pc["procesador"]}</b> <br>
El ram de mi pc es: <b>${pc["ram"]}</b> <br>
El almacenamiento de mi pc es: <b>${pc["almacenamiento"]}</b>
`;

document.write(frase);