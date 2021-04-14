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

