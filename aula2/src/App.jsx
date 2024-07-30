import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Frase from './components/Frase'
import Mensagem from './components/Mensagem'
import Calculadora from './components/Calculadora'

function HelloWorld(){
  return <p>HelloWorld</p>
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HelloWorld></HelloWorld>
    <Mensagem texto="helloWorld"></Mensagem>
    <Frase></Frase>
    <Calculadora/>
    </>
  )
}

export default App
