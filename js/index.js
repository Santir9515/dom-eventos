class Alumnos {
    constructor(id, nombre, apellido, sexo, edad){
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.sexo = sexo
        this.edad = edad
    }
}

let alumnosCoder = []
const alumno1 = new Alumnos (1, "Santiago", "Rodriguez", "Masculino", 27)
alumnosCoder.push(alumno1)
const alumno2 = new Alumnos (2, "Estefania", "Martinez", "Femenino", 26)
alumnosCoder.push(alumno2)
const alumno3 = new Alumnos (3, "Nicolas", "Jaime", "Masculino", 30)
alumnosCoder.push(alumno3)
const alumno4 = new Alumnos (4, "Julieta", "Maidana", "Femenino", 25)
alumnosCoder.push(alumno4)
const alumno5 = new Alumnos (5, "Vanina", "Franqui", "Femenino", 21)
alumnosCoder.push(alumno5)
const alumno6 = new Alumnos (6, "Eugenia", "Leslie", "Femenino", 24)
alumnosCoder.push(alumno6)


class Profesores {
    constructor (id, nombre, apellido, edad, asignatura){
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.asignatura = asignatura
    }
}

let profesoresCoder = []
const profesor1 = new Profesores (1, "Gloria", "Martinez", 36, "Desarrollo Web")
profesoresCoder.push(profesor1)
const profesor2 = new Profesores (2, "Jose", "Rodriguez",31, "Javascript")
profesoresCoder.push(profesor2)
const profesor3 = new Profesores (3, "Belen", "Escobar", 32, "React Js")
profesoresCoder.push(profesor3)
const profesor4 = new Profesores (4, "Mateo", "Suarez", 28, "Programacion Backend")
profesoresCoder.push(profesor4)

function nuevoProfesor(){
    let nombreProfesor = document.getElementsById ("nombreProfesor")
    let apellidoProfesor = document.getElementsById ("apellidoProfesor")
    let edadProfesor = document.getElementsById ("edadProfesor")
    let materiaProfesor = document.getElementsById ("materiaProfesor")
    let profesorIngresado = new Profesores (profesoresCoder.length+1,nombreProfesor.value, apellidoProfesor.value, edadProfesor.value, materiaProfesor.value, "assets/imagenProfesor.jpg")
    console.log(profesorIngresado);
}

const guardarProfesorBtn = document.getElementsById("guardarProfesorBtn")
guardarProfesorBtn.addEventListener("click", nuevoProfesor)
