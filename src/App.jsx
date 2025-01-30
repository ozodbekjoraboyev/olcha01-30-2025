import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Carusel from './component/Carusel/Carusel'
import Catigores from './component/Catigorya'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
        <Navbar />
        <Carusel />
        <Catigores />
     </div>
    </>
  )
}

export default App
