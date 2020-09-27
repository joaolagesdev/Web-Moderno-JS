// Par nome(chave)/valor

const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Fala!' // contexto léxico 2
    return saudacao
}

// Objetos saõ grupo saninhados de pares chave/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua X',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)