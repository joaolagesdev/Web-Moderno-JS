// Criando Objetos

// 1. Usando a notação literal
const objetoUm = {}
console.log(objetoUm)

// 2. Object em JS
console.log(typeof Object, typeof new Object)
const objetoDois = new Object
console.log(objetoDois)

// 3. Funções construtoras
function Produto (nome, preco, desconto) {
    this.nome = nome  
    /* O this torna o atributo público
     * Você não tem mais como alterar o valor do preõ e nem o do desconto a partir do momento que você cria um produto
     * Esses dois valores tem um escopo apenas dentro da função
     * O objeto interno tem acesso a esses valores, mas eles não estão disponíveis para fora do objeto, estão encapsulados
     */ 
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const produtoUm = new Produto('Caneta', 7.99, 0.15)
const produtoDois = new Produto('Celular', 1490, 0.10)
// Se você quiser acessar podutoUm.nome ou produtoDois.nome e alterar diretamente o nome do produto, você pode.
console.log(produtoUm.getPrecoComDesconto(), produtoDois.getPrecoComDesconto())
console.log(produtoUm.nome, produtoDois.nome, produtoUm.preco)

// 4. Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}

const funcionarioUm = criarFuncionario('João', 7980, 4)
const funcionarioDois = criarFuncionario('Maria', 11400, 1)
console.log(funcionarioUm.getSalario(), funcionarioDois.getSalario())
console.log(funcionarioUm.nome, funcionarioUm.salarioBase)

// 5. Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "SOU UM JSON"}')
console.log(fromJSON.info)
// JSON é texto, não objeto