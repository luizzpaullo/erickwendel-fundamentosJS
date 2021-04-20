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
        // forcar a tela a usar o THIS de JogoDaMemoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }


    embaralhar(){
        const copias = this.animaisIniciais
        //duplicar os itens
        .concat(this.animaisIniciais)
        //entrar em cada item e criar um id aleatorio
        .map(item => {
            return Object.assign({}, item, {id: Math.random() / 0.5})
        })

        //ordenar aleatoriamente
        .sort(()=>Math.random()-0.5)

        // atualiza a tela com as imagens
        this.tela.atualizarImagens(copias)
    }

    jogar(){
        this.embaralhar()
    }
}