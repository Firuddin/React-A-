import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return <Child name = "ELi" age= {25}/>
}

function Child(props) {
  return(
    <div>
      <p>ad:{props.name}</p>
      <p>age:{props.age}</p>
    </div>
  )
}
export default App
