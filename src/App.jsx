import { useState } from 'react'
import BrandAffinityDemo from './components/BrandAffinityDemo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <BrandAffinityDemo />
    </main>
  )
}

export default App
