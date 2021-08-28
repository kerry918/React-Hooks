import React, { useCallback, useMemo, useState } from 'react'
import useFetch from './useFetch';

// compute longest word (one way to reduce render)
const computeLongestWord = (arr) => {
  if (!arr) {
    return []; 
  }
  console.log("compute longest word")
  let longestWord = ''; 


  JSON.parse(arr).forEach(sentence => {
    sentence.split(' ').forEach(word => {
      if (word.length > longestWord.length){
        longestWord = word; 
      }
    })
  });

  return longestWord; 
}

export default function Memo() {
  const [count, setCount] = useState(0); 
  const {data} = useFetch(''); 

  // compute longest word
  const computeLongestWord = useCallback((arr) => {
    if (!arr) {
      return []; 
    }
    console.log("compute longest word")
    let longestWord = ''; 


    JSON.parse(arr).forEach(sentence => {
      sentence.split(' ').forEach(word => {
        if (word.length > longestWord.length){
          longestWord = word; 
        }
      })
    });

    return longestWord; 
  }, []); 

  const longestWord = useMemo(() => computeLongestWord(data), [data]); 

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>{longestWord}</div>
    </div>
  )
}
