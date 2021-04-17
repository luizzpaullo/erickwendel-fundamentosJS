# ASSINCRONISMO

## SINCRONISMO
> Como uma fila, resolve um depois de resolver o outro.

## ASSINCRONISMO
> Igual os pedidos do MacDonalds, eh feito varias requisicoes e cada pedido recebe um 'senha' assim que os lanches vao ficando pronto eh feito a CHAMADA DE VOLTA (CALLBACKS), conforme a senha vai anunciando.

```jsx
    const callback = function (error, result){
        if(error) return console.error(error)
        return console.log(result)
    }

    fs.readFile("arquivo.txt", callback)
```

### exemplos

```jsx
const fs = require('fs');
fs.readFile('./arq1.txt', (error,resposta) =>{
    if (error) {
        console.error('Deu Ruim', error.stack)
        return;
    }
    console.log('resposta', resposta.toString()) // toString converte saida em binario para arquivo de texto
})
```

## NAO USE CALLBACK NUNCA

### PROMISE

```jsx
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
```

## Tarefas

### Qual é a responsabilidade da função Promise.resolve? *

-[✔] Retornar uma Promise, apenas para facilitar o encadeamento de pipelines (.then.then.then) onde não se depende da primeira chamada.

### Para que servem as Promises? *

-[✔] Para facilitar o trabalho em chamadas assíncronas possuindo funções específicas para manipular sucesso (.then), erro (.catch) e conclusão do processo (.finally)

### É possível afirmar que as funções .then, .catch e .finally também retornam novas Promises? *

-[✔] Sim

### Qual é a função dos parâmetros resolve e reject de uma Promise? *

-[✔] resolve é uma função que é chamada para devolver valores com sucesso e reject para devolver valores que deram erro.

## ASYNC E AWAIT

> quais são as ressalvas de usar async/await ?
> A principal delas é quando voce precisa executar funcoes assincronas que nao dependem uma da outra algo como

```jsx
await BuscarUsuario()
await BuscarTelefones()

//Se voce nao precisa esperar um pelo outro voce pode fazer algo como

const [usuarios, telefones] = await Promise.all([BuscarUsuario, BuscarTelefones]) 

//assim ele busca em "paralello" e quando os dois terminarem eles vao popular as variaveis usuarios e telefones

```