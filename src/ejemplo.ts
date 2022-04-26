type Data = {
    title: string;
    description: string;
    amount: number;
}

type Context = Partial <Data>;

const c1: Context = { description: 'esta es la descripcion'};
const c2: Context = { title: 'Title' };

function updateContext(data: Context, attrToUpdate: Context) {
    return {...data, ...attrToUpdate}
}

let respuesta = updateContext(c1, { amount: 10 }) // { amount: 10}

console.log('estos son los valores');
console.log(updateContext(c1, { amount: 10 }));
