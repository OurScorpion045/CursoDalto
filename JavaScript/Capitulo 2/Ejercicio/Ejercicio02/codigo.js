let listaAlumnos = [
  "alejandro",
  "sebastián",
  "mateo",
  "daniel",
  "leonardo",
  "gabriel",
  "emiliano",
  "santiago",
  "nicolás",
  "adrián",
  "iván",
  "mauricio",
  "rodrigo",
  "andrés",
  "joaquín",
  "esteban",
  "bruno",
  "diego",
  "cofla"
];
let listaAsistencia = {
  "alejandro": 0,
  "sebastián": 0,
  "mateo": 0,
  "daniel": 0,
  "leonardo": 0,
  "gabriel": 0,
  "emiliano": 0,
  "santiago": 0,
  "nicolás": 0,
  "adrián": 0,
  "iván": 0,
  "mauricio": 0,
  "rodrigo": 0,
  "andrés": 0,
  "joaquín": 0,
  "esteban": 0,
  "bruno": 0,
  "diego": 0,
  "cofla": 0
}

function paseLista(listaAlumnos, listaAsistencia, dia) {
    for (alumno of listaAlumnos) {
        let asistencia = prompt(`Dia ${dia}, Asistencia alumno ${(alumno).toUpperCase()} (P = Presente, A = ausente)`);
        asistencia = asistencia.toLowerCase();
        if (asistencia != "p" && asistencia != "a") {
            alert("Error al marcar asistencia");
        }
        else if (asistencia.toLowerCase() == "p") {
            listaAsistencia[alumno] += 1;
        }
    }
}

function finalSemestre(listaAlumnos, listaAsistencia) {
    for (alumno of listaAlumnos) {
        let asistencias = listaAsistencia[alumno];
        let faltas = 30 - asistencias;
        alert(`Alumno: ${alumno}, asistencias: ${asistencias}, faltas: ${faltas}`);
        let porcentajeAsistencia = Math.round(asistencias * 100) / 30;
        if (porcentajeAsistencia < 90) {
            alert(`Alumno ${alumno} reprobado`);
        } 
    }
}

for (let i = 1; i <= 30; i++) {
    paseLista(listaAlumnos, listaAsistencia, i);
}

finalSemestre(listaAlumnos, listaAsistencia);
