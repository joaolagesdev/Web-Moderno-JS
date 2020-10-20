// Map #1
// Mapear os elemendos de um array para outro array, do mesmo tamanho, mas com dados transformados

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let resultado = numeros.map(function(elemento) {
    return elemento*2
})

console.log(resultado)
console.log(numeros) // array original não é alterado

const soma10 = elemento => elemento + 10
const triplo = elemento => elemento * 3
const paraDinheiro = elemento `R$ ${parseFLoat(e).toFixed(2).replace('.', ',')}`

resultado = numeros.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)



