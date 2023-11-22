import { useState } from 'react'
import Navbar from './components/layouts/Navbar'
import Home from './components/layouts/Home'
import Collection from './components/layouts/Collection'
import BestSell from './components/layouts/BestSell'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>  
      <Home/>
      <Collection/>
      <BestSell/>
    </>
  )
}

export default App
