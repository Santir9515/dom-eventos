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
const alumno1 = new Alumnos (1, "Santiago", "Rodriguez", "Masculino", 27, "assets/Alumno1.jpg")
alumnosCoder.push(alumno1)
const alumno2 = new Alumnos (2, "Estefania", "Martinez", "Femenino", 26, "assets/Alumna2.jpg")
alumnosCoder.push(alumno2)
const alumno3 = new Alumnos (3, "Nicolas", "Jaime", "Masculino", 30, "assets/Alumno6.jpg")
alumnosCoder.push(alumno3)
const alumno4 = new Alumnos (4, "Julieta", "Maidana", "Femenino", 25, "assets/Alumna3.jpg")
alumnosCoder.push(alumno4)
const alumno5 = new Alumnos (5, "Vanina", "Franqui", "Femenino", 21, "assets/Alumna4.jpg")
alumnosCoder.push(alumno5)
const alumno6 = new Alumnos (6, "Eugenia", "Leslie", "Femenino", 24, "assets/Alumna5.png")
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
const profesor1 = new Profesores (1, "Gloria", "Martinez", 36, "Desarrollo Web","assets/Profesora1.jpg")
profesoresCoder.push(profesor1)
const profesor2 = new Profesores (2, "Jose", "Rodriguez",31, "Javascript","assets/Profesor2.jpg")
profesoresCoder.push(profesor2)
const profesor3 = new Profesores (3, "Belen", "Escobar", 32, "React Js","assets/Profesora3.jpg")
profesoresCoder.push(profesor3)
const profesor4 = new Profesores (4, "Mateo", "Suarez", 28, "Programacion Backend","assets/Profesor4.jpg")
profesoresCoder.push(profesor4)

function nuevoProfesor(){
    let nombreProfesor = document.getElementById ("nombreProfesor")
    let apellidoProfesor = document.getElementById ("apellidoProfesor")
    let edadProfesor = document.getElementById ("edadProfesor")
    let materiaProfesor = document.getElementById ("materiaProfesor")
    let profesorIngresado = new Profesores (profesoresCoder.length+1,nombreProfesor.value, apellidoProfesor.value, edadProfesor.value, materiaProfesor.value)
    profesoresCoder.push(profesorIngresado);
}

const guardarProfesorBtn = document.getElementById("guardarProfesorBtn")
guardarProfesorBtn.addEventListener("click", nuevoProfesor)
console.log(profesoresCoder);

function nuevoAlumno(){
    let nombreAlumno = document.getElementById("nombreAlumno")
    let apellidoAlumno = document.getElementById("apellidoAlumno")
    let sexoAlumno = document.getElementById("sexoAlumno")
    let edadAlumno = document.getElementById("edadAlumno")
    let alumnoIngresado = new Alumnos (alumnosCoder.length+1,nombreAlumno.value, apellidoAlumno.value, sexoAlumno.value, edadAlumno.value)
    alumnosCoder.push(alumnoIngresado)
}

const guardarAlumnoBtn = document.getElementById("guardarAlumnoBtn")
guardarAlumnoBtn.addEventListener("click", nuevoAlumno)

console.log(alumnosCoder);