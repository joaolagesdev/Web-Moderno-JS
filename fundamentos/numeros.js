// Tipo Number

const pesoUm = 1.0
const pesoDois = Number('2.0')

console.log(pesoUm, pesoDois)
console.log(Number.isInteger(pesoUm))
console.log(Number.isInteger(pesoDois))

const avaliacaoUm = 9.871
const avaliacaoDois = 6.871

const total = avaliacaoUm * pesoUm + avaliacaoDois * pesoDois
const media = total / (pesoUm + pesoDois)

console.log(media.toFixed(2))
console.log(media.toString())
console.log(media.toString(2))// valor binário
console.log(typeof media)
console.log(typeof Number)
