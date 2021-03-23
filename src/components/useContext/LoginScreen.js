import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    // obtener la referencia al userContext
    const { setUser} = useContext(UserContext);
    // setUser

    // creearobjeto
    const addObjectSetUser = () => { 
        setUser({
            id: 124,
            name: 'Markuz'
        });
    }

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />
            <button 
            className="btn btn-primary"
            onClick={ () => addObjectSetUser() }
            >
                Login
            </button>
        </div>
    )
}
