// Herança #06

function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aulaUm = new Aula('Bem-vindo', 123)
const aulaDois = new Aula('Até breve', 456)
console.log(aulaUm, aulaDois)

// Simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aulaTres = novo(Aula, 'Bem-vindo', 123)
const aulaQuatro = novo(Aula, 'Até breve', 456)
console.log(aulaTres, aulaQuatro)