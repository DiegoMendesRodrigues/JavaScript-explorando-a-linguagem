/**
 * Curso de JavaScript: explorando a linguagem
 * Trabalhando com condicionais e operadores aritméticos
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nTrabalhando com condicionais e operadores aritméticos",
    "\n" + "-".repeat(35))

// Criando uma lista
const listaDeDestinos = new Array(
    "São Paulo",
    "Salvador",
    "Rio de Janeiro"
)

// Exibindo os valores da lista
console.log("Destinos possíveis:")
console.log(listaDeDestinos)
console.log("-")

// Variáveis utilizadas nas comparações
const idadeComprador = 15
const estaAcompanhada = true

// Criando a variável com o resultado boolenado de uma expressão
const compradorMaiorDeIdade = idadeComprador >= 18

// Realizando a venda, com condicionais de idade
if (compradorMaiorDeIdade && idadeComprador <= 65) {
    console.log(`Idade do comprador = ${idadeComprador} portanto maior de idade, sendo a venda realizada`)
    listaDeDestinos.splice(1, 1)    // Remover "Salvador"
} else if (idadeComprador > 65) {
    console.log("Comprador de terceira idada, logo a venda não pode ser realizada")
} else {
    if (estaAcompanhada) {
        console.log("Comprador não é maior de idade, mas está acompanhado, sendo então a venda realizada")
        listaDeDestinos.splice(0, 1)    // Remover "São Paulo"
    } else {
        console.log("Comprador não é maior de idade, e não está acompanhado, logo a venda não pode ser realizada")
    }
}

console.log(listaDeDestinos)
console.log("-")

// Comparadores aritméticos no JS
const idades = new Array(15, 18, 21)
idades.forEach((item, indice) => {
    console.log(idades[indice])
    console.log(idades[indice] > 18)
    console.log(idades[indice] < 18)
    console.log(idades[indice] >= 18)
    console.log(idades[indice] <= 18)

    // Comparação de igualdade
    console.log(idades[indice] === 18)
    console.log(".")
})