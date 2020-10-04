// Arrow Function #1

let dobro  = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let saudacao = function () {
    return "Ei!"
}

saudacao = () => 'Ei!'
saudacao = _ => 'Ei!'
 
console.log(saudacao())