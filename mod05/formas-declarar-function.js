
function minhaFuncao1(paramentro1) {
    return `funcao 1`
}

const minhaFuncao2 = function(parametro1) {
    return `funcao 2 ${parametro1}`
}

const minhaFuncao3 = (parametro1, parametro2) =>{
    return `funcao 3 ${parametro1}`
}


const minhaFuncao4 = parametro1 => `funcao4 ${parametro1}`

obj1.minhaFuncao('test')

const obj2 = {
    minhaFuncao(parametro) {
        return `funcao aee`
    }
}