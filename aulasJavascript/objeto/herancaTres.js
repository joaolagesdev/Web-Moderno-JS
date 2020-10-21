// Herança #03

const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filhaUm = Object.create(pai)
filhaUm.nome = 'Ana'
console.log(filhaUm.corCabelo)

const filhaDois = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable:true}
})

console.log(filhaDois.nome)
filhaDois.nome = 'Carla' // não altera, writable: false
console.log(`${filhaDois.nome} tem cabelo ${filhaDois.corCabelo}.`)

console.log(Object.keys(filhaUm)) // não lista os atributos por herança
console.log(Object.keys(filhaDois))

for(let key in filhaDois) {
    filhaDois.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`) // nome pertence ao próprio objeto, e cor do cabelo veio por herança
}
