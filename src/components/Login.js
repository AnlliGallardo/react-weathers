import React from "react";
import { Form, Button, Container } from 'react-bootstrap';
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";

import {useForm } from '../hooks/useForm';
import {useDispatch} from 'react-redux';
import {loginEmailPassword, loginGoogle, loginSincrono, loginFacebook} from '../action/actionLogin';
import { Link } from "react-router-dom";

function Login() {

    const dispatch = useDispatch();

    const [ values, handleInputChange ] = useForm({
        Email: '',
        Password: ''
    })

    const {Email,Password} = values;

    const handleLogin = (e) => {
       e.preventDefault();
       dispatch(loginSincrono(Email,Password)); 
       dispatch(loginEmailPassword(Email,Password));
       
    }

    const handleGoogle = () => {
         dispatch(loginGoogle());
    }

    const handleFacebook = () => {
        dispatch(loginFacebook());
   }

   const formSchema = Yup.object().shape({
    Email: Yup.string()
      .required("Campo Requerido")
      .email("Correo Electronico Invalido")
      .max(255, `Máximo 255 caracteres`),
    Password: Yup.string()
      .required("Campo Requerido, Mínimo 5 caracteres")
  });

    return (
        <Formik
        initialValues={{
          Email: "",
          Password: ""
        }}
        validationSchema={formSchema}
        onSubmit={(values) => console.log(values)}
      >
          <div className="principal1">
        <Form onSubmit={handleLogin} className="formLogin">
            <h1>Iniciar Sesión</h1>
            <Form.Group className="mb-3 " >
                <Form.Label className="campo">Correo</Form.Label><br/>
                <Field className="formBasicEmail"
                    type="email"
                    placeholder="correo@gmail.com"
                    name="Email"
                    value={Email}
                    onChange={handleInputChange} />
                <ErrorMessage
                    name='Email'
                    component='div'
                    className='field-error text-danger'
                />
                
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className="contraseña">Contraseña</Form.Label>
                <Field className="formBasicPassword"
                    type="password"
                    placeholder="Password"
                    name="Password"
                    value={Password}
                    onChange={handleInputChange} />
                <ErrorMessage
                    name='Password'
                    component='div'
                    className='field-error text-danger'
                />
            </Form.Group>
            <Button className="bootsend" variant="primary" type="submit">
                Enviar
            </Button>

            <Container className="auth__social-networks">
                <Container
                    className="google-btn"
                    onClick={handleGoogle}

                >
                    <Container className="google-icon-wrapper">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </Container>
                </Container>

                <Container
                    className="facebook-btn"
                    onClick={handleFacebook}

                >
                    <Container className="facebook-icon-wrapper">
                    <img className="facebook-icon" src="https://res.cloudinary.com/dky22nhv5/image/upload/v1633275260/mndk57d48ruwaxg3oukp.png" alt="facebook button" />
                    </Container>
                </Container>
            </Container>
            <Link 
            to="/registro" 
            className="registro">
                Registrarse
            </Link> <br/>

        </Form>
        </div>
    </Formik>
    );
}

export default Login;
