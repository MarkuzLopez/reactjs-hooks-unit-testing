import React from 'react';

const TodoItem = (props) => {

    const { todo, index, toggleTodo, deleteTodo } = props;

    return (
        <li key={todo.id} className="list-group-item flex-box" >
        <p className={`${todo.done && 'complete'} pointer`} onClick={ () => toggleTodo(todo.id) } >{index + 1}. {todo.desc}</p>
        <button 
        className="btn btn-danger"
        type="button"
        onClick={ () => deleteTodo(todo.id)}
        >Borrar</button>
        </li>
     );
}
 
export default TodoItem;