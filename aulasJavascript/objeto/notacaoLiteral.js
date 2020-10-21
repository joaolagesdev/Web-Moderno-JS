// Notação literal 

const a = 1
const b = 2
const c = 3

const objetoUm = {a:a, b:b, c:c}
const objetoDois = {a, b, c} //sintaxe reduzida, quando atributo é o mesmo nome da constante
console.log(objetoUm, objetoDois)

const nomeAtributo = 'nota'
const valorAtributo = 7.87
const objetoTres= {}
objetoTres[nomeAtributo] = valorAtributo
console.log(objetoTres)

const objetoQuatro = {[nomeAtributo]: valorAtributo}
console.log(objetoQuatro)

const objetoCinco = {
    funcaoUm: function() {
        //...
    },
    funcaoDois() {
        // forma reduzida
    }
}

console.log(objetoCinco)

