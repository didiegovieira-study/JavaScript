// promisses

let aceitar = true

console.log('pedir uber')

// condiçao
const promessa = new Promise((resolve, reject) => {

    if (aceitar) {
        return resolve('pedido aceito!')
    }

    return reject('pedido negado');
})

console.log('aguardando')

// filtro
promessa.then(result => console.log(result))
        .catch(erro => console.log(erro))
        .finally(() => console.log('finalizada'))