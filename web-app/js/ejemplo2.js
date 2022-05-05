function Saludo(datos) {
    // Establecemos el formato de "datos" con :Persona
    return "Hola, " + datos.Nombre + " " + datos.Apellido1;
}
const user = { Nombre: "Carlos", Apellido1: "Ruiz", Apellido2: "Sánchez" }; // Este es el objeto que pasaremos a la función
alert(Saludo(user)); // Llamamos a Saludo() y pasamos como variable "datos" el objeto "user"
