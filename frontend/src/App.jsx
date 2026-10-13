import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import TermekLista from './component/termeklista'
import RendelesekKartya from './component/rendeleslista'

function App() {

  return (
    <>
      <TermekLista />
      <RendelesekKartya/>
    </>
  )
}

export default App
