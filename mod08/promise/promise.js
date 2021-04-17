const readline = require('readline');
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


/**
 * callback
 */
// terminal.question('Qual seu nome:\n', nome=>{
//     terminal.question('Qual seu telefone: \n', telefone=>{
//         console.log(
//             `
//              Nome: ${nome},
//              Telefone ${telefone}
//             `
//         )
//         terminal.close()
//     })


// })

/**
 * PROMISE
 * convertendo o callback acima e evoluindo na validacao
 */

function questionAsync (texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, resolve)
    })
}


//Nao eh um boa pratica colocar essas variares vindo de uma funcao dentro do escopo globo como foi feito. chamado de say effetcs
let nome = ""
let telefone = ""
Promise.resolve()
        .then(() =>questionAsync('Qual seu Nome:'))
        .then((respostaNome) =>{
            if(!respostaNome) throw new Error('Campo Vazio : nome')
            nome = respostaNome
        })
        .then(() =>questionAsync('Qual seu Telefone:'))
           .then((respostaTelefone) =>{
            if(!respostaTelefone) throw new Error('Campo Vazio: Telefone')
            telefone = respostaTelefone
        })
        .then(() =>{
            console.log(`Nome: ${nome}, Telefone${telefone}`)
        })
        .catch(error =>{
            console.error('deu erro', error.stack)
        })
        .finally(()=>terminal.close())