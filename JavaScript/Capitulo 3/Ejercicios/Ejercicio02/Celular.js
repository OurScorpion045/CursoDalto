export class Celular {
    constructor(modelo, color, peso, resolucionPantalla, resolucionCamara, ram) {
        this.modelo = modelo;
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.resolucionCamara = resolucionCamara;
        this.ram = ram;
    }

    getModelo() {
        return this.modelo;
    }

    getColor() {
        return this.color;
    }

    getPeso() {
        return this.peso;
    }

    getResolucionPantalla() {
        return this.resolucionPantalla;
    }

    getResolucionCamara() {
        return this.resolucionCamara;
    }

    getRam() {
        return this.ram;
    }

    encender() {
        return `Encendiendo modelo ${this.modelo}`;
    }

    reiniciar() {
        return `Reiniciando modelo ${this.modelo}`;
    }

    apagar() {
        return `Apagando modelo ${this.modelo}`;
    }

    tomarFoto() {
        return `Tomando Fotografia en modelo ${this.modelo}`;
    }

    grabar() {
        return `Iniciando Grabacion en modelo ${this.modelo}`;
    }
}