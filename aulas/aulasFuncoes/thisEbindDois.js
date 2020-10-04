// This e a função bind #2
// Bind, ou crie uma contante e subtitua o this

function Pessoa() {
    this.idade = 0
    
    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa


