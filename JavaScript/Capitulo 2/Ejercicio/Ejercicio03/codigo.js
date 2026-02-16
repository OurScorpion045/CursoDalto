const sumar = (num1, num2) => {
    return num1 + num2;
}

const restar = (num1, num2) => {
    return num1 - num2;
}

const multiplicar = (num1, num2) => {
    return num1 * num2;
}

const dividir = (num1, num2) => {
    if (num2 == 0) {
        alert("Error, no puedes dividir un numero entre 0");
        dividir(num1, num2);
    } else {
        return num1 / num2;
    }
}

function realizarOperacion() {
    let num1 = prompt("Escribe el primer numero");
    let num2 = prompt("Escribe el segundo numero");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let operador = prompt("Escribe el operador de la operacion (+ = Suma, - = Resta, x = Multiplicacion, / = Division");
    if (operador != "+" && operador != "-" && operador != "x" && operador != "/") {
        alert("Error, escribe un operador correcto");
        realizarOperacion();
    }
    let resultado;
    if (operador == "+") {
        resultado = sumar(num1, num2);
        document.write(`${num1} + ${num2} = ${resultado}`);
    } else if (operador == "-") {
        resultado = restar(num1, num2);
        document.write(`${num1} - ${num2} = ${resultado}`);
    } else if (operador == "x") {
        resultado = multiplicar(num1, num2);
        document.write(`${num1} x ${num2} = ${resultado}`);
    } else if (operador == "/") {
        resultado = dividir(num1, num2);
        document.write(`${num1} / ${num2} = ${resultado}`);
    }
}

realizarOperacion();