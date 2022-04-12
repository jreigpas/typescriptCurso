interface peliculaInterface {
  tiempoDuracion: number;
  origen: string;
  mostrarReparto(): void;
}

class ElSextoSentido implements peliculaInterface {
  tiempoDuracion = 107;
  origen = "Estados Unidos";
  mostrarReparto() {
    console.log("Bruce Willis");
    console.log("Haley Joel");
  }
}

let laPelicula = new ElSextoSentido();

laPelicula.mostrarReparto();