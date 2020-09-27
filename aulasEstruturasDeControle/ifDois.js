// Usando a estrutura if #2

function testeUm(numero) {
    if(numero > 7)
        console.log(numero)
    
        console.log('Final')
}

testeUm(6)
testeUm(8)

function testeDois(numero) {
    // Cuidado com ; na definição das estruturas de controle
    if (numero >7); {
        console.log(numero)
    }
}

testeDois(6)
testeDois(8)