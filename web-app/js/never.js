function fn(a) {
    if (typeof a === "string") {
        return true;
    }
    else if (typeof a === "number") {
        return false;
    }
    // make the function valid
    return neverOccur();
}
let neverOccur = () => {
    throw new Error("Never!");
};
console.log("ejemplo de never");
console.log("----------------");
let respuestas1 = fn(4);
console.log("es un numero");
let respuestas2 = fn("");
console.log("es una cadena");
let respuestas3 = fn(undefined);
console.log("es un nulo");
