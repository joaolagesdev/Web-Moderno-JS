// Middleware pattern (chain of responsibility)
const passoUm = (contexto, next) => {
    contexto.valorUm = 'mid1'
    next()
}

const passoDois = (contexto, next) => {
    contexto.valorDois = 'mid2'
    next()
}

const passoTres = contexto => {
    contexto.valorTres = 'mid3'
}

const exec = (contexto, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](contexto, () => execPasso(indice +1))
    }
    execPasso(0)
}

const contexto = { }
    
exec(contexto, passoUm, passoDois, passoTres)

console.log(contexto)