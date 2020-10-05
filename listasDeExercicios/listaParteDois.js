// Lista de exercícios: Fundamentos, estruturas de controle e funções

// Exercício 11
console.log('Exercício 11')

function calcularSeAnoEbissexto(ano) {
    if (ano <= 0) {
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(calcularSeAnoEbissexto(0))
console.log(calcularSeAnoEbissexto(4))
console.log(calcularSeAnoEbissexto(100))
console.log(calcularSeAnoEbissexto(400))
console.log(calcularSeAnoEbissexto(800))
console.log(calcularSeAnoEbissexto(2020))
console.log(calcularSeAnoEbissexto(2021))

// Exercício 12
console.log('\nExercício 12')

function fatorial(numero) {
    if (numero == 0) {
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}


console.log(fatorial(1))
console.log(fatorial(3))
console.log(fatorial(5))

// Exercício 13
console.log('\nExercício 13')

function diaDaSemana(dia) {
    switch (dia) {
        case 1:
        case 7:
            console.log('Final de Semana')
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log('Dia útil')
            break
        default:
            console.log('Dia Inválido')
    }
}

diaDaSemana(1)
diaDaSemana(2)
diaDaSemana(3)
diaDaSemana(4)
diaDaSemana(5)
diaDaSemana(6)
diaDaSemana(7)
diaDaSemana(0)
diaDaSemana(8)

// Exercício 14
console.log('\nExercício 14')

function venderFruta(fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos essa fruta!')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis!')
            break
        case 'melancia':
            console.log('Quantos quilos você vai querer? São 3 reais o quilo!')
            break
        default:
            console.log('Erro: fruta inválida')
    }
}

venderFruta('maçã')
venderFruta('kiwi')
venderFruta('melancia')
venderFruta('abacaxi')

// Exercício 15
console.log('\nExercício 15')

function venderCarro(modelo) {
    switch (modelo) {
        case 'hatch':
            console.log('Compra efetuada com sucesso:')
            break
        case 'sedans': case 'motocicletas': case 'caminhonetes':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com esse modelo de automóvel aqui')
    }
}

venderCarro('hatch')
venderCarro('sedans')
venderCarro('motocicletas')
venderCarro('caminhonetes')
venderCarro('carreta')

// Exercício 16
console.log('\nExercício 16')

function calculadora(operadorUm, operacao, operadorDois) {
    switch (operacao) {
        case '+':
            console.log(operadorUm + operadorDois)
            break
        case '-':
            console.log(operadorUm - operadorDois)
            break
        case '*':
            console.log(operadorUm * operadorDois)
            break
        case '/':
            console.log(operadorUm / operadorDois)
            break
        default:
            console.log('Operação inválida!')
    }
}

calculadora(5, '+', 8)
calculadora(5, '-', 8)
calculadora(5, '*', 8)
calculadora(5, '/', 8)
calculadora(5, '&', 8)

// Exercício 17
console.log('\nExercício 17')

function aumentoSalarial(planoDeTrabalho, salario) {
    switch (planoDeTrabalho) {
        case 'A':
            console.log('Novo Salário: ' + salario * 1.1)
            break
        case 'B':
            console.log('Novo Salário: ' + salario * 1.15)
            break
        case 'C':
            console.log('Novo Salário: ' + salario * 1.2)
            break
        default:
            console.log('Plano inválido!')
    }
}

aumentoSalarial('A', 2000)
aumentoSalarial('B', 2000)
aumentoSalarial('C', 2000)
aumentoSalarial('D', 2000)

// Exercício 18
console.log('\nExercício 18')

function numeroExtenso(numero) {
    switch (numero) {
        case 0:
            console.log('Zero')
            break
        case 1:
            console.log('Um')
            break
        case 2:
            console.log('Dois')
            break
        case 3:
            console.log('Três')
            break
        case 4:
            console.log('Quatro')
            break
        case 5:
            console.log('Cinco')
            break
        case 6:
            console.log('Seis')
            break
        case 7:
            console.log('Sete')
            break
        case 8:
            console.log('Oito')
            break
        case 9:
            console.log('Nove')
            break
        case 10:
            console.log('Dez')
            break
        default:
            console.log('Número fora do intervalo!')
    }
}

console.log(numeroExtenso(0))
console.log(numeroExtenso(2))
console.log(numeroExtenso(5))
console.log(numeroExtenso(8))
console.log(numeroExtenso(10))
console.log(numeroExtenso(11))
console.log(numeroExtenso(-2))

// Exercício 19
console.log('\nExercício 19')

function calcularPedido(codigo, quantidade) {
    switch (codigo) {
        case 100:
            return quantidade * 3
            break
        case 200:
            return quantidade * 4
            break
        case 300:
            return quantidade * 5.5
            break
        case 400:
            return quantidade * 7.5
            break
        case 500:
            return quantidade * 3.5
            break
        case 600:
            return quantidade * 2.8
            break
        default:
            return 'Produto não existente!'
    }
}

console.log(calcularPedido(100, 2))
console.log(calcularPedido(200, 2))
console.log(calcularPedido(300, 2))
console.log(calcularPedido(400, 2))
console.log(calcularPedido(500, 2))
console.log(calcularPedido(600, 2))
console.log(calcularPedido(700, 2))

// Exercício 20
console.log('\nExercício 20')

function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque)
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }

        valorNota = calcularValorNota(valorSaque)

    }
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(sacarDinheiro(153))
console.log(sacarDinheiro(200))
console.log(sacarDinheiro(1575))
