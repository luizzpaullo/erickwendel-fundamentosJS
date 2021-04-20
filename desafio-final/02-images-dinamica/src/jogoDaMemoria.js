class JogoDaMemoria {
    //se mandar um obj = {tela:1, idade: 2, etc: 3}
    //vai ignorar o resto das propriedades e pegar somente a propriedades
    //tela

    constructor({ tela }) { 
        this.tela = tela
        this.animaisIniciais = [
            {img: './images/cachorro.svg', name: 'cachorro'},
            {img: './images/macaco.svg', name: 'macaco'},
            {img: './images/rato.svg', name: 'rato'},
            {img: './images/zebra.svg', name: 'zebra'}
        ]
    }

    //para this nao podemos usar static
    inicializar(){
        this.tela.atualizarImagens(this.animaisIniciais)
    }
}