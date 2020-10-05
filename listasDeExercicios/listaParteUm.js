// Lista de exercícios: Fundamentos, estruturas de controle e funções

// Exercício 01
console.log('Exercício 01')

function calcularOperacoes(numeroUm, numeroDois) {
        console.log(`Soma:${numeroUm + numeroDois}\nSubtração:${numeroUm - numeroDois}\nMultiplicação:${numeroUm * numeroDois}\nDivisão:${numeroUm / numeroDois}
        `)
}

calcularOperacoes(7, 8)

// Exercício 02
console.log('Exercício 02')

function classificarTriangulo(ladoUm, ladoDois, ladoTres) {
    if (ladoUm == ladoDois && ladoDois == ladoTres) {
        return "Triângulo Equilátero"
    } else if (ladoUm == ladoDois || ladoDois == ladoTres || ladoUm == ladoTres) {
        return "Triângulo Isósceles"
    } else {
        return "Triângulo Escaleno"
    }
}

console.log(classificarTriangulo(5, 5, 5))
console.log(classificarTriangulo(5, 5, 4))
console.log(classificarTriangulo(5, 7, 9))

// Exercício 03
console.log('\nExercício 03')
function calcularExponenciacao(base, expoente) {
    return base ** expoente
}
// Também pode utilizar a função Math.pow()
console.log(calcularExponenciacao(5,3))

// Exercício 04
console.log('\nExercício 04')
function calcularDivisaoEresto(dividendo, divisor) {
    console.log(`Divisão: ${dividendo/divisor}\nResto: ${dividendo%divisor}`)
}

calcularDivisaoEresto(7,5)

// Exercício 05
console.log('\nExercício 05')
function mostrarMoedaDecimal(numeroDecimal) {
    const valorEmReais = `R$ ${numeroDecimal.toFixed(2).toString().replace(".", ",")}`
    return valorEmReais
}

console.log(mostrarMoedaDecimal(0.1 + 0.2))

// Exercício 06
console.log('\nExercício 06')

function aplicacaoJurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    return capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)
}

function aplicacaoJurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    return capitalInicial * (1 + taxaJuros) ** tempoAplicacao
}

console.log(aplicacaoJurosSimples(150, 0.1, 2))
console.log(aplicacaoJurosCompostos(150, 0.1, 2))

// Exercício 07
console.log('\nExercício 07')
function bhaskara(ax2, bx, c) {
    let resultados = []
    let delta = (bx ** 2) - (4 * ax2 *c)
    if(delta < 0) {
        return "Delta é negativo!"
    }

    let x1 = (-bx + Math.sqrt(delta))/2*ax2
    let x2 = (-bx - Math.sqrt(delta))/2*ax2
    resultados.push(x1)
    resultados.push(x2)
    return resultados
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))

// Exercício 08
console.log('\nExercício 08')

let listaPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function desempenhoPontuacoes (listaPontuacoes) {
    let pontuacoes = listaPontuacoes.split(", ") // o método split() divide um objeto string em um array de strings
    let quantidadeQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for(let i =1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            quantidadeQuebraDeRecords++
        } else if(pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1
        }
    }
    return [quantidadeQuebraDeRecords, piorJogo]
}

console.log(desempenhoPontuacoes(listaPontuacoes))

// Exercício 09
console.log('\nExercício 09')

function arredondarNota(nota){
    if(nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

function classificarAluno(nota) {
    let notaCorrigida = arredondarNota(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }

}

classificarAluno(100)
classificarAluno(30)
classificarAluno(38)
classificarAluno(88)
classificarAluno(61)

// Exercício 10
console.log('\nExercício 10')

const numeroDividePorTres = numero => numero % 3 == 0 ? true : false

console.log(numeroDividePorTres(0))
console.log(numeroDividePorTres(3))
console.log(numeroDividePorTres(15))
console.log(numeroDividePorTres(5))
console.log(numeroDividePorTres(31))

