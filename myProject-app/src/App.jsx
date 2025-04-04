import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

const helloworld = <h1>This is dev 2 helloworld</h1>;
const fruits = [
  'orange',
  'apple',
  'Grape'
];

const listFruits = fruits.map( fruit => <li>{fruit}</li>);

  return (
    <div>
      {helloworld}
      <ul>
        {listFruits}
      </ul>
      
    </div>
  )
}

export default App
