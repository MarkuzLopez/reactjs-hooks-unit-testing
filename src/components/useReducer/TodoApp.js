import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';
import { useForm } from '../useEffect/useForm';
import TodoList from './TodoList';
import { TodoForm } from './TodoForm';

const init = () => { 

    return JSON.parse(localStorage.getItem('todos')) || [];
}


const TodoApp = () => {

    // const [ todos, dispatch ] = useReducer(todoReducer, initialState);
    
    // const [ formValues, hadleInputChange ] = useForm({
        //     description: ''
        // });
        
        // const [{ description }, hadleInputChange, resetForm]  = useForm({
            //     description: ''
            // });
            
            
                // const onSubmitTodo = async (e) => {
                //     e.preventDefault();
            
                //     if(!description.trim().length) { 
                //         return;
                //     }
            
                //     const newTodo = {
                //         id: new Date().getTime(),
                //         desc: description,
                //         done: false
                //     };
            
                //     const action = { 
                //         type: 'add',
                //         payload: newTodo
                //     }
            
                //     await dispatch(action)
                //     await resetForm();
                // }
                
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]); 
    

    const toggleTodo = (todoId) => { 
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const hadleAddTodo = (newTodo) => { 
        dispatch({ 
            type: 'add',
            payload: newTodo
        })
    }

    const deleteTodo = (todoId) => { 
        //action
        const action = {
            type: 'delete',
            payload: todoId
        }

        //dispatch
        dispatch(action);
    }
    
    return (
        <div>
            <h1>TodoApp ( {todos.length} )</h1>
            <hr />
            <div className="row">
                <div className="col-8">
                    <TodoList
                        todosArray={todos}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                </div>
                <div className="col-4">
                    <TodoForm 
                     hadleAddTodo={hadleAddTodo}
                    />
                </div>
            </div>
        </div>

    );
}
 
export default TodoApp;