function isBigEnough(element, index, array) {
    return element >= 10;
}
let passed = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log("Test Value : " + passed);
