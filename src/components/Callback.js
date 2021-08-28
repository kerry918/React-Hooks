import React, {useState, useCallback} from 'react'

export default function Callback() {
  const [count, setCount] = useState(0); 
  const favoriteNUms = [7, 21, 37]; 

  const increment = useCallabck((n) => {
    setCount(count + n);  
    // can return something
  }, [count, setCount]); 

  return (
    <div>
      <div>count: {count}</div>
      {favoriteNUms.map(n => {
        return (
          <Square onClick={() => increment(n)}/>
        )
      })}
    </div>
  )
}
