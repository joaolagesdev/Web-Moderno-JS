// Rest (juntar) - Spread (espalhar)
// Usar rest como parâmetro de função 

// Spread com objeto
const funcionario = {
    nome: 'Maria',
    salario: '12.000'
}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// Spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)

