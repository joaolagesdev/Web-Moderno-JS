// Exemplos básicos de funções #1

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2) // segundo valor undefined
imprimirSoma(1, 2, 3, 4, 5) // ignora os três últimos valores
imprimirSoma()

// Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())