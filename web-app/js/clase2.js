class Hola {
    constructor(palabra) {
        this.mipalabra = palabra; // Cuando llamemos a la clase estableceremos "mipalabra" con el argumento
    }
    saludar(adjetivo) {
        return "Hola " + this.mipalabra + " " + adjetivo + "."; // Al ejecutar esta función se añadira al texto "mipalabra" y el "adjetivo"
    }
    despedir(adjetivo) {
        return "Adiós " + this.mipalabra + " " + adjetivo + "."; // Hace lo mismo que saludar
    }
    setActive(flag) {
        return !flag;
    }
}
const Saluda = new Hola("Genbeta Dev"); // Generamos el objeto con las funciones.
alert(Saluda.despedir("triste")); // Usamos la funcion con el "Hola"
alert(Saluda.saludar("feliz")); // Usamos la funcion con el "Adiós"
