// Callback Function (Chamar de volta) #2

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
let notasBaixas = []
for (let n in notas) {
    if (notas[n] < 7) {
        notasBaixas.push(notas[n])
    }
}

console.log(notasBaixas)

// Com callback
notasBaixasDois = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixasDois)

//const notasMenorQueSete = nota => nota < 7
const notasBaixasTres = notas.filter(nota => nota < 7) // notas.filter(notasMenorQueSete)

console.log(notasBaixasTres)