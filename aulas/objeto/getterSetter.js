// Getter / Setter
// Técnica de encapsulamento
// Melhor controle, pode aplicar validações, etc.

const sequencia = {
    _valor: 1, // convenção para uma variável que pretende ser usada apenas internamente dentro do objeto
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 800
console.log(sequencia.valor, sequencia.valor)