// Desafio Função Construtora

function Pessoa (nome) {
    this.nome = nome
    this.falar = function () {
        console.log(`Meu nomé é ${this.nome}`)
    }
}

const pessoaUm = new Pessoa('João')
pessoaUm.falar()