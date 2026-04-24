export class Calculadora {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    sumar() {
        return this.num1 + this.num2;
    }

    restar() {
        return this.num1 - this.num2;
    }

    multiplicar() {
        return this.num1 * this.num2;
    }

    dividir() {
        if (this.num2 != 0) {
            return this.num1 / this.num2;
        } else {
            return "Error, no es posible dividir un numero entre 0";
        }
    }

    raizCuadrada() {
        return Math.sqrt(this.num1);
    }

    raizCubica() {
        return Math.cbrt(this.num1);
    }

    potencia() {
        return this.num1 ** this.num2;
    }

    getNum1() {
        return this.num1;
    }

    setNum1(num1) {
        this.num1 = num1;
    }

    getNum2() {
        return this.num2;
    }

    setNum2(num2) {
        this.num2 = num2;
    }
}