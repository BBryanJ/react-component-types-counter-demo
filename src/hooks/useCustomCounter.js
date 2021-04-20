import { useState } from "react";

function useCustomCounter(initalValue = 0) {
  const [count, setCount] = useState(initalValue);

  const incrementFunction = () => {
    setCount(prevCount => prevCount + 1);
  }

  const decrementFunction = () => {
    setCount(prevCount => prevCount - 1);
  }

  return [count, incrementFunction, decrementFunction];
}

export default useCustomCounter;