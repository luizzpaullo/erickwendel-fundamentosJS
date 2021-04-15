// Meses comecam do Zero
// para o JS datas sao numeros (milisegundos)
const dataAliatoria = new Date(1992, 0,10)
console.log(dataAliatoria)

const primeiraDataJS = new Date(0)
console.log(primeiraDataJS)
console.log(primeiraDataJS.getTime())


const hoje = new Date()
console.log(hoje.toISOString())
console.log(hoje.toString())
console.log(hoje.toLocaleString())

// Formato GLOBAL recomendado!
console.log(hoje.toISOString())

const dia = hoje.getDate()
hoje.setDate(dia + 5)
hoje.setHours(10, 20, 0)
console.log(hoje)


console.log(
    `
    Dia: ${hoje.getDate()}
    Mes: ${hoje.getMonth()}
    Ano: ${hoje.getFullYear()}
    Hora: ${hoje.getHours()}
    Minute: ${hoje.getMinutes()}
    Seconds: ${hoje.getSeconds()}
    
    `
)

// comparar data com operadores'
console.log(
    new Date(2020,1,20) > new Date(2000,1,1))
