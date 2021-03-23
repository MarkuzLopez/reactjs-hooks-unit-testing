 import React, { useContext } from 'react'
import { UserContext } from './UserContext'
 
 export const AboutScreen = () => {

    const { setUser, user } = useContext(UserContext);

    const logOut = () => {
        setUser({});
    }

     return (
         <div>
             <h1>About Screen</h1>
             <hr />
             <pre>
                 { JSON.stringify(user, null, 3) }
             </pre>
             <button 
                className="btn-danger btn"
                onClick={logOut}
             >
                 LogOut
             </button>
         </div>
     )
 }
 