// Arrow Function
const soma = (a, b) => a + b
console.log(soma(3,4))

// Arrow Function (this)
const lexicoUm = () => console.log(this === exports)
const lexicoDois = lexicoUm.bind({})
lexicoUm()
lexicoDois()

// Parâmetro Default
function log(texto = 'Padrão') {
    console.log(texto)
}

log()
log(undefined)
log(null)
log('+ forte')

// Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach( n => total += n )
    return total
}

console.log(total(1, 3, 5, 6))