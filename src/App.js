import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);  
  }

  function decrease() {
    setCounter(counter - 1);
  }

  function reset() {
    setCounter(0);
  }
  
  return (
    
    // html with some js (curly braces)

    <div className="App">
        <h1
          className={`counter-${counter < 0 ? "negative" : counter > 0 ? "positive" : "negative"}`}
          style={{ fontSize: 24 + counter + 5 }}
        >
          {counter}
        </h1>
        {/* </h1><h1 classname={'counter-positive'}>{counter}</h1> */}
        <h2>The next number is {counter +1}</h2>  
        <button onClick={increase}>Increment</button>
        <button onClick={decrease}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <div className="message">
          {counter === 0 && <p>Counter is at zero</p>}
    </div>
    </div>
  );
}

export default App;