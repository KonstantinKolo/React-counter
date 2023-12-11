import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    setCounter(counter + 1);
  }
  const handleClick2 = () => {
    setCounter(counter - 1);
  }
  const handleClick3 = () => {
    setCounter(counter * 2);
  }

  return (
    <>
      <div
      className='divBody'>
        Counter App
        
        <div
        className='counter'>
        {counter}
        </div>

        <div className="buttons">
          <button className='addButton'
            onClick={handleClick1}
          >
          Increment
          </button>

          <button
            className='removeButton'
            onClick={handleClick2}>
            Decrement
          </button>

          <button
          className='multButton'
          onClick={handleClick3}
          >Multiply</button>
        </div>
      </div>
    </>
  )
}

export default App;