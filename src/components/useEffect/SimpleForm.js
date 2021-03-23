import React, { useState, useEffect } from 'react';
import './effect.css';
import { Message } from './Message';

const SimpleForm = () => {
   
    const [stateForm, setStateForm] = useState({
        name: '',
        email: ''
    });

    const { name, email } = stateForm;

    const onChangeForm = ({ target }) => {
        setStateForm({
            ...stateForm,
            [target.name] : target.value
        })

    }

    useEffect( () => { 
        // console.log('hey');
    }, []);

    useEffect(() => { 
        // console.log('se cambia formState');
    }, [stateForm]);

    useEffect(() => { 
        // console.log('se cambia email');
    }, [email]);
    
    return (  
        <>
            <h1>UsseEffect</h1>
            <hr />
            <div className="form-group">
                <input 
                type="text" 
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={onChangeForm}
                 />
            </div>
            <div className="form-group">
                <input 
                type="text" 
                name="email"
                className="form-control"
                placeholder="mar@gmail.com"
                autoComplete="off"
                value={email}
                onChange={onChangeForm}
                 />
            </div>

            { (name === '123') && <Message /> }
        </>
    );
}
 
export default SimpleForm;