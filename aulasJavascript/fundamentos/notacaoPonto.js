// Notação ponto
// Acessar atributos, funções, ...

console.log(typeof console)
console.log(Math.ceil(6.1))

const objetoUm = {}
objetoUm.nome = 'Bola'
// pode criar assim também objetoUm['nome] = 'Bola'

console.log(objetoUm.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const objetoDois = new Obj('Cadeira')
const objetoTres = new Obj('Mesa')

console.log(objetoDois.nome)
console.log(objetoTres.nome)
objetoTres.exec()
