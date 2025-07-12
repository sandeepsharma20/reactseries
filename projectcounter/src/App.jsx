import { useState } from 'react';
import './App.css'

function App() {
 let [counter,setCounter] =useState(0)
 //let counter=0;

 const addValue=()=>{
 // counter=counter+1;
setCounter(counter+=1)
  
 }
const removeValue=()=>{
  setCounter(counter=counter-1);
}
  return (
    <>
<h1>chai aur react</h1>
<h2>counter value: {counter}</h2>
<button
onClick={addValue}
>Add value</button>
<br />
<button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
