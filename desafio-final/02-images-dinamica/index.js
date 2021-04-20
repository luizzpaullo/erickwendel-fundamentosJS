function onLoad(){
    // console.log(`Carregou a Tela!!!`, Tela, jogoDaMemoria);

    // const animal = {
    //     //sempre relativo ao index.html
    //     img: './images/cachorro.svg',
    //     nome:'cachorro'
    // }

//     const codigoHtml = Tela.obterCodigoHtml(animal)
//    Tela.alterarConteudoHTML(codigoHtml.concat(codigoHtml))

//teste para ver se estava gerando imagens
        // Tela.atualizarImagens([
        //     animal,
        //     animal,
        //     animal,
        //     animal

        // ])

        const dependencias = {
            tela: Tela //classe Tela e global
        }
        //inicializamos o jogo da memoria
        const jogoDaMemoria = new JogoDaMemoria(dependencias)
        jogoDaMemoria.inicializar()
}

window.onload = onLoad;