import React, { useState, useEffect } from 'react';
import { useForm } from './useForm';

const FormWithCustomHook = () => {
   
    const [valuesForm, onChangeForm ] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = valuesForm;


    const onSubmitForm = (e) =>{ 
        e.preventDefault();
        console.log(valuesForm);
    }

    return (  
        <form onSubmit={onSubmitForm} >
            <h1>FormWithCustomHook</h1>
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

            <div className="form-group">
                <input 
                type="password" 
                name="password"
                className="form-control"
                placeholder="*****"
                autoComplete="off"
                value={password}
                onChange={onChangeForm}
                 />
            </div>

            <button className="btn btn-primary">Guardar</button>
        </form>
    );
}
 
export default FormWithCustomHook;