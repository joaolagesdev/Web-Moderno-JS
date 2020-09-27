// Operador Destructuring #4 ES2015

function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // o primeiro [] é operador destructuring, o segundo cria um array com os atributos trocados
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
//   console.log(rand())

