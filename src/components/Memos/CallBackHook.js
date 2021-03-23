import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

const CallBackHook = () => {

    const [counter, setcounter] = useState(10);

    // const increment = () => { 
    //     setcounter(counter + 1 );
    // }

    const increment = useCallback((num) => {
        setcounter(c => c + num);
    }, [setcounter])

    return (
        <>
            <h1>UseCallback: { counter }</h1>
            <hr />
            <ShowIncrement increment={increment} />
        </>
    );
}
 
export default CallBackHook;