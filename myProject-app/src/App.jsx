import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

const helloworld = <h1>This is dev 1</h1>;
const cars = [
  'audi',
  'bmw',
  'Hyundai'
];

const listCars = cars.map( (car, index) => <li key={index}>{car}</li>);

  return (
    <div>
      {helloworld}
      <ul>
        {listCars}
      </ul>
    </div>
  )
}

export default App
