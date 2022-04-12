console.log('Inicio del Init');
const promesa = new Promise((resolve, reject) => {
    if (true) // coloca false para ejecutar el .catch()
     {
        resolve('Hola World');
    }
    else {
        reject('algo salió mal');
    }
});
promesa.then(res => {
    console.log(`Se imprimió el ${res}`);
})
    .catch(error => console.log('Error en la promesa: ', error));
console.log('Fin del init');
