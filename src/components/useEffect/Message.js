import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [cors, setCors] = useState({x: 0, y: 0});

    const { x, y } = cors;

    useEffect(() => {
        const mouseMove = (e) => {
            const coors = { x: e.x, y:e.y };
            setCors(coors);
        }
        window.addEventListener('mousemove', mouseMove)
        // console.log('componente montado');
        return () => {
            // console.log('componente desmontado');
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [ ])

    return (
        <div>
            <h1>Animo Campeon</h1>
            <p> x: {x} y:{y}</p>
        </div>
    )
}
