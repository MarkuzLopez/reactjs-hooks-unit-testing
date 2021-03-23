import React from 'react'
import { shallow, mount } from "enzyme"
import TodoApp from './TodoApp'
import { demoTodos } from '../../tests/fixtures/demosTodos';
import { act } from '@testing-library/react';

describe('Prueba unitaria TodoApp', () => {
    
    const wrapper = shallow(
        <TodoApp />
    );

    //obtienedo datos del storage
    Storage.prototype.setItem = jest.fn(() => {});

    test('deberia de realizar el snapshot ', () => {
       expect(wrapper).toMatchSnapshot(); 
    });
    
    test('debe de agregar un TODO', () => {
        
        const wrapper = mount(<TodoApp />)//engloba a todo el componente

        act(() => { 
            wrapper.find('TodoForm').prop('hadleAddTodo')(demoTodos[0]);
            wrapper.find('TodoForm').prop('hadleAddTodo')(demoTodos[1]);
        });
        // console.log(wrapper.find('h1').html());
        // expect(wrapper.find('h1').text().trim() ).toBe('TodoApp ( 2 )');
        expect(localStorage.setItem ).toHaveBeenCalledTimes(2);
    });

    test('deberia de eliminar un TODO', () => {
        
        wrapper.find('TodoForm').prop('hadleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('deleteTodo')(demoTodos[0]);

        expect(wrapper.find('h1').text().trim() ).toBe('TodoApp ( 1 )');
    });
    
    
})
