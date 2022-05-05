//funciones anonimas:
const nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach((s) => {
    console.log(s.toUpperCase());
});
//funciones flecha
let sum1 = (x, y) => {
    return x + y;
};
console.log(sum1(10, 20)); //returns 30
let sum2 = (x, y) => (x + y);
console.log(sum2(10, 20)); //returns 30
//operador ternario
let elvisLives = (Math.PI > 4) ? "Si" : "No";
console.log(elvisLives);
if (Math.PI > 4) {
    elvisLives = "Si";
}
else {
    elvisLives = "false";
}
console.log(elvisLives);
//====================
let ejemplo = 5;
if (ejemplo === 4) {
    elvisLives = "Si";
}
else {
    elvisLives = "false";
}
