/**
 * Curso de JavaScript: explorando a linguagem
 * Trabalhando com variáveis
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nTrabalhando com variáveis",
    "\n" + "-".repeat(35))

/**
 * Declarando uma variável local
 * Não é preciso tipar a variável
 */
const idade = 42

/**
 * Como não definimos const ou let, a variável 'nome' vira global
 * NÃO FAZER DESSA FORMA
 */
nome = "Diego"

console.log(nome + " tem " + idade + " anos")

let ano = "2024"
console.log(ano)