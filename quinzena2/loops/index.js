// EXERCICIOS DE INTERPRETAÇÂO

//1. resp.
// let valor = 0
// for(let i = 0; i < 5; i++) {
//     valor += i
// }

// console.log(valor)

//resposta = 10, ele vai somar os numeros

//------------------------------//------------------------------//

//2.
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     if (numero > 18) {
//         console.log(numero)
//     }
// }

//a) numeros maiores que 18.

//b)

//------------------------------//------------------------------//

//3.
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//     let linha = ""
//     for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//         linha += "*"
//     }
//     console.log(linha)
//     quantidadeAtual++
// }

//resposta = *, **, ***, **** 


//------------------------------//------------------------------//


// EXERCÍCIOS DE ESCRITA

//1.
// let pet = Number(prompt("Quantos bichinhos de estimação você tem?"))
// let nomePets = []

// if (pet === 0) {
//     console.log("Que pena!Você pode adotar um pet.")
// }else if (pet > 0) {
//     for(let i = 0; i < pet; i++) {
//         let bichos = prompt("Digite o nome dos seus Pets: ")
//         nomePets[i] = bichos
//     }
//         console.log(nomePets)
// }

//------------------------------//------------------------------//

//2.a)
// let arrayOriginal = [10,20,30,40,50]

// for (let item of arrayOriginal) {
//     console.log(item)
// }

//b)
// let arrayOriginal = [10,20,30,40,50]

// for (let item of arrayOriginal) {
//     console.log(item / 10)
// }

//c)
// let arrayOriginal = [10,20,30,40,50]
// let arrayPares = []

// for (let item of arrayOriginal) {
// if (item % 2 == 0){
// arrayPares.push(item)
// }
//     // console.log(item)
// }
// console.log(arrayPares)

//d)
// let arrayOriginal = [10,20,30,40,50]
// let arrayPares = []

// for (let i = 0; i < arrayOriginal.length; i++) {
//     let stringArray = "O elemento do index "+ i +" é:" + arrayOriginal[i]
//     console.log(stringArray)  
// }

//e)
// let arrayOriginal = [10,20,30,40,50]
// let valorMaximo = 50
// let valorMinimo = 10

// for (let item of arrayOriginal) {
//     if (item === 50)
//     console.log(`O maior numero é ${valorMaximo} e o menor é ${valorMinimo}.`)
// }

