import React from 'react'

import useCustomCounter from '../hooks/useCustomCounter';

export default function CounterCustomHooks() {

  const [count, increment, decrement] = useCustomCounter(0);

  return (
    <div>
      <h1>Counter with Custom Hooks</h1>
      <h3>{count}</h3>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}
