//  Visão geral: Array no JS é um objeto

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Ana', 'Carlos', 'Afonso')
console.log(aprovados)

aprovados = ['João', 'Pedro', 'José']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo' 
aprovados.push('Claúdia')

console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'ElementoUm', 'ElementoDois') // trocar 2 por 0 e fazer o teste
console.log(aprovados)