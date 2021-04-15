# SET e GET: MÉTODOS ASSESSORES DO OBJECT

## SET

> ATRIBUIR, SETAR, CONFIGURAR, PARAMETRIZAR.

## GET

> OBTER, PEGAR

```jsx
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
 * Ao passar o nome o método SET intercepta pegando o valor e coloca em maiúscula o GET intercepta atribuindo o nome ja com os valore em maiúsculo
 */

/**
 * CONVENÇÃO
 * 
 *  nao acessa um propriedade diretamente quando privada _nome, .nome
 */

```

### CODE

```JSX
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

```


## DATA

```JSX

// Formato GLOBAL recomendado!
console.log(hoje.toISOString())
```

