import React, { useState } from 'react'
import TelaInicial from './components/TelaInicial/TelaInicial'
import TelaMatch from './components/TelaMatch/TelaMatch'


const App = (props) => {
  const [tela, setTela] = useState("inicial")

  const trocaTela = (tela) => {
    setTela(tela)
  }

  const renderizarTela = () => {
    switch(tela){
      case "inicial":
        return <TelaInicial trocaTela = {trocaTela} />
      case "match":
        return <TelaMatch trocaTela = {trocaTela} />
      default: 
        return null
    }
  }


  return (
    <div>
        {renderizarTela ()}
    </div>
  );
}

export default App;
