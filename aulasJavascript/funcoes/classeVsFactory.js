// Classe Vs Função Factory

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`) 
    }
}

const pessoaUm = new Pessoa('João')
pessoaUm.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const pessoaDois = criarPessoa('Ana')
pessoaDois.falar()