/**
 * Trabalhando com loops utilizando for
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nTrabalhando com loops utilizando for",
    "\n" + "-".repeat(35))

// Lista com possíveis destinos de viagens
const listaDeDestinos = new Array("Aracaju", "Natal", "Porto de Galinhas", "Maragogi", "São Paulo", "Rio de Janeiro")

console.log("\nDestinos existentes:")

// Usando loop for para exibir os destinos
for (let contador = 0; contador < listaDeDestinos.length; contador++) {
    console.log(`-> ${listaDeDestinos[contador]}`)
}

// Usando o break, para ver apenas os 3 primeiros destinos, ou seja, contador deve ir até 2 (0, 1, 2)
console.log("\nDestinos existentes:")
for (let contador = 0; contador < listaDeDestinos.length; contador++) {
    console.log(`-> ${listaDeDestinos[contador]}`)
    if (contador == 2) {
        break
    }
}

// Utiliazando duas variáveis na iteração
console.log("\nUtiliazando duas variáveis na iteração:")
const lista = [1, 2, 3, 4, 5, 6];
for (let linha = 0, coluna = lista.length - 1;
    linha < coluna;
    linha++, coluna--) {
    console.log(lista[linha], lista[coluna]);
}

// For...In em um objeto
console.log("\nFor ... In em um objeto:")
const objeto = { nome: "Diego", idade: 42, ativo: true }
for (const propriedade in objeto) {
    if (typeof objeto[propriedade] === "boolean") {
        let resultado = "Não"
        if (objeto[propriedade]) {
            resultado = "Sim"
        }
        console.log(`${propriedade} = ${resultado}`)
    } else {
        console.log(`${propriedade} = ${objeto[propriedade]}`)
    }
}

// For...Of em um iterável
console.log("\nFor ... Of em um iterável:")
const iteravel = [10, 20, 30]
for (let valor of iteravel) {
    console.log(valor)
}

console.log("\nFor ... Of em um iterável:")
for (let valor of iteravel) {
    valor += 5
    console.log(valor)
}