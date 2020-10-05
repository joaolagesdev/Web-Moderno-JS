// Lista de exercícios: Fundamentos, estruturas de controle e funções

// Exercício 21
console.log('Exercício 21')

function valorPagoPlanoDeSaude(idade) {
    const valorFixo = 100
        if (idade<10) {
            return valorFixo + 80
        } else if (idade < 30) {
            return valorFixo + 50
        } else if (idade < 60) {
            return valorFixo + 95
        } else {
            return valorFixo + 130
        }
}

console.log(valorPagoPlanoDeSaude(5))
console.log(valorPagoPlanoDeSaude(10))
console.log(valorPagoPlanoDeSaude(25))
console.log(valorPagoPlanoDeSaude(32))
console.log(valorPagoPlanoDeSaude(50))
console.log(valorPagoPlanoDeSaude(63))
console.log(valorPagoPlanoDeSaude(80))

// Exercício 22
console.log('\nExercício 22')

function valorAnuidadeAssociacao(numeroMes, valor) {
    if (numeroMes > 0 && numeroMes < 13) {
        atraso = numeroMes -1
        return (valor *((1 + (5/100))*atraso)).toFixed(2)
    } else {
        return 'Mês inválido'
    }
}

console.log(valorAnuidadeAssociacao(1,500))
console.log(valorAnuidadeAssociacao(2,500))
console.log(valorAnuidadeAssociacao(3,500))

// Exercício 23
console.log('\nExercício 23')

function classificarAluno(codigoDoAluno, notaUm, notaDois, notaTres) {
    let notas = []
    notas.push(notaUm)
    notas.push(notaDois)
    notas.push(notaTres)
    notas.sort((a, b) => a<b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codigoDoAluno}. Notas: ${notaUm}, ${notaDois}, ${notaTres}. Média: ${mediaFinal}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

classificarAluno(100, 3.0, 6, 3.5)
classificarAluno(101, 7.0, 6, 4.8)

// Exercício 24
console.log('\nExercício 24')

function imprimirHelloWorld() {
    let i = 0
    while (i<11) {
        console.log("Hello World!")
        i++
    }
}

imprimirHelloWorld()

// Exercício 25
console.log('\nExercício 25')

function imprimirUmAteCinquenta() {
    for(let i = 0; i<=50; i++) {
        console.log(`${i}`)
    }
}

imprimirUmAteCinquenta()

// Exercício 26
console.log('\nExercício 26')

function paresUmAteCem() {
    for(let i = 1; i<=100; i++) {
        if (i % 2 == 0) {
            console.log(`${i}`)
        }
    }
}

paresUmAteCem()

// Exercício 27
console.log('\nExercício 27')

function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2){
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return calcularTempo(altura2, taxa2, altura1, taxa1) 
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return calcularTempo(altura1, taxa1, altura2, taxa2) 
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    console.log(qtdAnos)
    return qtdAnos
}

console.log(calcularCrescimento(150, 2, 150, 2))
console.log(calcularCrescimento(130, 2, 110, 2))
console.log(calcularCrescimento(130, 2, 125, 4))

// Exercício 28
console.log('\nExercício 28')

function quantidadeParesEimpares(numeros) {
    let pares = 0
    let impares = 0

    for(let n in numeros) {
        if (n % 2 == 0) {
            pares++
        } else {
            impares++
        }
    }
    console.log(`Quantidade de pares: ${pares}`)
    console.log(`Quantidade de ímpares: ${impares}`)
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
quantidadeParesEimpares(numeros)

// Exercício 29
console.log('\nExercício 29')

function numerosDentroDoIntervalo(conjunto) {
    let quantidade = 0

    for (let i = 0; i < conjunto.length; i++) {
        if(conjunto[i] >= 10 && conjunto[i] <= 20){
            quantidade++
        }
    }
    return quantidade
}

let vetor = [ 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
console.log(numerosDentroDoIntervalo(vetor))

// Exercício 30
console.log('\nExercício 30')

function maiorMenor (vetor) {
    let maior
    let menor
    
    for (let i = 0; i < vetor.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(maiorMenor(vetor))