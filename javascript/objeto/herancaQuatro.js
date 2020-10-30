// Herança #04

function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const objUm = new MeuObjeto
const objDois = new MeuObjeto
console.log(objUm.__proto__ === objDois.__proto__)
console.log(MeuObjeto.prototype === objUm.__proto__) 

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}!`)
}

objUm.falar()

objDois.nome = 'Rafael'
objDois.falar()

const objTres = {}
objTres.__proto__ = MeuObjeto.prototype
objTres.nome = 'ObjTres'
objTres.falar()

// Resumo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
