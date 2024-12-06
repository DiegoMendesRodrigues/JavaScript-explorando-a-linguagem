/**
 * Curso de JavaScript: explorando a linguagem
 * Atribuição de variáveis
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nAtribuição de variáveis",
    "\n" + "-".repeat(35))

/**
 * Definindo variáveis constantes, que não podem ser alteradas após atribuídas
 * Esta é a forma mais recomendada para a utilização de variáveis
 */
const idade = 42
const primeiroNome = "Diego"
const sobrenome = "Mendes"

// Interpolação de variáveis
console.log(`Meu nome é ${primeiroNome} ${sobrenome} com ${idade} anos`)

/**
 * Fazer uma sobreescrita
 * Não funciona, pois a variável nome é uma Constante!
*/
// nome = nome + sobrenome

/**
 * Definindo variáveis que podem ser alteradas após atribuídas
 * Forma usada, por exemplo, para contadores em estruturas de repetição
 */
let contador = 0
let nomeUsuario = "Regina"
let sobrenomeUsuario = "Ruiz"

// Fazer uma sobreescrita na variável nomeUsuario
nomeUsuario = nomeUsuario + " " + sobrenomeUsuario
console.log(nomeUsuario)