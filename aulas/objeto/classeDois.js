// Classe #02

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Desempregado') {
        super(sobrenome) //instanciar a função construtora da superclasse
        this.profissao = profissao
    }  
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)

