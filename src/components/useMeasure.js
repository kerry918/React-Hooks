import React, { useLayoutEffect, useState, useRef } from 'react'

export default function useMeasure(ref, deps) {
  const [rect, setRect] = useState({}); 

  useLayoutEffect(() => {
    setRect(ref.current.getBoundingClientRect()); 
  }, [deps]); 

  return rect; 
}
