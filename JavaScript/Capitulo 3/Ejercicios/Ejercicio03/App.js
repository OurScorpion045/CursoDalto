export class App {
    constructor(nombre, numDescargas, puntuacion, peso) {
        this.nombre = nombre;
        this.numDescargas = numDescargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
    }

    getNombre() {
        return this.nombre;
    }

    getNumDescargas() {
        return this.numDescargas;
    }

    getPuntuacion() {
        return this.puntuacion;
    }

    getPeso() {
        return this.peso;
    }

    instalar() {
        return `Instalando App ${this.nombre}...`;
    }

    abrir() {
        return `Abriendo App ${this.nombre}...`;
    }

    cerrar() {
        return `Cerrando App ${this.nombre}...`;
    }

    desinstalar() {
        return `Desinstalando App ${this.nombre}...`;
    }
}