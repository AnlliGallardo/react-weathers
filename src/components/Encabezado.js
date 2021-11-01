import React from 'react';
import PropTypes from 'prop-types';

const Encabezado = (props)=>{
    return (
        <div>
            <nav>
                <header>
                    
                        <h1 className="title"> {props.titulo} </h1>
                    
                </header>
            </nav>
        </div>
    );
}

Encabezado.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Encabezado;