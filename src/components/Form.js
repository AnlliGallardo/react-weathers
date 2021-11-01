import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

    ciudadReferencia = React.createRef();
    paisReferencia   = React.createRef();

    searchWeathers = (e) => {
        e.preventDefault();

        const res = {
            'ciudad':this.ciudadReferencia.current.value,
            'pais':this.paisReferencia.current.value
        }
       
        this.props.datosConsulta(res);
    }

    render() {
        return (
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.searchWeathers}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input ref={this.ciudadReferencia} className="inputcity" type="text" />
                                <h1 htmlFor="ciudad" className="city">Ciudad</h1>
                            </div>

                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input ref={this.paisReferencia} className="inputcountry" type="text" />
                                <h1 htmlFor="pais" className="country">País</h1>
                            </div>

                            <div className="input-field col s12 m8 l4 offset-2 buscador">
                                <input type="submit" className="button-search" value="Buscar..."/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Form.propTypes = {
    datosConsulta: PropTypes.func.isRequired
}

export default Form;