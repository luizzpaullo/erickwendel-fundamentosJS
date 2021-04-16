let frutaExisteNoMercado = false;
let temCPUSuficiente = true;

/**
 * Obter valores do terminal 
 */

const args = process.argv
const saldo = args[args.length - 1]
if (isNaN(saldo)) { 
    console.log("valor invalido !!!")
    return 
}

let tipoClient = "Premium"
if (saldo < 9) {
    tipoClient = "Basic"
    
}
else if (saldo >= 10 && saldo < 20){
    tipoClient = "Gold"
}
else {
    tipoClient = null
}

// null, undefined, vazio, 0 => False;
if (!tipoClient) {
    tipoClient = "Indefinido"
}

console.log('tipoDoCliente', tipoClient)