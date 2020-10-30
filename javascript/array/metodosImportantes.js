// Mêtodos Importantes

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop()
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// SPLICE

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//  Remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotosUm = pilotos.slice(2) // novo array
console.log(algunsPilotosUm)

const algunsPilotosDois = pilotos.slice(1, 4)
console.log(algunsPilotosDois)