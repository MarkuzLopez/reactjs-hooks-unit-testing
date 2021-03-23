import { mount } from 'enzyme'
import React from 'react'
import { LoginScreen } from './LoginScreen'
import { UserContext } from './UserContext'

describe('Pruebas unitarias en LoginScreen ', () => {

    const setUser = jest.fn()

    const wrapper = mount(
        <UserContext.Provider value={{ setUser }}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('debe mostrarse correctamente con snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de ejecutar el setUser con el argumento esperado', () => {

       wrapper.find('button').prop('onClick')();

        expect( setUser ).toHaveBeenCalledWith({
            id: 124,
            name: 'Markuz'
        });
       
    });
    
})
