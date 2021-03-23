import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';

const MemoHook = () => {

   const { counter, increment } =  useCounter(500);
   const [show, setShow] = useState(true);

   const procesoPesado = (iteraciones ) => { 
       for (let i = 0; i < iteraciones; i++) {
           console.log('ahi vamos....');
       }

       return `${iteraciones} iteraciones realizadas`;
   }

   const memoProcesado = useMemo(() => procesoPesado(counter), [counter] );

    return (
        <>
            <h1>MemoHook: {counter}</h1>
            <hr />
            <p>{memoProcesado}</p>
            <button className="btn btn-primary" onClick={increment} >+1</button>
            <button className="btn btn-outline-primary ml-3" onClick={ () => { setShow(!show) }} > Show/Hide { JSON.stringify(show)}</button>
        </>
    );
}
 
export default MemoHook;