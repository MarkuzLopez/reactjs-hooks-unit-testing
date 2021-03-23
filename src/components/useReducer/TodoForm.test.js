import { shallow } from "enzyme"
import { TodoForm } from "./TodoForm"

describe('pruebas todo form',  () => {
    
    const hadleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoForm
            hadleAddTodo={hadleAddTodo}
        />
    );

    test('debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('NO debe de llamar hadleAddTodo sin valores', () => {
        
        const formSubmit = wrapper.find('form').prop('onSubmit');
        
        formSubmit({ 
            preventDefault(){ }
        });

        expect(hadleAddTodo).toHaveBeenCalledTimes(0);

    });

    test('debe de llamar la funcion hadleAddTodo con valores8', () => {
        
        const value = 'Aprende React';

        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });
        
        expect(hadleAddTodo).toHaveBeenCalledTimes(1);

        expect(hadleAddTodo).toHaveBeenCalledWith(expect.any(Object) );
        expect(hadleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number), // no me importa su valor solo que sea numero
            desc: value,
            done: false
        });

        // se ejecuta el resetForm
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
    
    
})
