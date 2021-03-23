import { act, renderHook } from "@testing-library/react-hooks"
import { useForm } from "../../components/useEffect/useForm"

const initialState = { 
    name: 'mark',
    email: 'mark@gmail.com'
}

test('debe de  regresar un formulario por defecto', () => {

  const { result } = renderHook(() => useForm (initialState));
  const [ formValues, onChangeForm, resetForm ] = result.current;

  expect(formValues).toEqual(initialState);
  expect( typeof onChangeForm).toEqual('function');
  expect( typeof resetForm).toEqual('function');

});

test('Debe de cambiar el valor del formulario (cambiar email)', () => {
 
    const { result } = renderHook(() => useForm(initialState));
    const [, handleInputChange] = result.current;

    act(() => {
        handleInputChange({
            target: {
                name: 'name',
                value: 'mark'
            }
        });
    });

    const [values] = result.current;
    expect(values).toEqual({...initialState});
});


test('Debe de cambiar el valor del formulario con el reset', () => {
 
    const { result } = renderHook(() => useForm(initialState));
    const [, handleInputChange, resetForm ] = result.current;

    act(() => {
        handleInputChange({
            target: {
                name: 'name',
                value: 'mark'
            }
        });
        resetForm()
    });

    const [values] = result.current;
    expect(values).toEqual({...initialState});
});

