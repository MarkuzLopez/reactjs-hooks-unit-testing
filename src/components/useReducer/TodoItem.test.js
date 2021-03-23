import { shallow } from "enzyme";
import { demoTodos } from '../../tests/fixtures/demosTodos';
import TodoItem from "./TodoItem";

describe('pruebas del componente todoList', () => {
    const  toggleTodo = jest.fn();
    const deleteTodo = jest.fn();
    const wrapper = shallow(
        <TodoItem
            todo={demoTodos[0]}
            index={0}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
        />
    )


    test('debe de crear snapshots y mostrarse correctamente', () => {
       expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar la funcion de deleteToggle ', () => {

        wrapper.find('button').simulate('click');
        expect(deleteTodo).toHaveBeenCalledWith(demoTodos[0].id);
    });
    
    test('debe de llamar la funcion de toggleTodo', () => {
        
        wrapper.find('p').simulate('click');
        expect(toggleTodo).toHaveBeenCalledWith(demoTodos[0].id);
    });
    
    test('debe de mostrar el texto correctamente ', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`);
    });
    
    test('debe de tener la clase complete si el TODO.done =  true', () => {
        const todo = demoTodos[0];
        todo.done =  true;

        const wrapper =  shallow(
            <TodoItem 
                todo={todo}
            />
        );

        // console.log(wrapper.html());
        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    })
    
})
