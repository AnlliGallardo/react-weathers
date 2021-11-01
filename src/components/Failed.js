import React from 'react';
import PropTypes from 'prop-types';

const Failed = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m6  offset-m3">
                    <div className="card-panel red darken-4 error">
                        {props.mensaje}
                    </div>
                </div>
            </div>
        </div>
    );
}

Failed.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Failed;
