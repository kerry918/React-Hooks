import React from 'react'
import useForm from './useForm';

function State() {
  // const [email, setEmail] = useState(""); 
  // const [password, setPassword] = useState(""); 
  const [values, handleChange] = useForm({email: '', password: ''}); 

  return (
    <div>
      hi
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

export default State;

