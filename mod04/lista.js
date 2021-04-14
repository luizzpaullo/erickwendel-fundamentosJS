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


