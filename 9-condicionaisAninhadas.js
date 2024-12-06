/**
 * Trabalhando com condicionais (&& e ||) aninhadas em estruturas de decisão
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nTrabalhando com condicionais aninhadas",
    "\n" + "-".repeat(35))

// Lista com possíveis destinos de viagens
const listaDeDestinos = new Array("Aracaju", "Natal", "Porto de Galinhas", "Maragogi")

// Variáveis utilizadas
const compradorIdade = 21
const compradorAcompanhado = false
const compradorDestino = 2
let compradorPossuiPassagem = false

// Verificando se a pessoa pode ou não pode realizar a compra da viagem
if ((compradorIdade < 18 || compradorIdade > 65) && !compradorAcompanhado) {
    console.log("Nesta idade precisa estar acompanhado para comprar")
} else {
    if (compradorDestino >= 0 && compradorDestino < listaDeDestinos.length) {
        console.log("Destinos existentes:\n", listaDeDestinos)
        console.log(`Compra para ${listaDeDestinos[compradorDestino]} realizada com sucesso`)
        listaDeDestinos.splice(compradorDestino, 1)
        console.log("Destinos para os próximos compradores:\n", listaDeDestinos)
        compradorPossuiPassagem = true
    } else {
        console.log("O destino escolhido não está disponível")
    }
}

// Verificando se a pessoa pode embarcar no voo
if (compradorPossuiPassagem) {
    if (((compradorIdade < 18 || compradorIdade > 65) && compradorAcompanhado)
        || (compradorIdade >= 18 || compradorIdade <= 65)) {
        console.log("Boa viagem, pode embarcar!")
    } else {
        console.log("Nesta idade você precisa estar acompanhado para embarcar!")
    }
} else {
    console.log("Você não possui passagem para embarcar!")
}