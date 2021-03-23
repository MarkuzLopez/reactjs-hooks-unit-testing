import React, { useState } from 'react';
import  Routex from './Routex';
import { UserContext } from './UserContext';

export const MainApp = () => {

    const [user, setUser] = useState({});

    return (
        <UserContext.Provider
            value={{ 
                user,
                setUser
            }}
        >
            <Routex />
        </UserContext.Provider>
    )
}
