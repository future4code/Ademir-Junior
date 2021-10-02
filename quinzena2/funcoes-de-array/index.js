// EXERCÍCIOS DE INTERPRETAÇÃO

//1. 
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi"},
//     { nome: "Lais Petra", apelido: "Laura"},
//     { nome: "Leticia Chijo", apelido: "Chijo"}
// ]

// const novoArrayA = usuarios.map((item, index, array) => { 
//     console.log(item, index, array)
// })

//a) aparecerá os nomes e apelidos

//----------------------------------------//---------------------------------------//

//2.
// const usuarios = [
//     {nome: "Amanda Rnagel", apelido: "Mandi"},
//     {nome: "Lais Petra", apelido: "Laura"},
//     {nome: "Leticia Chijo", apelido: "Chijo"},
// ]

// const novoArrayB = usuarios.map((item, index, array) => {
//     return item.nome
// })

// console.log(novoArrayB)

//b) será impresso somente os nomes

//----------------------------------------//---------------------------------------//

//3. 
// const usuarios = [
//     {nome: "Amanda Range", apelido: "Mandi"},
//     {nome: "Lais Petra", apelido: "Laura"},
//     {nome: "Leticia Chijo", apelido: "Chijo"},
// ]

// const novoArrayC = usuarios.filter((item, index, array) => {
//     return item.apelido === "Chijo"
// })

// console.log(novoArrayC)

//c) aparecerá os itens que não tiverem relacionados ao apelido "Chijo".


//----------------------------------------//---------------------------------------//


// EXERCICIOS DE ESCRITA 

//1.a)
// const pets = [
//     {nome: "Lupin", raca: "Salsicha"},
//     {nome: "Polly", raca: "Lhasa Apso"},
//     {nome: "Madame", raca: "Poodle"},
//     {nome: "Quentinho", raca: "Salsicha"},
//     {nome: "Fluffy", raca: "Poodle"},
//     {nome: "Caramelo", raca: "Vira-lata"},
// ]

// const novoArrayA = pets.map((item, index, array) => {
//     return item.nome
// })

// console.log(novoArrayA)

//b)
// const pets = [
//     {nome: "Lupin", raca: "Salsicha"},
//     {nome: "Polly", raca: "Lhasa Apso"},
//     {nome: "Madame", raca: "Poodle"},
//     {nome: "Quentinho", raca: "Salsicha"},
//     {nome: "Fluffy", raca: "Poodle"},
//     {nome: "Caramelo", raca: "Vira-lata"},
// ]

// const novoArrayB = pets.filter((item, index, array) => {
//     return item.raca === "Salsicha"
// })

// console.log(novoArrayB)

//c)
// const pets = [
//     {nome: "Lupin", raca: "Salsicha"},
//     {nome: "Polly", raca: "Lhasa Apso"},
//     {nome: "Madame", raca: "Poodle"},
//     {nome: "Quentinho", raca: "Salsicha"},
//     {nome: "Fluffy", raca: "Poodle"},
//     {nome: "Caramelo", raca: "Vira-lata"},
// ]

// const novoArrayC = (item, index, array) => {
//     return item.raca === "Poodle"
// }

// const racaPoodle = pets.filter(novoArrayC)

// const pegarNome = (item, index, array) => {
//    console.log("Você ganhou um cupom de desconto de 10% para tosar o/a", item.nome)
// }

// const nomeDosPoodles = racaPoodle.map(pegarNome)

//----------------------------------------//---------------------------------------//

//2.a)
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

//  const novoArrayA = produtos.map((item, index, array) => {
//      return item.nome 
//  }) 

//  console.log(novoArrayA)

//b)
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]

// const novoArrayB = produtos.map((item, index, array) => {
//     const nome = item.nome
//     const preco = (item.preco * 0.95).toFixed(2)

//     return {nome,preco}
// })

// console.log(novoArrayB)

//c)
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]

// const novoArrayC = produtos.filter((item, index, array) => {
//     return item.categoria === "Bebidas"
// })

// console.log(novoArrayC)

//d)
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]

// const novoArrayD = produtos.filter((item, index, array) => {
//     return item.nome.includes("Ypê")
// })

// console.log(novoArrayD)

//e)
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]

// const novoArrayE = produtos.filter((item, index, array) => {
//     return item.nome.includes("Ypê")
// })

// const frasesYpe = novoArrayE.map((item, index, array) => {
//     nome = item.nome
//     preco = item.preco
    
//     return (`Compre ${nome} por ${preco}!`)
// })

// console.log(frasesYpe)
