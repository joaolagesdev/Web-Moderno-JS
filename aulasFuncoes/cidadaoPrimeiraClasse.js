// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Forma literal
// Retorno é opcional (sem return, retorno undefined)
function funcaoUm () { }

// Armazenar em uma variável
const funcaoDois = function () {}

// Armazenar em um array
const array = [function (a, b) {return a+b}, funcaoUm, funcaoDois]
console.log(array[0](2,3))

// Armazenar em um atributo de objeto
const objeto = { }
objeto.falar = function () { return 'Ei!' }
console.log(objeto.falar())

// Passar função como parâmetro
function executar (funcao) {
    funcao()
}

executar(function () {console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2,3)(5) 
// ou
const cincoMais = soma(2,3)
cincoMais(5)
