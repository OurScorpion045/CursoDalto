export class Materias {
    
    constructor(nombre, profesor, alumnos) {
        this.nombre = nombre;
        this.profesor = profesor;
        this.alumnos = alumnos;
    }

    get getNombre() {
        return this.nombre;
    }

    get getProfesor() {
        return this.profesor;
    }

    get getAlumnos() {
        return this.alumnos;
    }

    set setNombre(newNombre) {
        this.nombre = newProfesor;
    }

    set setProfesor(newProfesor) {
        this.profesor = newProfesor;
    }

    set setAlumnos(newAlumnos) {
        this.alumnos = newAlumnos;
    }
}