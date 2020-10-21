// Foreach #2

Array.prototype.forEachDois = function (callback) {
    for (let i = 0; i< this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = [
    'Agatha',
    'Aldo',
    'Daniel',
    'Eduardo',
    'João',
    'Raquel',
    'Tales'
]

aprovados.forEachDois(function (nome, indice, array) { 
// callback - parâmetros que podem ser passados(elemento, index do elemento, array) 
    console.log(`${indice + 1} ${nome}`)
    console.log(array)
})