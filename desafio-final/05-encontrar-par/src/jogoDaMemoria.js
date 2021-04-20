class JogoDaMemoria {
    //se mandar um obj = {tela:1, idade: 2, etc: 3}
    //vai ignorar o resto das propriedades e pegar somente a propriedades
    //tela

    constructor({ tela }) { 
        this.tela = tela
        this.animaisIniciais = [
            {img: './images/cachorro.svg', nome: 'cachorro'},
            {img: './images/macaco.svg', nome: 'macaco'},
            {img: './images/rato.svg', nome: 'rato'},
            {img: './images/zebra.svg', nome: 'zebra'}
        ]
        this.iconePadrao = './images/padrao.svg'
        this.animaisEscondidos = []
        this.animaisSelecionados = []
    }

    //para this nao podemos usar static
    inicializar(){
        //pega todas as funcao da classe tela
        //coloca todos os animais na tela
        this.tela.atualizarImagens(this.animaisIniciais)
        // forcar a tela a usar o THIS de JogoDaMemoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
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
    verificarSelecao(id, nome){
        const item = {id, nome}
        //verificar a quant de animais animaisSelecionados
        //para tomar acao de certo ou errado
        const animaisSelecionados = this.animaisSelecionados.length
        switch (animaisSelecionados) {
            case 0:
                //adiciona a escolha na lista 
                //espera o proximo item selecionado
                this.animaisSelecionados.push(item)
                break;
        
            case 1:
                //se a Quantidade de escolhidos for 1
                // usuario pode escolher mais um
                // vamos obter o primeiro item da lista se
                const [ opcao1 ] = this.animaisSelecionados
                //zerar itens para nao selecionar mais de dois
                this.animaisSelecionados = []
                //conferir nomes e id
                if (opcao1.nome === item.nome && opcao1.id !==item.id) {
                    alert("combinacao correta : " + item.nome)
                    // para a execcucao de
                    return;
                }
                alert('combinacao incorreta, tente novamente')
                //fim do case switch
                break;
        }
    }

    jogar(){
        this.embaralhar()
    }
}