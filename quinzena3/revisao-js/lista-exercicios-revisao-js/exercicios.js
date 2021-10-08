// EXERCÍCIO 01
function inverteArray(array) {

  let numeros = []
  for (let i = array.length - 1; i >= 0; i--){
    numeros.push (array[i])
  } 
  return numeros
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {

  let numerosParesElevado2 = []
  for (let item of array) {
    if (item % 2 == 0) {
      let elevarPor2 = item * item
      numerosParesElevado2.push(elevarPor2)
    }
  }
  return numerosParesElevado2
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {

  let numerosPares = []
  for (let item of array) {
    if (item % 2 == 0) {
      numerosPares.push(item)
    }
  }
  return numerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {

  let maiorNumero = []
  for (let i = 0; i < array.length; i++) {
    let numero = array[i]
    if(numero > maiorNumero) {
      maiorNumero = numero
    }
  }
  return maiorNumero
}

// EXERCÍCIO 05 
let objeto = []
function retornaQuantidadeElementos(array) {
  return array.length  
} 

// EXERCÍCIO 06
const bool1 = true
const bool2 = false
const bool3 = !bool2
const bool4 = !bool3

function retornaExpressoesBooleanas() {
  var a = bool1 && bool2 && !bool4
  var b = (bool1 && bool2 ) || !bool3
  var c = (bool2 || bool3) && (bool4 || bool1)
  var d = !(bool2 && bool3) || !(bool1 && bool3)
  var e = !(bool1) && !(bool3) || (!bool4 && bool3 && bool3)
  const respostas = [a,b,c,d,e]
  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

  let numerosAnteriores = []

  for (let numero = 0; numerosAnteriores.length < n; numero++)
  if (numero % 2 === 0) {
    numerosAnteriores.push(numero)
  }
  return numerosAnteriores
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a == b && a == c && b == c) {
    return 'Equilátero'
  } else if ((a == b && a != c) || (a == c && a != b) || (b == c && c != a)) {
    return 'Isósceles'
  } else if (a != b && a != c && b != c) {
    return 'Escaleno'
  }
  
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {

  if (num1 > num2) {
    X = num1
  } else {X = num2}
  if (num1 % num2 === 0 || num2 % num1 === 0) {
    Y = true
  } else {Y = false}

  Z = Math.abs(num2 - num1)

  const objeto = {
    maiorNumero: X,
    maiorDivisivelPorMenor: Y,
    diferenca: Z
  }
  return objeto
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  
  let novoArray = []
  for (item of array) {
    let contador = 0
    for (compradoItem of array) {
      if(item > compradoItem){
      contador ++
    }
  }
  novoArray[contador] = item
}
let arrayDosSegundos = [novoArray[novoArray.length-2], (novoArray[1])]
return arrayDosSegundos
}

// EXERCÍCIO 11
function ordenaArray(array) {

  for(let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array

}

// EXERCÍCIO 12
function filmeFavorito() {
  const infos = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }
  return infos
}

// EXERCÍCIO 13
function imprimeChamada() {
  
  let infos = filmeFavorito()
  let filme = `Venha assistir ao filme ${infos.nome}, de ${infos.ano}, dirigido por ${infos.diretor} e estrelado por ${infos.atores[0]}, ${infos.atores[1]}, ${infos.atores[2]}, ${infos.atores[3]}.`

  return filme
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  let retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: (lado1 * lado2),
  }
  return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const newPessoa = {
    nome: 'ANÔNIMO',
    idade: pessoa.idade,
    email: pessoa.email,
    endereco: pessoa.endereco
  }
  return newPessoa
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
