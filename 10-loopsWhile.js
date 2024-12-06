/**
 * Trabalhando com loops utilizando while
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nTrabalhando com loops utilizando while",
    "\n" + "-".repeat(35))

// Lista com possíveis destinos de viagens
const listaDeDestinos = new Array("Aracaju", "Natal", "Porto de Galinhas", "Maragogi")

console.log("\nDestinos existentes:\n", listaDeDestinos)

// Variáveis utilizadas
const compradorIdade = 21
const compradorAcompanhado = false
// const compradorDestino = "Aracaju"
const compradorDestino = "São Paulo"
let compradorPossuiPassagem = false
let contador = 0

const podeCompar = compradorIdade >= 18 || estaAcompanhado

// Verificar se a pessoa pode comprar a passagem
if (podeCompar) {
    // Verificar se o destino está na lista de possíveis destinos, utilizando um loop
    while (contador < listaDeDestinos.length) {
        if (listaDeDestinos[contador] == compradorDestino) {
            console.log(`O destino ${listaDeDestinos[contador]} está disponível para venda`)
            compradorPossuiPassagem = true
            break
        }
        contador++
    }

    if (compradorPossuiPassagem) {
        console.log("Passagem comprada")
    } else {
        console.log(`O destino ${compradorDestino} não está disponível para venda`)
    }
} else {
    compradorPossuiPassagem = false
    console.log("Menor de idade precisa estar acompanhado para comprar a passagem")
}