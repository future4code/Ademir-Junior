//EXERCICIOS DE INTERPRETAÇÃO

//1.

// const filme = {
//   nome: "Auto da Compadecida",
//   ano: 2000,
//   elenco: [
//     "Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
//     "Virginia Cavendish"
//   ],
//   transmissoesHoje: [
//     {canal: "Telecine", horario: "21"},
//     {canal: "Canal Brasil", horario: "19h"},
//     {canal: "Globo", horario: "14"}
//   ] 
// }

// console.log(filme.elenco[0]) 
// console.log(filme.elenco[filme.elenco.length - 1]) 
// console.log(filme.transmissoesHoje[2]) 

//a) ("Matheus Nachtergaele") , ("Virginia Cavendish") , {canal: "Globo", horario: "14"}

//--------------------------------------------//--------------------------------------

//2.

// const cachorro = {
//   nome: "Juca",
//   idade: 3,
//   raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

//a) {"Juca", 3, "SRD"}, {"Juba", 3, "SRD"}, {"Jubo", 3, "SRD"}

//b) é o espalhamento ou spread, serve para fazer um cópia inteira de um objeto para outro.

//--------------------------------------------//--------------------------------------

//3.

// function minhaFuncao(objeto, propriedade) {
//   return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio",
//   idade: 23,
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

//a) (false, undefined)

//b) porque a altura não foi declarada.

//--------------------------------------------//--------------------------------------


//EXERCICIOS DE ESCRITA

//1.a)

// const pessoa = {
//   nome: "Junior",
//   apelidos: ["Juninho", "Junin", "Junão"]
// }

// const frase = (`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos}.`)

// console.log(frase)

//b)

// const pessoa = {
//   nome: "Junior",
//   apelidos: ["Juninho", "Junin", "Junão"]
// }
// const novosApelidos = {
//   ...pessoa,
//   apelidos: ["Jr", "Ad", "JR"]
// }

// const frase = (`Eu sou ${pessoa.nome}, mas pode me chamar de ${novosApelidos.apelidos}.`)

// console.log(frase)

//--------------------------------------------//--------------------------------------

//2.a)

// const pessoa1 = {
//   nome: "Lilian",
//   idade: 26,
//   profissao: "Designer"
// }

// const pessoa2 = {
//   nome: "Junior",
//   idade: 31,
//   profissao: "Designer"
// }

// console.log(pessoa1.nome, pessoa1.idade, pessoa1.profissao)
// console.log(pessoa2.nome, pessoa2.idade, pessoa2.profissao)

//b)

// const pessoa1 = {
//   nome: "Lilian",
//   idade: 26,
//   profissao: "Designer"
// }

// const pessoa2 = {
//   nome: "Junior",
//   idade: 31,
//   profissao: "Designer"
// }

// function lista(pessoa1) {
//   const array = [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length]
//   return array
// }

// function lista(pessoa2) {
//   const array = [pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length]
//   return array
// }

// console.log(lista(pessoa1))
// console.log(lista(pessoa2))

//--------------------------------------------//--------------------------------------

//3.

// const carrinho = []

// const fruta1 = {
//   nome: "Maçã",
//   disponibilidade: true
// }

// const fruta2 = {
//   nome: "Melancia",
//   disponibilidade: false
// }

// const fruta3 = {
//   nome: "Manga",
//   disponibilidade: true
// }

// function frutasCarrinho(fruta1, fruta2, fruta3) {
//   carrinho.push(fruta1)
//   carrinho.push(fruta2)
//   carrinho.push(fruta3)
  
//   return carrinho
// }
  
// console.log(frutasCarrinho(fruta1, fruta2, fruta3))
