/**
 * Curso de JavaScript: explorando a linguagem
 * Conversão de tipos
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nConversão de tipos",
    "\n" + "-".repeat(35))

// Irá concatenar as Strings ao invés de somar
console.log("2" + "2")

// Conversão explícita
console.log(parseInt("2") + parseInt("2"))
console.log(parseFloat("2") + parseFloat("2"))

/**
 * Ao tentarmos fazer uma divisão com texto, o JS tenta automaticamente converter para números
 * Conversão implícita
*/
console.log("10" / "2")

console.log(10 / 3)

// Irá retornar NaN (Not a Number), ao invés de dar um erro no sistema
console.log("Diego" / "2")