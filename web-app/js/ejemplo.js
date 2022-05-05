const c1 = { description: 'esta es la descripcion' };
const c2 = { title: 'Title' };
function updateContext(data, attrToUpdate) {
    return Object.assign(Object.assign({}, data), attrToUpdate);
}
let respuesta = updateContext(c1, { amount: 10 }); // { amount: 10}
console.log('estos son los valores');
console.log(updateContext(c1, { amount: 10 }));
