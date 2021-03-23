import React, { useState } from 'react';
import MultipleCustomHooks from '../example/MultipleCustomHooks';

const ExampleRef = () => {

    const [show, showState] = useState(false)

    const hideShow = () => {
        showState(!show)
    }

    return (  
        <>
            <h1>Ref</h1>
            <hr />
            { show && <MultipleCustomHooks /> }
            <br />
            <button className="btn btn-primary mt-5" onClick={hideShow}>Show/Hide</button>
        </>
    );
}
 
export default ExampleRef;