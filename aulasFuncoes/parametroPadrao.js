// Parâmetro padrão

// Estratégia 1 para gerar valor padrão (pode gerar efeito colateral com valores = 0)
function somaUm(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    
    return a + b + c
}

console.log(somaUm(), somaUm(3), somaUm(1, 2, 3), somaUm(0, 0, 0)) // O 0 retorna false! Cuidado

// Estratégia 2, 3, e 4 para gerar valor padrão
function somaDois(a, b, c) {
    a = a !== undefined ? a : 1 // 2
    b = 1 in arguments ? b : 1 // 3
    c = isNaN(c) ? 1 : c // 4 mais segura entre 2, 3 e 4

    return a + b + c
}

console.log(somaDois(), somaDois(3), somaDois(1, 2, 3), somaDois(0, 0, 0))

// Valor padrão do ES2015 
function somaTres(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(somaTres(), somaTres(3), somaTres(1, 2, 3), somaTres(0, 0, 0))

