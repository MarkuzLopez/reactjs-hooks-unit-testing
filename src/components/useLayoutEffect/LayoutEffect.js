import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './LayoutEffect.css';

const LayoutEffect = () => {

    const { increment, counter } = useCounter(1);
    const { data, } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const { author, quote } = !!data && data[0];
    
    const pTag = useRef();

    useLayoutEffect(() => {
        console.log('hey', pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <>
            <h1>Layout Effect</h1>
            <hr />
            <blockquote className="blockquote text-end">
                    <p ref={pTag} className="mb0">{quote}</p>
            </blockquote>
            <button onClick={increment} className="btn btn-primary">Siguiente</button>
        </>
    );
}

export default LayoutEffect;