/*uso de let y const
  let es para asignar la variable
  const es para asignar una constante */
let valor = 4; //correcto
let valor2 = 5; // correcto
valor = "pepe"; //es correcto
let valor5 = 5;
const otroValor = 6;
//otroValor = 7; //incorrecto porque es constante . -> Cannot assign to 'otroValor' because it is a constant
// Dato de tipo string
let nombre = "Juan";
nombre = "Otro nombre"; // Es correcto
//nombre = 2 // Es incorrecto -> Type 'number' is not assignable to type 'string'
// Dato de tipo number
let edad = 29;
edad = 0xf00d; // Es hexadecimal y es correcto
//edad = '3'; // Es un string e incorrecto -> Type 'string' is not assignable to type 'number'
// Dato de tipo boolean
let haveItems = true;
haveItems = false; // Es correcto
//haveItems = 3 // Es incorrecto -> Type 'number' is not assignable to type 'boolean'
// Ejemplo
//const test = edad + haveItems; // No se puede sumar number + boolean -> Operator '+' cannot be applied to types 'number' and 'boolean'
//Arrays
let dias = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
console.log('hoy es ' + dias[2]);
//Varios tipos de datos en una variable
let miElemento = 'ejemplo';
miElemento = 6; // correcto, puede ser string o numerico
//variable any
let variableCualquiera = 'primer valor';
variableCualquiera = 6; //correcto, puede ser de cualquier tipo
//Variable tupla -> array con numero y tipo de datos determinado
let employee;
employee = [[1, "Juan"], [2, "Ana"], [3, "David"]];
console.log('el segundo nombre es ' + employee[1][1]);
