// Interface​

interface Student {
  name: string;
  age?: number | undefined;

}

// Declaración Válida​
const juan: Student = {
  name: "Mascota",
  //age: 2,
};

// Declaración Válida​
const pepe: Student = {
  name: "Juan",
  age: 2,
};

console.log('nombre de Juan:'+juan.name);
