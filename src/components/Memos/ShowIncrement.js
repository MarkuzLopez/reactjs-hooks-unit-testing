import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {

    console.log('me volvi a generar');

    const incrementar = () => { 
        increment(5);
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={incrementar}>Incrementar</button>
        </div>
    )
}
)