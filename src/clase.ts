class Coche {

  //atributo
  private marca: string;

  //constructor
  constructor(marca: string) {
    this.marca = marca;
  }

  //metodo get
  getMarca(): string {
    return this.marca;
  }

  //metodo
  setMarca(marca: string): void {
    this.marca = marca;
  }
}
