class Heroi {
    atacar(){
        console.log(`atacou!!!`)
    }
    defender(){
        console.log(`defendeuu!!!`)
    }
}

const heroi = new Heroi();
heroi.atacar();
heroi.defender();

// Usando Construtor
class Heroi2 {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    atacar(){
        console.log(`O ${this.nome} atacou!!!`)
    }
}

const heroi2 = new Heroi2(
        `Flash ` , 80
); // instanciando a function

heroi2.atacar();


/**
 * STATIC -> nao faz parte das propriedades da class.
 * Chamado de Function Helper
 * Cria dentro da funcao e morre apos executacao
 */

class Heroi3 {
    static obterAnoNascimento(idade) {
        return 2020 - idade
    }
}

const anoNascimento = Heroi3.obterAnoNascimento(19)
console.log(
    `O ano de Nascimento do heroi ${anoNascimento}`
)