// Exemplos básicos de funções #2

// Armazenando uma função em uma variável

const imprimirSoma  = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em um variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

// Retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))
