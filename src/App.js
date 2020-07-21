import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const product = [
    { name: "samsung", price: "$100" },
    { name: "nokia", price: "$80" },
    { name: "redmi", price: "$50" },
    {name : "htc" , price : "$90"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <CallUser></CallUser>

        {
          product.map(pd => <ProductInt myproduct = {pd}></ProductInt>)
      }
      </header>
    </div>
  );
}




function ProductInt(props) {
  const { name, price } = props.myproduct
  return (
    <div>
      <h1>name:{name}</h1>
      <h2>price :{price}</h2>
    </div>
 )
}

function Counter() {
  const [count, setCount] = useState(0)
  const clickHandeler = () => {
    const newCount = count + 1;
    setCount(newCount)
  }
  return (
    <div>
      <h1>count : {count} </h1>
      <button onClick = {clickHandeler}>click</button>
    </div>
  )
}

function CallUser() {
  const [users, setUser] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  return (
    <div>
      <h1>Dynamic user:{users.length}</h1>
      {
        users.map(myUser => <li>{myUser.phone}</li>)
      }
    </div>
    )
}




export default App;
