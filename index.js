let nombre = "progamacion" + " facil ";
let saludo = "les doy la bienvenida a ";
let rev = "por revolucion digital"
let fraseCompleta = saludo + nombre + rev;
console.log(fraseCompleta)

let frase = "javaScript " + " es un lenguaje" + " esencial para crear" + " sitios web poderosos."
console.log(frase)

let numeroString1 = "10";
let numeroString2 = "20";
let numeroString3 = "30";
let concatenaNumeros = numeroString1 + " diez " + numeroString2 + " veinte " + numeroString3 + " treinta";
console.log(concatenaNumeros)

var nom = prompt("cual es tu nombre?");
var edad = prompt("cual es tu edad?");
console.warn(nom + edad);

let sexo = prompt("indique su sexo masculino/femenino")
switch (sexo) {
    case "masculino":
        let años
        años = prompt("indique su edad")
        if (años >= 18) {
            alert("puedes entrar, eres mayor de edad.")
        }
        else {
            alert("no puedes entar, no eres mayor de edad")
        };
    case "femenino":
        let añosf
        añosf = prompt("indique su edad")
        if (añosf >= 20) {
            alert("puedes entrar, eres mayor de edad.")
        }
        else {
            alert("no puedes entar, no eres mayor de edad")
        };
    default:
        alert("escriba el sexo con minusculas")
}
