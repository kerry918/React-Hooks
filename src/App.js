import React, {useState} from "react";
import Effect from "./components/Effect";
import State from "./components/State";

function App() {
  // can have multiple useState
  const [{ count, count2 }, setCount] = useState({count: 10, count2: 20}); 

  // ... currentState: copy over the original values 
  return (
    <>
      <div>
        <button onClick={() => setCount(currentState => ({ ...currentState, count: currentState.count + 1}))}>+</button>
        <div>count 1: {count}</div>
        <div>count 2: {count2}</div>
      </div> 
      <State/>
      <Effect/>
    </>
  );
}

export default App;
