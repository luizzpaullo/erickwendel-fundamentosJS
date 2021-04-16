const textoPar = "Par"
const textoImpar = "Impar"

for (let index = 0; index <= 10; index++) {
    const decisao = index % 2 === 0 ? textoPar :textoImpar
    console.log(`Numero: ${index} ->${decisao}`)
}

const