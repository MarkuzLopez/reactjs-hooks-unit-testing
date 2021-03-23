import React from 'react'
import TodoItem from './TodoItem';


const TodoList = (props) => {
    const { todosArray, toggleTodo, deleteTodo } = props;
    return (
        <ul className="list-group list-group-flush">
        { 
            todosArray.map((todo, index) => (
                <TodoItem
                key={todo.id}
                todo={todo}
                index={index}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                />
            ))
        }
        </ul>
     );
}
 
export default TodoList;