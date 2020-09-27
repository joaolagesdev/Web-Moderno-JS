// Operadores relacionais

console.log('01)', '1' == 1) // comparação de valor, não tipo
console.log('02)', '1' === 1) 
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3) // leva em conta o tipo

console.log('05)', 3 < 1) 
console.log('06)', 3 > 2) 
console.log('07)', 3 <= 2) 
console.log('08)', 3 >= 2) 

const dataUm = new Date(0)
const dataDois = new Date(0)
console.log('09)', dataUm === dataDois)
console.log('10)', dataUm == dataDois)
console.log('11)', dataUm.getTime() == dataDois.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)


