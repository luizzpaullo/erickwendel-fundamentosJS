function queDiaEHoje() {
    const data = new Date()
    console.log(`Hoje eh dia ${data.getDate()}`)
}
queDiaEHoje()


/**
 * Function podem retornar valores
 */


function soma(valor1, valor2){
    return valor1 + valor2
}

const idade = 20
const tamanho = 10
const resultado =  soma(idade, tamanho)
console.log(`resultado`, resultado)