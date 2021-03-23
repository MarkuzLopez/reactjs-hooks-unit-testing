import { shallow } from "enzyme";
import ExampleRef from "./ExampleRef"

describe('Pruebas en <ExampleRef />', () => {

    const wrapper = shallow(<ExampleRef/>);

    test('debe de mostrarce de manera correctament', () => {
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists() ).toBe(false); // no va existir el componente cuando inicial la app

    });
    
    test('debe de mostrar el componente <MultipleCustomHooks /> ', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists() ).toBe(true);
    })
    
})
