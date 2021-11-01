import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WeathersApp extends Component {
    
    mostrarResultado = () => {
        const {name, weather, main} = this.props.resultado;

        if(!name || !weather || !main){
            return null;
        }

        const urlIcon = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
        const alt = `clima de ${name}`;

        return (
            <div className="row">
                <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
                    <div className="card-panel light-blue align-center">
                        <span className="white-text ">
                            <h2>{name} </h2>
                            <p className="temperatura">
                                Actual: {main.temp} &deg;C
                                <img src={urlIcon} alt={alt} />
                            </p>
                            <p> Max. {main.temp_max}</p>
                            <p> Min. {main.temp_min}</p>

                        </span>

                    </div>

                </div>

                
            </div>
        )
    }
    
    render() {
        
        return (
            <div className="container">
                {this.mostrarResultado()}
            </div>
        );
    }
}

WeathersApp.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default WeathersApp;