class Coche {
    //constructor
    constructor(marca) {
        this.marca = marca;
    }
    //metodo get
    getMarca() {
        return this.marca;
    }
    //metodo
    setMarca(marca) {
        this.marca = marca;
    }
}
let miCoche = new Coche("Alfa Romeo");
console.log('mi coche es de la marca ' + miCoche.getMarca());
