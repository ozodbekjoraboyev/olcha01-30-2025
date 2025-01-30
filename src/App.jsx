import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carusel from './component/Carusel/Carusel'
import Catigores from './component/Catigorya'
import Cardlar from './component/Card/Cards'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>

        <Carusel />
        <Catigores />
        <Cardlar />
     </div>
    </>
  )
}

export default App
