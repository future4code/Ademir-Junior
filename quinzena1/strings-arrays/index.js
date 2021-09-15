// EXERCÍCIOS DE INTERPRETAÇÃO


//1.Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// let array
// console.log('a. ', array) //resp: (undefined)

// array = null
// console.log('b ', array) //resp: (null)

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)//resp. (11)

// let i = 0
// console.log('d. ', array[i])//resp. (3)

// array[i+1] = 19
// console.log('e. ', array)//resp. (1: 19)

// const valor = array[i+6]
// console.log('f. ', valor)//resp. (9)

//---------------------------------------------------------------//

//2.Leia o código abaixo com atenção: Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)//SUBI NO ONIBUS EM MIRROCOS

//---------------------------------------------------------------//

// EXRCÍCIOS DE ESCRITA


// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
// O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

// const nomeDoUsuario = prompt("Qual seu nome?")
// const emailDoUsuario = prompt("Qual seu e-mail?")

// console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

//---------------------------------------------------------------//

//2.Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

// let array = ["Pizza", "Japa", "Hamburguer", "Strogonoffe", "Churrasco"]
// console.log(array)
// console.log(`Essas são minhas comidas preferidas:${array.join('\n')}`)

// let comidaUsuario = prompt("Digite sua comida preferida.")
// let novaArray = array
// novaArray [1] = comidaUsuario

// console.log (novaArray)

//---------------------------------------------------------------//

//3.Faça um programa, seguindo os passos:

// let tarefa = []
// let listaDeTarefas = tarefa 

// tarefa[0] = prompt("Qual a primeira tarefa do seu dia?")
// tarefa[1] = prompt("Qual a segunda tarefa do seu dia?")
// tarefa[2] = prompt("Qual a terceira tarefa do seu dia?")

// console.log(tarefa)

// listaDeTarefas = tarefa.splice(Number(prompt("Qual tarefa você já realizou?")) ,1)

// console.log(tarefa)