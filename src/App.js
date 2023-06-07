import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Sandeep Patel");
  const [show, setShow] = useState(false);

  const IncrementNumber = () => {
    setNumber(number + 1);

    setName("Ranjeet Patel");
    setShow(!show);
  };
  return (
    <div className="App">
      <h1>{number}</h1>
      {show ? <h1>Show Data</h1> : <h1>Not Show Data</h1>}
      <h1>{name}</h1>
      <button onClick={IncrementNumber}> Increment Click Me</button>
    </div>
  );
}
