import { Celular } from "./Celular.js";

export class CelAltaGama extends Celular {
    constructor(modelo, color, peso, resolucionPantalla, resolucionCamara, ram, resolucionSegundaCam) {
        super(modelo, color, peso, resolucionPantalla, resolucionCamara, ram);
        this.resolucionSegundaCam = resolucionSegundaCam;
    }

    getResolucionSegundaCamara() {
        return this.resolucionSegundaCam;
    }

    grabarCamaraLenta() {
        return `Iniciando grabacion en camara lenta en modelo ${this.modelo}`;
    }

    reconocimientoFacial() {
        return `Iniciando reconocimiento facial en modelo ${this.modelo}`;
    }
}