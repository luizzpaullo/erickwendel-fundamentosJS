const pessoa =
{
    _nome: "",
    get nome() {
        return this._nome
    },
    set nome(n) {
        this._nome = n.toUpperCase()
    },
}

pessoa.nome = "LuizzP Developer"

/**
 * Explicando
 * 
 * Ao passar o nome o metodo SET intercepita pegando o valor e coloca em maiuscula o GET intercepta atribuindo o nome ja com os valore em maiusculo
 */

/**
 * CONVENCAO
 * 
 *  nao acessa um propriedade diretamente quando privada _nome, .nome
 */


