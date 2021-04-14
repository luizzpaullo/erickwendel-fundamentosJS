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
console.log(novaPessoa)
