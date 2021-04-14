# MÓDULOS 04 TIPOS DE DADOS

## Comentários em JS

```jsx
* // Comentário de Uma Linha
```

```jsx
/** Comentário de ...
 *  ...Múltiplas ...
 *  ...linhas
 * **/
```

## NULL

> Valor especial que representa NADA, VAZIO, VALOR DESCONHECIDO.

## UNDEFINED

> Valor Nao atribuído, nao inicializada.

### CONVENÇÃO

> **Nunca Assinamos uma variável como UNDEFINED**

## BOOLEAN TEORIAS DOS CONJUNTOS

> OU E OU; NAO

### RETORNA FALSO

- false
- 0
- [] //vazio
- ""
- ''
- NULL
- undefined
- NAN

```jsx
/**
 * RETORNA COMO FALSE
 */
console.log(`
    
    !!"" || !!"" : ${!!"" || !!""},
    !!0 : ${!!""}, 
    !!false : ${!!false},
    !!undefined : ${!!undefined}, 
    !!null : ${!!null}, 
    !!NaN): ${!!NaN};
    `
```

### RETORNA VERDADEIRO

- TRUE
- 1
- -1
- 0.5
- "0" string zero

### CONVERTER PARA BOOLEAN

```JSX
//negacao + forcar bool
        console.log(
            `forcar + negacao`,
            !(!!boolComString)
        )

```

## LISTAS -> ARRAY ou VETORES

```jsx
/**
 * ARRAY -> LISTAS, VETORES
 */

const minhaLista = []
const minhaListaDeTarefas = [
    'Mandar Email', 
    'Colocar comida para o DOG', 
    'Limpar o Quarto'
]


// console.log(minhaListaDeTarefas[0])
// console.log(minhaListaDeTarefas[1])
// console.log(minhaListaDeTarefas[4])

//Quantidade de Itens no Array
console.log(minhaListaDeTarefas.length)

// Adicionar Item na ultima posicao
minhaListaDeTarefas.push('formatar computador')
console.log(minhaListaDeTarefas)

/**
 * Remover ultimo item da Lista
 * */
const removeUltimaTarefa = minhaListaDeTarefas.pop()
console.log(removeUltimaTarefa)
console.log(minhaListaDeTarefas)


/**
 * Remover Primeira da Lista
 */
const removePrimeiraTarefa = minhaListaDeTarefas.shift()
console.log(removePrimeiraTarefa)
console.log(minhaListaDeTarefas)


/**
 * Remover um item especifico pelo Indice;
 */
minhaListaDeTarefas.splice(2,1) //Encontra o indice e remove apenas 1 registro.
console.log(minhaListaDeTarefas)


const itens = [
    1, 'computador', 0.33
];

/**
 * Verificar tipo do Array - Jeito errado
 */
console.log(typeof(itens))

/**
 * Verificar tipo do Array- Jeito Certo
 */
console.log(Array.isArray(itens))

/**
 * Ordenando Array funcionado com numeros e textos
 * .sort aceita varios parametros
 */

 const numeros = [ 3,2,5,6,0]
 console.log(numeros.sort())

 /**
  * Juntar Dois Array em um Novo
  */

 const novoArrayConcat = itens.concat([7,8,9])
 console.log(novoArrayConcat)

/**
 * Juntar Arrays numa String
 * usei o separador pipe | mas pode ser qualquer um
 */
console.log(itens.join('|'))

/**
 * Verificar Indice do Item
 * Quando nao encontra o indice retorna o -1
 */
const indexArrays = itens.indexOf('computador')
console.log(indexArrays)
console.log(itens[indexArrays])



```

## OBJECTS

> JS TUDO EH OBJECTS PRATICAMENTE

> REFERENCIA

<https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0#:~:text=an%20online%20quiz.-,Javascript%20has%205%20data%20types%20that%20are%20passed%20by%20value,to%20them%20collectively%20as%20Objects.>


### CONVENSAO

> Sempre criar novo Object nunca reassinar

```jsx
const pessoa = 
{
    id: "0011AABBCC",
    nome: "Luizz Dev",
    idade: 35,
    dataNacimento: new Date(1992, 7, 15)
}

// acessando via notacao ponto
pessoa.id

//acessando via notacao cochetes usando o nome da chave
pessoa['nome']

//inserir novo valores
pessoa['funcaoAtual'] = 'Suporte Ao Cliente nivel 8'

// pegas chaves
console.log(Object.keys(pessoa))

// pegar valores para
console.log(Object.values(pessoa))

// Juntar dois objectos para
const outraPessoa = {
    altura: '1.80 Metros'
}

const novaPessoa = Object.assign(pessoa, outraPessoa)
console.log(novaPessoa)

// remove chaves
delete novaPessoa.nome
```
