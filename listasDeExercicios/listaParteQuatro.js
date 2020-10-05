// Lista de exercícios: Fundamentos, estruturas de controle e funções

// Exercício 31
console.log('Exercício 31')

function quantidadeNegativos(numeros) {
    let quantidadeNegativos = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            quantidadeNegativos++
        }
    }
    return quantidadeNegativos
}

let vetor = [-7, -5, -2, 0, 3, 4, 5, 7]

console.log(quantidadeNegativos(vetor))

// Exercício 32
console.log('\nExercício 32')

function mediaVetor(vetor) {
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }
    return soma / vetor.length
}

let listaNumeros = [100, 200, 600]
console.log(mediaVetor(listaNumeros))

// Exercício 33
console.log('\nExercício 33')

let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Ana', 'João', 'Pedro', 'Eudete']
let vetorDouble = [1.5, 2.5, 3.5, 4.5]

function unirVetores(...args) {
    resultado = []
    for (let i = 0; i < arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(unirVetores(vetorInteiro, vetorDouble))
console.log(unirVetores(vetorDouble, vetorString))

// Exercício 34
console.log('\nExercício 34')

function compararString(stringUm, stringDois) {
    let estaContido = true
    for (let i = 0; i < stringUm.length; i++) {
        let caractereStringUm = stringUm.charAt(i).toLowerCase()
        for (let j = 0; j < stringDois.length; j++) {
            let caractereStringDois = stringDois.charAt(j).toLowerCase()
            if (caractereStringUm == caractereStringDois) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    return estaContido
}

console.log(compararString('abc', 'cba'))

// Exercício 35
console.log('\nExercício 35')

vetorPilha = [1, 2, 3, 4, 5]
vetorAdiciona = [6, 7, 8, 9, 10]

function adicionaVetor(vetorInicial, vetorAdicionar) {
    for (let i = 0; i < vetorAdicionar.length; i++) {
        console.log(vetorAdicionar[i])
        vetorInicial.push(vetorAdicionar[i])
    }
    console.log('Vetor adicionado: ' + vetorAdicionar)
    console.log('Vetor resultado: ' + vetorInicial)
}

adicionaVetor(vetorPilha, vetorAdiciona)

// Exercício 36
console.log('\nExercício 36')

function vetorMultiplicado(vetor, numero) {
    let resultado = []
    vetor.forEach(elemento => {
        resultado.push(elemento * numero)
    })
    return resultado
}

let vetorEx36 = [1, 2, 3, 4, 5]
console.log(vetorMultiplicado(vetorEx36, 5))

// Exercício 37
console.log('\nExercício 37')

function progressaoAritmetica(n, a1, r) {
    for (let i = 0; i < n; i++) {
        console.log(a1 + r * i)
    }
    console.log('Soma: ' + (n * (a1 + (a1 + ((n - 1) * r)))) / 2)
}

function progressaoGeometrica(n, a1, r) {
    for (let i = 0; i < n; i++) {
        console.log(a1 * (r ** i))
    }
    console.log('Soma: ' + (a1 * ((r ** n) - 1)) / (r - 1))
}

progressaoAritmetica(10, 5, 5)
progressaoGeometrica(10, 5, 3)

// Exercício 38
console.log('\nExercício 38')

function imprimirImparesIntervalo(inicio = 0, fim = 100) {
    if (inicio > fim) {
        console.log("Parâmetros errados")
    } else {
        for (let i = inicio; i <= fim; i++) {
            if (i % 2 != 0) {
                console.log(`${i}`)
            }
        }
    }
}

imprimirImparesIntervalo()
imprimirImparesIntervalo(10,0)

// Exercício 39
console.log('\nExercício 39')

function trocaValores(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        return 'Vetores de tamanhos diferentes.'
    }

    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocaValores(vetorA, vetorB)

// Exercício 40
console.log('\nExercício 40')

function conceituarNotas(notas) {
    let conceitos = []
    for(let i = 0; i < notas.length; i++) {
        if(notas[i]>=0 && notas[i]<=4.9){
            conceitos.push('D')
        } else if(notas[i]>=5 && notas[i]<=6.9) {
            conceitos.push('C')            
        } else if(notas[i]>=7 && notas[i]<=8.9) {
            conceitos.push('B')
        } else if(notas[i]>=9 && notas[i]<=10){
            conceitos.push('A')
        } else {
            conceitos.push('Nota inválida')       
       }
    }
    return conceitos
}

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
let vetorConceitos = conceituarNotas(notas)

console.log(vetorConceitos)