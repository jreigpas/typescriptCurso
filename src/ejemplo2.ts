interface Persona {
  // Declaramos el formato de los datos que pasan a Saludo(datos)
  Nombre: string; // Como he comentado antes, hacer esto
  Apellido1: string; // sirve para establecer el tipo de
  Apellido2: string; // variable y poder evitar errores
  Edad?: number;
}


function Saludo(datos : Persona) {
  // Establecemos el formato de "datos" con :Persona
  return "Hola, " + datos.Nombre + " " + datos.Apellido1;
}


const user = { Nombre: "Carlos", Apellido1: "Ruiz", Apellido2: "Sánchez"}; // Este es el objeto que pasaremos a la función
alert(Saludo(user)); // Llamamos a Saludo() y pasamos como variable "datos" el objeto "user"
