const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config =  JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Para arquivos JSON tem uma forma mais simples de ler o arquivo
const config = require('./arquivo.json') // já retorna um objeto instanciado
console.log(config.db)

// Leitura de uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})
