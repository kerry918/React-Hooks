import React, {useEffect} from 'react'; 
import useFetch from './useFetch';
import useForm from './useForm';

export default function Effect() {
  const [values, handleChange] = useForm({email: '', password: ''}); 

  // second parameter is the dependency array
  useEffect(() => {
    const onMouseMove = e => {
      console.log(e); 
    }
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [values.password]); 

  // can have multiple useEffect, and it will render in order

  useFetch("https://numbersapi.com/43/trivia"); 
  return (
    <div>
      <input 
        name='email' 
        value={values.email} 
        // onChange={e => setEmail(e.target.value)}
        onChange = {handleChange}
      />
      <input 
        type='password' 
        name='password'
        value = {values.password}
        // onChange={e => setPassword(e.target.value)}
        onChange = {handleChange}
      />
    </div>
  )
}
