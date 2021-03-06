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

### Qual ?? a responsabilidade da fun????o Promise.resolve? *

-[???] Retornar uma Promise, apenas para facilitar o encadeamento de pipelines (.then.then.then) onde n??o se depende da primeira chamada.

### Para que servem as Promises? *

-[???] Para facilitar o trabalho em chamadas ass??ncronas possuindo fun????es espec??ficas para manipular sucesso (.then), erro (.catch) e conclus??o do processo (.finally)

### ?? poss??vel afirmar que as fun????es .then, .catch e .finally tamb??m retornam novas Promises? *

-[???] Sim

### Qual ?? a fun????o dos par??metros resolve e reject de uma Promise? *

-[???] resolve ?? uma fun????o que ?? chamada para devolver valores com sucesso e reject para devolver valores que deram erro.

## ASYNC E AWAIT

> quais s??o as ressalvas de usar async/await ?
> A principal delas ?? quando voce precisa executar funcoes assincronas que nao dependem uma da outra algo como

```jsx
await BuscarUsuario()
await BuscarTelefones()

//Se voce nao precisa esperar um pelo outro voce pode fazer algo como

const [usuarios, telefones] = await Promise.all([BuscarUsuario, BuscarTelefones]) 

//assim ele busca em "paralello" e quando os dois terminarem eles vao popular as variaveis usuarios e telefones

```