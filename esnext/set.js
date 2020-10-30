// Não aceita repetição/não indexada
const times = new Set()
times.add('Atlético')
times.add('Cruzeiro').add('Ámerica')
times.add('Cruzeiro') 

console.log(times)
console.log(times.size)
console.log(times.has('cruzeiro'))
console.log(times.has('Cruzeiro'))
times.delete('Atlético')
console.log(times)

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)