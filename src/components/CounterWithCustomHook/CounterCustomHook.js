import React from 'react';
import { useCounter } from '../../hooks/useCounter';


const CounterCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(100);

    return ( 
        <>
            <h1>Counter with Hook {state} </h1>
            <hr />
            <button onClick={ () => increment(2)} className="btn btn-primary"> +1 </button>
            <button onClick={ () => decrement(2)} className="btn btn-info"> -1 </button>
            <button onClick={ reset } className="btn btn-info"> Reset </button>
        </>
     );
}
 
export default CounterCustomHook;