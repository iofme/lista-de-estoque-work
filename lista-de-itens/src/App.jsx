import { useState } from 'react'
import './Styles/Reset.css'
import './Styles/Header.css'
import './App.css'
import Header from './comments/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
    </>
  )
}

export default App
