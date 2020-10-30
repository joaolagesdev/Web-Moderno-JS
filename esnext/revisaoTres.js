// ES8 Object.Values - Object.entries
const obj = {
    a: 1,
    b: 2,
    c: 3
}

console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notaçõ literal
const nome = 'Carla'

const pessoa = {
    nome, // não precisa escrever nome:nome
    ola() {
        return 'Olá!'
    }
}

console.log(pessoa.nome, pessoa.ola())

class Animal {}
class Cachorro extends Animal {
    latir () {
        return 'Au Au!'
    }
}

console.log(new Cachorro().latir())