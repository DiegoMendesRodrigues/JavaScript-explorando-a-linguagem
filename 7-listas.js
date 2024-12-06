/**
 * Curso de JavaScript: explorando a linguagem
 * Trabalhando com listas
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nTrabalhando com listas",
    "\n" + "-".repeat(35))

// Criando uma lista
const listaDeDestinos = new Array(
    "São Paulo",
    "Salvador",
    "Rio de Janeiro"
)

// Exibindo os valores
console.log("Destinos possíveis:")
console.log(listaDeDestinos)
console.log("-")

// Adicionando um valor no final da lista
listaDeDestinos.push("Curitiba")
console.log(listaDeDestinos)
console.log("-")

// Ordenando a lista
listaDeDestinos.sort()
console.log(listaDeDestinos)

// Ordenando de forma reversa a lista
listaDeDestinos.reverse()
console.log(listaDeDestinos)
console.log("-")

// Índices da lista
console.log(Object.keys(listaDeDestinos))
console.log(listaDeDestinos[1])
console.log("-")

// Quantidade de elementos da lista
console.log(listaDeDestinos.length)
console.log("-")

// Diminuir a quantidade de elementos -> Excluir um item da lista
listaDeDestinos.length = 3
console.log(listaDeDestinos.length)
console.log(listaDeDestinos)
console.log("-")

// Aumentar a quantidade de elementos -> Novo item undefined
listaDeDestinos.length = 4
console.log(listaDeDestinos.length)
console.log(listaDeDestinos)
console.log("-")

// Preencher um item já existente na lista
listaDeDestinos[3] = "Paulínia"
console.log(listaDeDestinos)
console.log("-")

// Exibir os elementos da lista através de um loop
listaDeDestinos.forEach((item, indice) => {
    console.log(`${indice} -> ${item}`)
})
console.log("-")

// Preencher um item já existente na lista
listaDeDestinos[6] = "Campinas"
console.log(listaDeDestinos)
console.log("-")

// Exibir todos os itens da lista, incluindo undefined
const iterador = listaDeDestinos.keys()
for (const chave of iterador) {
    console.log(`${chave} -> ${listaDeDestinos[chave]}`)
}
console.log("-")

// Exibir apenas os itens preenchidos da lista
listaDeDestinos.forEach((item, indice) => {
    console.log(`${indice} -> ${item}`)
})
console.log("-")

// Criar uma nova lista, utilizando uma função JS
const novaLista = listaDeDestinos.toSorted()
console.log(novaLista)
console.log("-")

// Remover elementos da lista
novaLista.length = 4
console.log(novaLista)
novaLista.splice(1, 2)
console.log(novaLista)
console.log("-")
novaLista.splice(1, 1)
console.log(novaLista)
console.log("-")