class Animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }

    verInformacion = () => {
        document.write(this.informacion);
    }
}

class Perro extends Animal {
    constructor(especie, edad, color, informacion, raza) {
        super(especie, edad, color, informacion);
        this.raza = raza;
    }
    ladrar() {
        alert("Guau!!");
    }

    set setInformacion(newRaza) {
        this.raza = newRaza
        this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años, soy de color ${this.color} y mi raza es ${this.raza}`;
    }

    get getInformacion() {
        return this.informacion;
    }
}

const perro01 = new Perro("Perro", 5, "Negro", "Pitbull Terrier");
perro01.setInformacion = "Chihuahua";
//perro01.verInformacion();
document.write(perro01.getInformacion);
