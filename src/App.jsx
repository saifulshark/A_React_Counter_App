import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(1);//useState can handle objects and arrays as well.
  const onclickHandler_increment = () => {
          console.log(count);
          setCount(count + 1);
        }
  const onclickHandler_decrement = () => {
          console.log(count);
          setCount(count - 1);
        }
  return (
    <>
      <div className='App'>
        <h1>saifulire</h1>
        {/* //onClick event handlers is a Reaact Synthetic event handler. onclick is Browser based. */}
        <button className='btn' onClick={() => alert('Button clicked!')}>Click Me to see Alert from Browser.</button>
        <button className='btn' onClick={() => console.log(`Button clicked ${count} times`)}>Click Me to see Log in Console with Count.</button>
        <br></br>
        <button onClick={onclickHandler_increment}>Counter Increment: - </button>
        <span style={{ border: '5px solid red' }}>{count}</span>
        <button onClick={onclickHandler_decrement}>- :Counter Decrement </button>
        
        <p>This is a simple React application.</p>
      </div>
    </>
  )
}

export default App
