import React, {useLayoutEffect, useRef} from 'react'

export default function Ref() {
  const inputRef = useRef();  // will not cause a re-render
  const renders = useRef(0);  // can be number, object, function

  console.log("hello renders: ", renders.current++); 

  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect());  // returns the dimension and position of the DOM object
  }, []); 

  return (
    <div>
      <input ref={inputRef} name="email" />

      <button onClick={() => {
        console.log(inputRef.current); // reference to the DOM node

        inputRef.current.focus();  // focus on the input 
      }}>focus</button>
    </div>
  )
}
