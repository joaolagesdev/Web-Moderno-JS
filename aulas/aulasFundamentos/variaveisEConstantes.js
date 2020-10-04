// O básico de Var, Let, e Const

/*
 * Dê preferência para criar variáveis usando let (regra geral)
 * Quanto mais constantes, mais fácil para manter o sistema
 */ 

var identificador = 3 // identificador recebe o valor 3
let variavelA = 4 // variavelA recebe o valor 4

var identificador = 30
variavelA = 40

console.log(identificador, variavelA)

identificador = 300
variavelA = 400

console.log(identificador, variavelA)

const variavelB = 5
//c = 50 erro
console.log(variavelB)


