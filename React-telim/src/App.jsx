import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   return < Child name = "ALi" age={25}/>
// }

// function Child(props) {
//   return(
//    <div>
//     <p>ad:{props.name}</p>
//     <p>yas:{props.age}</p>
//    </div>
//   )
// }
// export default App


// function App() {
//   return < Child name="Ali" age = {25}/>
// }

// function Child({name,age}) {
//   return(
//     <div>
//       <p>ad:{name}</p>
//       <p>age:{age}</p>
//     </div>
//   )
// }

// export default App



// function App() {
//   const handleClick=()=>alert("Hello world")
//   return  <Child onClick={handleClick}/>
// }


// function Child({onClick}) {
//   return <button onClick={onClick}>klikle</button>
// }


// export default App


function App(props) {
  let obj = {
    name: "ALi",
    age: 25,
  };
  return(
    <>
    <p>Name: {obj.name}</p>
    <p>yas: {obj.age}</p>
    </>
  )
}

export default App