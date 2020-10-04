// Callback Function (Chamar de volta) #3
// Exemplo de callback no browser

// Nesse caso não é obrigatório declarar o evento
document.getElementsByTagName('body')[0].onclick = function (event) {
    console.log("O evento ocorreu!")
}