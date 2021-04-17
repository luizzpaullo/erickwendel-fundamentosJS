const fs = require('fs');
// fs.readFile('./arq1.txt', (error,resposta) =>{
//     if (error) {
//         console.error('Deu Ruim', error.stack)
//         return;
//     }
//     console.log('resposta', resposta.toString()) // toString converte saida em binario para arquivo de texto
// })

fs.readFile('./arq1.txt', (errorArq1, respostaArq1) => {
    //verificando se tem erro 
    if (errorArq1) {
        console.error('Deu ruim o arq1 para a aplicacao', errorArq1)
        return; // para aplicacao
    }
    // se nao deu erro o arq1 chama o arq2
    fs.readFile('./arq2.txt', (errorArq2, respostaArq2) => {
        //verificando se tem erro
        if (errorArq2) {
            console.error('Deu ruim o arq2 para a aplicacao', errorArq2)
            return;
        }

        // pode ler o arquivo 3 agora
        fs.readFile('./arq3.txt', (errorArq3, respostaArq3)=> {
            //verificando se tem erro
            if (errorArq3) {
            console.error('Deu ruim o arquivo 3 agora', errorArq3)
            return;
            }

            const conteudo = `${respostaArq1}\n
                              ${respostaArq2}\n
                              ${respostaArq3}\n  
                                
            `
            fs.writeFile('./final.txt', conteudo,(errorWrite, respostaWrite)=> {
                if (errorWrite) {
                    console.error('Deu ruim na gravacao', errorWrite)
                    return;
                }

                console.log('Arquivo salvo com sucesso!!!')
            })
        })
    })
})