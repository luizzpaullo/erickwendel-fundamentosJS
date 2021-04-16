const readLine = require('readline')
const terminal = readLine.createInterface({
    //defin o modo de entrada via terminal
    input: process.stdin,
    // todo texto de saida saira no terminal
    output: process.stdout
})

//texto do menu para
const textoMenu = `
    Ola, seja bem vindo ao sistema de media
    Digite 1 
    Digite 2
    Digite 3
    Digite 0
`

console.log('textoMenu', textoMenu)
const opcao = 1
switch (opcao) {
    case 1:
        console.log('Pressionou 1')
        break;
    case 2:
        console.log('Pressionou 2')
        break;
    default:
        console.log('Opcao Invalida')
        break;

}
