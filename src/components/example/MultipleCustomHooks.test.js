import React from 'react';
import { shallow } from "enzyme";
import MultipleCustomHooks from "./MultipleCustomHooks";
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

jest.mock('../../hooks/useFetch.js');
// jest.mock('../../hooks/useCounter.js');


describe('Pruebas en <MultipleCustomHooks />', () => {

    // test('should ', () => {
    //     useCounter.mockReturnValue({
    //         counter: 10,
    //         increment: () => { }
    //     });
        
    // })
    

    test('debe de mostrarse correctamente ', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar la informacion', () => {

        useFetch.mockReturnValue({ 
            data: [{
                author: 'Markuz',
                quote: 'Hola probando'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect( wrapper.find('.alert').exists() ).toBe(false);
        expect( wrapper.find('.mb0').text().trim() ).toBe('Hola probando');
        expect( wrapper.find('footer').text().trim()).toBe('Markuz')
        // expect(wrapper).toMatchSnapshot();

    })
    
    
})
