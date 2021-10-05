/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo(a) ao jogo de Blackjack")

let jogo = confirm("Quer iniciar uma nova rodada?")

if (jogo) {
   let carta1Jogador = comprarCarta()
   let carta2Jogador = comprarCarta()
   let carta1Computador = comprarCarta()
   let carta2Computador = comprarCarta()

   let pontosJogador = carta1Jogador.valor + carta2Jogador.valor
   let pontosComputador = carta1Computador.valor + carta2Computador.valor

   console.log(`Jogador - cartas: ${carta1Jogador.texto} ${carta2Jogador.texto} - ${pontosJogador}`)
   console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - ${pontosComputador}`)

if (pontosJogador > pontosComputador) {
   console.log("Você ganhou!")
} else if (pontosComputador > pontosJogador) {
   console.log("O computador ganhou!")
} else if (pontosJogador === pontosComputador) {
   console.log("Empate!")
}

} else {
   console.log("O jogo acabou")
}