import React from 'react'
import { useForm } from '../useEffect/useForm';

export const TodoForm = (props) => {
    
    const { hadleAddTodo } = props;
    
    const [{ description }, hadleInputChange, resetForm]  = useForm({
        description: ''
    });

    const onSubmitTodo = (e) => {
        e.preventDefault();

        if(!description.trim().length){ return; }

        const newTodo = { 
            id: new Date().getTime(),
            desc: description,
            done: false   
        }

        hadleAddTodo(newTodo);
        resetForm();
    }

    
    return (
        <>
            <h1>TodoApp</h1>
            <hr />
            <form onSubmit={onSubmitTodo}>
                <input
                    type="text"
                    name="description"
                    placeholder="Aprener..."
                    autoComplete="off"
                    className="form-control"
                    value={description}
                    onChange={hadleInputChange}
                />

                <button
                    type="submit" className="btn btn-primary btn-lg btn-block mt-1">
                    Agreggar
                        </button>
            </form>
        </>
    )
}
