import React, {useState, useEffect} from 'react';

const Car = () => {

    const [started, setstarted] = useState(false)
    const [ countKm, setCountKm ] = useState(0)

    useEffect (() => { 
        document.title = `coche ${started} `
    }, [started]);

    const checkAuto = () => { 
        if(started) { 
            return <span style={{color: 'green'}} >Encendido</span>
        }
        return <span style={{color: 'red'}} >Apagado</span>
    }

    const incrementKm = (num) => { 
        if(started) { 
            setCountKm(countKm + num)
        } else { 
            alert('el auto se encuentra apagado')
        }
    }

    return (  
        <React.Fragment>
            <div>
                <h2>Utilizando Hooks en estatus: {checkAuto()}</h2>
                <button onClick={ () => {
                    setstarted(!started)
                } } >Click Aqui</button>
                <br /><br />
                <h3>Kilometro recorrido { countKm }</h3>
                <button onClick={ () => { incrementKm(5) }} >Aumentar kilometros</button>
            </div>
        </React.Fragment>
    );
}
 
export default Car;