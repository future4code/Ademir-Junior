// EXERCÍCIO DE INTERPRETAÇÃO

//1.

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// 'minhaFuncao(2)'
// 'minhaFuncao(10)'

//a) (10) (50)

//b) (nada)



//2. 

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

//a) (imprimi a palavra escrita dentro do includes)

//b) (true)(true)(true)


//-------------------------//-------------------------//-------------------------


//EXERCÍCIO DE ESCRITA

// 1.

// //a)
// function dadosSobreMim() {
//     const texto = "Eu sou Ademir Junior, tenho 31 anos, moro em Contagem e sou estudante."
//     console.log(texto)
// }
// dadosSobreMim()

// //b) 
// function imprimeOlaNome(nome, idade, cidade, profissao) {
//     const stringTx = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
// }
// imprimeOlaNome("Ademir Junior","31","Contagem","Estudante")



// 2.

// //a)
// function somaNumeros(num1, num2) {
//     const soma = num1 + num2
//     console.log(soma)
// }

// somaNumeros(2, 3)

// //b)
// function booleanNumeros(num1, num2) {
//     const boolean = num1 >= num2
//     return boolean
// }
//     let numeroDigitado1 = Number(prompt("Digite o primeiro numero"))
//     let numeroDigitado2 = Number(prompt("Digite o segundo numero"))
//     console.log(booleanNumeros(numeroDigitado1, numeroDigitado2))

// //c)
// let numeroDigitado = Number(prompt("Digiti um numero"))

// function numeroPar() {
//     let analise = numeroDigitado % 2 === 0
//     console.log("O numero é par?", analise)
// }
// numeroPar(numeroDigitado)

// //d)
// function recebeMensagem() {
//     let texto = prompt("Digite uma mensagem.")
//     console.log(`A mensagem "${texto.toUpperCase()}" possui ${texto.length} caracteres.`)
// }
// recebeMensagem()



// 3.

// function somaNumeros(num1, num2) {
//     const soma = num1 + num2
//     return soma
// }

// function subtraiNumeros(num1, num2) {
//     const subtração = num1 - num2
//     return subtração
// }

// function multiplicaNumeros(num1, num2) {
//     const multiplicação = num1 * num2
//     return multiplicação
// }

// function divideNumeros(num1, num2) {
//     const divisão = num1 / num2
//     return divisão
// }

// let num1 = Number(prompt("Digite o primeiro numero"))
// let num2 = Number(prompt("Digite o segundo numero"))

// console.log(somaNumeros(num1, num2))
// console.log(subtraiNumeros(num1, num2))
// console.log(multiplicaNumeros(num1, num2))
// console.log(divideNumeros(num1, num2))