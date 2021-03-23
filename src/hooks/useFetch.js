import React, { useEffect, useState, useRef } from 'react'

export const useFetch = ( url ) => {

    const [state, setState] = useState({ data: null, loading: true, error: null});

    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {

        setState({data: null, loading: true, error: null})

        fetch(url)
        .then(resp => resp.json())
        .then(data => {
                if(isMounted.current) {
                    setState({
                        data,
                        loading: false,
                        error: null
                    });
                }
        })
        .catch(() => { 
            setState({
                data: null,
                loading: false,
                error: 'No se puede cargar la info'
            })
        })

    }, [url]);

    return state;
}
