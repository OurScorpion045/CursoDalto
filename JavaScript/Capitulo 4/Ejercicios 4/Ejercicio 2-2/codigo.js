import { Materias } from "./materias.js";

const estudiantes = ["Luis", "Ana", "Carlos", "María", "Jorge", "Fernanda", "Miguel", "Sofía", "Diego", "Valeria", "Andrés", "Camila", "Pedro", "Lucía", "Cofla", "Ricardo", "Daniela", "Fernando", "Elena", "Javier", "Patricia", "Roberto", "Andrea", "Iván", "Natalia", "José", "Paula", "Hugo", "Sara", "Emilio"
];

function listaAleatoria(estudiantes) {
    const newLista = [];
    for (const estudiante of estudiantes) {
        if (Math.random() > 0.5 && newLista.length <= 9) {
            newLista.push(estudiante);
        }
    }
    return newLista;
}

const matematicasAplicadas = new Materias("Matematicas Aplicadas","Dr. Carlos Mendoza", listaAleatoria(estudiantes));
const programacionWeb = new Materias("Programacion Web", "Ing. Laura Sánchez", listaAleatoria(estudiantes));
const basesDeDatos = new Materias("Bases de Datos", "Mtro. Javier Torres", listaAleatoria(estudiantes));
const redesDeComputadoras = new Materias("Redes de Computadoras", "Ing. Ricardo Beltrán", listaAleatoria(estudiantes));
const sistemasOperativos = new Materias("Sistemas Operativos", "Dra. Patricia Gómez", listaAleatoria(estudiantes));
const inteligenciaArtificial = new Materias("Inteligencia Artificial", "Dr. Fernando Castillo", listaAleatoria(estudiantes));
const desarrolloMovil = new Materias("Desarrollo Movil", "Ing. Andrea Ruiz", listaAleatoria(estudiantes));
const seguridadInformatica = new Materias("Seguridad Informatica", "Mtro. Miguel Herrera", listaAleatoria(estudiantes));
const estructuraDeDatos = new Materias("Estructura de Datos", "Ing. Sofía Navarro", listaAleatoria(estudiantes));
const ingenieriaDeSoftware = new Materias("Ingenieria de Software", "Dra. Elena Morales", listaAleatoria(estudiantes));
const algebraLineal = new Materias("Algebra Lineal", "Dr. José Ramírez", listaAleatoria(estudiantes));
const arquitecturaDeComputadoras = new Materias("Arquitectura de Computadoras", "Ing. Daniela Flores", listaAleatoria(estudiantes));

const listaMaterias = [matematicasAplicadas, programacionWeb, basesDeDatos, redesDeComputadoras, sistemasOperativos, inteligenciaArtificial, desarrolloMovil, seguridadInformatica, estructuraDeDatos, ingenieriaDeSoftware, algebraLineal, arquitecturaDeComputadoras];

