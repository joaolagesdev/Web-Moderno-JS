// JSON VS Objeto

/* JSON: formato textual de dados
 * Permite comunicar sistemas que são feitos com tecnologias diferentes
 */
const objeto = {
    a: 1,
    b: 2,
    c: 3,
    soma() { return a + b + c }
}

console.log(JSON.stringify(objeto)) // função excluída, formato de dados textuais, e não algo que é executável
console.log(JSON.parse('{"a":1, "b":2, "c":3}'))

console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": []}'))
