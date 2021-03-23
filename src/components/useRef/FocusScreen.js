import React, { useRef } from 'react';

const FocusScreen = () => {

    const inputRef = useRef();

    const useRefHook = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen </h1>
            <hr />
            <input className="form-control" placeholder="su nombre" ref={inputRef} />
            <button onClick={useRefHook} className="btn btn-lg btn-outline-primary mt-3">Focus</button>
        </>
    );
}
 
export default FocusScreen;