const formulario = document.getElementById("formulario");
const materia = document.getElementById("nombreMateria");
const docente = document.getElementById("docente");
const listaEstudiantes = document.getElementById("listaAlumnos");


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombreMateria = document.getElementById("nombre").value;
    
    if (nombreMateria == "Matematicas Aplicadas") {
        materia.innerHTML = "Nombre de materia: " + matematicasAplicadas.getNombre;
        docente.innerHTML = "Nombre de docente: " + matematicasAplicadas.getProfesor;
        listaEstudiantes.innerHTML = "Lista de Alumnos: " + matematicasAplicadas.getAlumnos;
    } else if (nombreMateria == "Programacion Web") {
        materia.innerHTML = "Nombre de materia: " + programacionWeb.getNombre;
        docente.innerHTML = "Nombre de docente: " + programacionWeb.getProfesor;
        listaEstudiantes.innerHTML = "Lista de alumnos: " + programacionWeb.getAlumnos;
    } else if (nombreMateria == "Bases de Datos") {
        materia.innerHTML = "Nombre de materia: " + basesDeDatos.getNombre;
        docente.innerHTML = "Nombre de docente: " + basesDeDatos.getProfesor;
        listaEstudiantes.innerHTML = "Lista de estudiantes: " + basesDeDatos.getAlumnos;
    } else if (nombreMateria == "Redes de Computadoras") {
        materia.innerHTML = "Nombre de materia: " + redesDeComputadoras.getNombre;
        docente.innerHTML = "Nombe de docente: " + redesDeComputadoras.getProfesor;
        listaEstudiantes.innerHTML = "Lista de estudiantes: " + redesDeComputadoras.getAlumnos;
    } else if (nombreMateria == "Sistemas Operativos") {
        materia.innerHTML = "Nombre de materia: " + sistemasOperativos.getNombre;
        docente.innerHTML = "Nombre de profesor: " + sistemasOperativos.getProfesor;
        listaEstudiantes.innerHTML = "Lista de estudiantes: " + sistemasOperativos.getAlumnos;
    } else if (nombreMateria == "Inteligencia Artificial") {
        materia.innerHTML = "Nombre de materia: " + inteligenciaArtificial.getNombre;
        docente.innerHTML = "Nombre de docente" + inteligenciaArtificial.getProfesor;
        listaEstudiantes.innerHTML = "Lista de estudiantes: " + inteligenciaArtificial.getAlumnos;
    } else if (nombreMateria == "Desarrollo Movil") {
        materia.innerHTML = "Nombre de materia: " + desarrolloMovil.getNombre;
        docente.innerHTML = "Nombre de docente: " + desarrolloMovil.getProfesor;
        listaEstudiantes.innerHTML = "Lista de estudiantes: " + desarrolloMovil.getAlumnos;
    } else if (nombreMateria == "Seguridad Informatica") {
        materia.innerHTML = "Nombre de materia: " + seguridadInformatica.getNombre;
        docente.innerHTML = "Nombre de docente: " + seguridadInformatica.getProfesor;
        listaEstudiantes.innerHTML = "Lista de estudiantes: " + seguridadInformatica.getAlumnos;
    } else if (nombreMateria == "Estructura de Datos") {
        materia.innerHTML = "Nombre de materia: " + estructuraDeDatos.getNombre;
        docente.innerHTML = "Nombre de docente: " + estructuraDeDatos.getProfesor;
        listaEstudiantes.innerHTML = "Lista de estudiantes: " + estructuraDeDatos.getAlumnos;
    } else if (nombreMateria == "Ingenieria de Software") {
        materia.innerHTML = "Nombre de materia: " + ingenieriaDeSoftware.getNombre;
        docente.innerHTML = "Nombre de docente: " + ingenieriaDeSoftware.getProfesor;
        listaEstudiantes.innerHTML = "Lista de estudiantes: " + ingenieriaDeSoftware.getAlumnos;
    } else if (nombreMateria == "Algebra lineal") {
        materia.innerHTML = "Nombre de materia: " + algebraLineal.getNombre;
        docente.innerHTML = "Nombre de docente: " + algebraLineal.getProfesor;
        listaEstudiantes.innerHTML = "Lista de estudiantes: " + algebraLineal.getAlumnos;
    } else if (nombreMateria == "Arquitectura de Computadoras") {
        materia.innerHTML = "Nombre de materia: " + arquitecturaDeComputadoras.getNombre;
        docente.innerHTML = "Nombre de docente: " + arquitecturaDeComputadoras.getProfesor;
        listaEstudiantes.innerHTML = "Lista de estudiantes: " + arquitecturaDeComputadoras.getAlumnos;
    }
});

function whereIsCofla(listaMaterias) {
    let materiasCofla = [];
    let numMaterias;
    let alumnos = [];
    for (let materia of listaMaterias) {
        alumnos = materia.getAlumnos;
        if (alumnos.includes('Cofla')) {
            materiasCofla.push(materia.getNombre);
        }
    }
    numMaterias = materiasCofla.length;
    return { materiasCofla: materiasCofla, numMaterias: numMaterias };
}

let resultado;

resultado = whereIsCofla(listaMaterias);

const numMateriasCofla = document.getElementById("numMaterias");
const materiasCofla = document.getElementById("materias");

numMateriasCofla.innerHTML = `Cofla se inscribio a ${resultado.numMaterias} materias`;
materiasCofla.innerHTML = `Las materias a las que cofla se inscribio son: ${resultado.materiasCofla}`;