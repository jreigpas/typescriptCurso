class Hola {

  // Creamos la clase "hola"
  private mipalabra: string; // Establecemos la variable "mipalabra" que usaremos dentro de la clase

  constructor(palabra: string) {
    this.mipalabra = palabra; // Cuando llamemos a la clase estableceremos "mipalabra" con el argumento
  }

  saludar(adjetivo: string) : string {
    return "Hola " + this.mipalabra + " " + adjetivo + "."; // Al ejecutar esta función se añadira al texto "mipalabra" y el "adjetivo"
  }

  despedir(adjetivo: string) : string {
    return "Adiós " + this.mipalabra + " " + adjetivo + "."; // Hace lo mismo que saludar
  }

  setActive(flag: boolean) : boolean {
    return !flag;
  }

}

const Saluda = new Hola("Genbeta Dev"); // Generamos el objeto con las funciones.
alert(Saluda.despedir("triste")); // Usamos la funcion con el "Hola"
alert(Saluda.saludar("feliz")); // Usamos la funcion con el "Adiós"
