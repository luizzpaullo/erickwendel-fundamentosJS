const saldoConta = 1
if (!saldoConta) {
    console.log("NAO TEM SALDO")
} else {
    console.log(`SALDO EM CONTA R$ ${saldoConta}`)
} 


const boolComString = "ae hackerzao !!"

//forcar valor true ou false
console.log('boolComString', !!boolComString)

//negacao
console.log('negacao', !!boolComString)


//negacao + forcar bool
console.log(
    `forcar + negacao`,
    !(!!boolComString)
)