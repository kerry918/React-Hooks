import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const login = async () => {
  return {
    id: 4, 
    username: "bob", 
    email: "bob@bob.com"
  }; 
}

export default function Index() {
  const {user, setUser} = useContext(UserContext); 

  return (
    <div>
      Home
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (<button onClick={() => {
        //call logout
        setUser(null); 

      }}>logout</button> ) : 
      (<button 
        onClick={async () => {
          const user = await login(); 
          setUser(user); 
        }}
        >
          Login
        </button>
      )}
    </div>
  )
}
