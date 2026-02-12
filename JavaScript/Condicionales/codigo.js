nombre = "Mario Hernandez";

if (nombre == "Mario Hernandez") {
    document.write(`Tu nombre es ${nombre}`);
} else if (nombre.includes("Mario")) {
    document.write("Tu nombre es Mario")
}else {
    document.write("Condicional no cumplido");
}