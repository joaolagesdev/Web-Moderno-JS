// Operadores ternário

/* primeira parte: expressão, retorna true ou false
 * caso true, retorna 'Aprovado'
 * caso false, retorna 'Reprovado'
 */
const resultado = nota => nota >=7 ?  'Aprovado' : 'Reprovado'
console.log(resultado(7.1))
console.log(resultado(6.5))

