import React from 'react'

export default function Saludar(props) {
    console.log('aqui ', props);
    const { nombre, holaMundo } = props;
    return (
        <React.Fragment>
            <div>
                <p>{nombre}</p>
            </div>
            <div>
                <button onClick={ () => holaMundo(nombre)} >Enviar</button>
            </div>
        </React.Fragment>
    )

}