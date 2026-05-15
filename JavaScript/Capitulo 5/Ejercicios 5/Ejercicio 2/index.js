const semana01 = {lunes: {trabajar: "4hr", estudiar: "4hr"}, martes: {trabajar: "4hr", estudiar: "4hr"}, miercoles: {trabajar: "4hr", estudiar: "4hr"}, jueves: {trabajar: "4hr", estudiar: "4hr"}, viernes: {trabajar: "4hr", estudiar: "4hr"}, sabado: {trabajar: "4hr", estudiar: "4hr"}, domingo: {trabajar: "4hr", aseo: "4hr"}}

const semana02 = {lunes: {trabajar: "4hr", practicas: "4hr"}, martes: {trabajar: "4hr", practicas: "4hr"}, miercoles: {trabajar: "4hr", practicas: "4hr"}, jueves: {trabajar: "4hr", practicas: "4hr"}, viernes: {trabajar: "4hr", practicas: "4hr"}, sabado: {trabajar: "4hr", practicas: "4hr"}, domingo: {trabajar: "4hr", aseo: "4hr"}}

function mostrarActividades(semana, nombreSemana) {
    console.log(nombreSemana);
    console.table(semana);
}

mostrarActividades(semana01, "Semana 1");
mostrarActividades(semana02, "Semana 2");