const input = prompt("Escribe tu presupuesto: ");
let presupuesto = parseFloat(input);
let cambio = 0;

if (presupuesto < 0.6) {
    document.write("No hay presupuesto para ningun helado :(");
    cambio = presupuesto;
} else if (presupuesto >= 0.6 && presupuesto < 1.0) {
    document.write("Palito de helado de agua: $0.6 USD");
    cambio = presupuesto - 0.6;
} else if (presupuesto >= 1.0 && presupuesto < 1.6) {
    document.write("Palito de helado de crema: $1 USD");
    cambio = presupuesto - 1.0;
} else if (presupuesto >= 1.6 && presupuesto < 1.7) {
    document.write("Bombon helado marca heladix: $1.6 USD");
    cambio = presupuesto - 1.6;
} else if (presupuesto >= 1.7 && presupuesto < 1.8) {
    document.write("Bombon helado marca heladovich: $1.7 USD");
    cambio = presupuesto - 1.7;
} else if (presupuesto >= 1.8 && presupuesto < 2.9) {
    document.write("Bombon helado marca helardo: $1.8 USD");
    cambio = presupuesto - 1.8;
} else {
    document.write("Potecito de helado con confites: $2.9 USD -- Pote de 1/4 Kg");
    cambio = presupuesto - 2.9;
}
document.write(`<br>Cambio ${cambio}`);
