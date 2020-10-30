// Herança #05

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 4].first())

String.prototype.toString = function() { // cuidado ao trabalhar com funções já presentes, não faça isso
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse()) 