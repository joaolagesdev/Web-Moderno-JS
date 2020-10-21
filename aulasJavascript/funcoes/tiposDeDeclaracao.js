// Tipos de Declaração

// O interpretador do JS carrega a function declaration previamente
// VOcê pode chamar a função antes da sua declaração no código
console.log(soma(3, 4))
// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const subtracao = function (x,y) {
    return x - y
}
// Com function expression você só pode chamar a função após a sua declaração
console.log(subtracao(3,4))

// named function expression (pouco usada)
// Com named function expression você só pode chamar a função após a sua declaração
const multiplicacao = function multiplicacao(x,y) {
    return x * y
}
console.log(multiplicacao(3, 4))