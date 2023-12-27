import React, { useReducer, useState } from 'react'
import reducer from './reducer';

const UseReducerHook = () => {
  const initialValue = 0;
  const [count, dispatch] = useReducer(reducer, initialValue)
  return (
     <div>
    <h1>Use Reducer Hook</h1>
    <div className="card">
      <button onClick={() => dispatch({type:"DEC"})}>
        -
      </button>
      {count}
      <button onClick={() => dispatch({type:"INC"})}>
        +
      </button>
    </div>
  </div>
  )
}

export default UseReducerHook