import { shallow } from 'enzyme'
import React from 'react'
import { demoTodos } from '../../tests/fixtures/demosTodos'
import TodoList from './TodoList'

describe('Pruebas unitaria de componente TodoList', () => {
    
    const toggleTodo = jest.fn();
    const deleteTodo = jest.fn();

    const wrapper = shallow(
        <TodoList 
            todosArray={demoTodos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
        />
    );

    test('dene de crear el toMatchSnapshot y mostrarse correctamene ', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de tener dos <TodoListItem />', () => {
        
        expect(wrapper.find('TodoItem').length).toBe(demoTodos.length);
        // console.log(wrapper.find('TodoItem').at(0).props()); // para ver todo lo que tiene los props
        expect(wrapper.find('TodoItem').at(0).prop('deleteTodo')).toEqual(expect.any(Function)) // que espero cualquier funcion toEqual();
    });

    
    
})
