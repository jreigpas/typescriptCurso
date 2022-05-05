class Coche {

  //atributo
  private marca: string;
  private antiguedad: number;


  //constructor
  constructor(marca: string, antiguedad?: number) {
    this.marca = marca;
    this.antiguedad = antiguedad;
  }

  miVariable=5;

  //metodo get
  getMarca(): string {
    return this.marca;
  }

  //metodo
  setMarca(marca: string): void {
    this.marca = marca;
  }
}

let miCoche = new Coche("Alfa Romeo");

console.log('mi coche es de la marca '+ miCoche.getMarca());
