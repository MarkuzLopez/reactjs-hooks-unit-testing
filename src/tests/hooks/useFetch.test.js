import { renderHook, act, } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Pruebnas de ', () => {

   test('debe de retornar la informacion por defecto ', () => {

       const { result } = renderHook(() => useFetch ('https://www.breakingbadapi.com/api/quotes/1'))
       
       const { data, loading, error } = result.current;
       expect(data).toBe(null);
       expect(loading).toBe(true);
       expect(error).toBe(null); 
   });

   test('Debe traer la informacion', async() => {
    
    const { result , waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    await waitForNextUpdate({timeout: 2000});
    const { data, loading, error } = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
    
    });

    test('deberia de mandar o entrar al catch con una peticion erronea', async() => {

        const { result , waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/api32/users?page=2'));
        await waitForNextUpdate({timeout: 2000});
        const { data, loading, error } = result.current;
    
        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('No se puede cargar la info');
    })
    
    
});
