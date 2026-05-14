let materias = {
    fisica: [90, 6, 75],
    matematicas: [90, 7, 75],
    logica: [90, 7, 75],
    quimica: [90, 7, 75],
    calculo: [90, 7, 74],
    programacion: [90, 7, 75],
    biologia: [90, 7, 75],
    bdd: [90, 7, 75],
    algebra: [90, 7, 75]
}

let statusMaterias = {};

function calificar(materias) {
    let statusMaterias = {};
    let listaMateria;
    for (let materia in materias) {
        listaMateria = materias[materia];
        if (listaMateria[0] < 90 || listaMateria[1] < 7 || listaMateria[2] < 75) {
            statusMaterias[materia] = "Reprobado";
        } else {
            statusMaterias[materia] = "Aprobado";
        }
    }
    return statusMaterias;
}

function mostrarCalificaciones(statusMaterias) {
    console.table(statusMaterias);
}

statusMaterias = calificar(materias);
mostrarCalificaciones(statusMaterias);
