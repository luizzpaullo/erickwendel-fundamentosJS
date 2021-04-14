const pessoa = 
{
    _nome: '',
    _idade: 29,
    get nome(){
        return this._nome;
    },

    set nome(valor){
        this._nome = valor.toUpperCase()
    },

    get podeDirigir(){
        return this._idade >=18
    },

    // Chamada de Propriedade Calculada
    set idade(valor) {
        this._idade = valor
    }
}

pessoa.nome = "LuizzP Developer"

console.log(pessoa.nome)
pessoa.idade = 17
console.log(pessoa.podeDirigir)