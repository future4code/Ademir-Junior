// EXERCICIOS DE INTERPRETAÇÃO 

//1. 

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//     console.log("Passou no teste.")
// }else {
//     console.log("Não passou no teste.")
// }

// //a) Se passou ou não passou no teste.

// //b) Números pares.

// //c) Número impares.

//----------------------------------//--------------------------------

//2.

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//     case "Laranja":
//         preco = 3.5
//         break;
//     case "Maçã":
//         preco = 2.25
//         break;
//     case "Uva":
//         preco = 0.30
//         break;
//     case "Pêra":
//         preco = 5.5
//         //break;
//     default:
//         preco = 5
//         break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para saber o preço das frutas.

//b) Será impresso "O preço da fruta  Maçã  é  R$  2.25"

//c) "O preço da fruta  Pêra  é  R$  5"

//----------------------------------//--------------------------------

//3.

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//     console.log("Esse número passou no teste")
//     let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//a) Imprimindo para "Digitar o primeiro número".

//b) Se for o número 10, aparecerá "Esse número passou no teste".
//Se o número for -10 não irá aprecer nada.

//c) Sim, pois o número é < 0.

//----------------------------------//--------------------------------

// EXERCICIOS DE ESCRITA

//1. 

// const idade = Number(prompt("Qual a sua idade?"))

//   if (idade >= 18) {
//       console.log("Você pode dirigir.")
//   } else if 
//   (idade < 18) {
//       console.log("Você não pode dirigir!")
// }

//----------------------------------//--------------------------------

//2.

// const turno = prompt("Em qual turno você estuda?")

// if (turno === "M") {
//     console.log("Bom dia!")
// } else if
//     (turno === "V") {
//         console.log("Boa tarde!")
// } else if
//     (turno === "N") {
//     console.log("Boa noite!")
// }

//----------------------------------//--------------------------------

//3. 

// const turno = prompt("Em qual turno você estuda?")

// switch (turno) {
//     case "M":
//         console.log("Bom dia!")
//         break;
//     case "V":
//         console.log("Boa tarde!")
//         break;
//     case "N":
//         console.log("Boa noite!")
//     default: 
//     console.log("Não entendi o que você digitou, responda 'M', 'V' ou 'N'.")
//         break;
// }

//----------------------------------//--------------------------------

//4.

const genero = prompt("Qual o gênero do filme que você quer assistir?")
const ingresso = Number(prompt("Qual o valor do ingresso?"))

if(genero === "Fantasia" && ingresso <= 15) {
    console.log("Bom filme!")
}else {
    console.log("Escolha outro filme!")
}