// Interface​

interface Student {
  name: string;
  age: number;
}

// Declaración Válida​
const juan: Student = {
  name: "Mascota",
  age: 2,
};

console.log('nombre de Juan:'+juan.name);
