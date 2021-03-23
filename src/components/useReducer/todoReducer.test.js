import { demoTodos } from "../../tests/fixtures/demosTodos";
import { todoReducer } from "./todoReducer"


describe('Pruebas de todoReducer', () => {
    test('debe de retornar el estado por defecto', () => {
        
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos)
    });

    test('debe de agregar un TODO ', () => {
        const newTodo = { 
            id: 3,
            desc: 'Aprende mas sobre la logica',
            done: false
        }

        const action =  { 
            type: 'add',
            payload: newTodo
        }

        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test('debe de eliminar todo', () => {
        const  todoId = 1;

        const action = { 
            type: 'delete',
            payload: todoId
        }

        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(1)
        expect(state).toEqual([demoTodos[1]]);
    });

    test('debe de hacer el toggle', () => {
        const action = { 
            type: 'toggle',
            payload: 1
        }

        const state = todoReducer(demoTodos, action);
        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);
    });

});
