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
        this.iconePadrao = './images/padrao.svg'
        this.animaisEscondidos = []
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

        setTimeout(()=>{
            this.esconderAnimais(copias)
        }, 1000);
    }
    esconderAnimais(animais){
        //vamos trocar a imagem de todos os herois existentes
        //pelo icone iconePadrao
        //como fizemos no construtir vamos extrair somente o necessario
        // usando a sintaze ({ chave:1}) estamos falnando que vamos retornar 
        // o que tiver dentro dos Parenteses
        //quando nao usamos : (exemplo do id), o JS entende que o nome 
        // e o mesmo do valor EX: id: id, vira id,
        const animaisEscondidos = animais.map(( { nome, id }) => ({
            id,
            nome,
            img: this.iconePadrao
        }))
        //atualizar tela com animais escondidos para
        this.tela.atualizarImagens(animaisEscondidos)
        //guardamos os animais escondidos para verificar se acertou o par 
        this.animaisEscondidos = animaisEscondidos
    }

    jogar(){
        this.embaralhar()
    }
}