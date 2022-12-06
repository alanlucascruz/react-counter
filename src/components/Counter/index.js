import { useState } from "react";
import "./styles.css";

function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <button onClick={() => decrementCount()}>Remover</button>
      <h1>{count}</h1>
      <button onClick={() => incrementCount()}>Adicionar</button>
    </div>
  );
}

export default Counter;
