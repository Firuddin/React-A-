

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


// function App(props) {
//   let obj = {
//     name: "ALi",
//     age: 25,
//   };
//   return(
//     <>
//     <p>Name: {obj.name}</p>
//     <p>yas: {obj.age}</p>
//     </>
//   )
// }

// export default App


import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');

  const addItem = () => {
    if (newItemPrice && newItemName) {
      setItems([...items, { name: newItemName, price: parseFloat(newItemPrice) }]);
      setNewItemName('');
      setNewItemPrice('');
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Alış-veriş Səbəti</h2>
      
      <div>
        <input 
          type="text" 
          value={newItemName} 
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Məhsul adı"
        />
        <input 
          type="number" 
          value={newItemPrice} 
          onChange={(e) => setNewItemPrice(e.target.value)}
          placeholder="Qiymət"
        />
        <button onClick={addItem}>Əlavə et</button>
      </div>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} AZN
            <button onClick={() => removeItem(index)}>Sil</button>
          </li>
        ))}
      </ul>

      <p>Ümumi məbləğ: {totalPrice.toFixed(2)} AZN</p>
    </div>
  );
}
export default App