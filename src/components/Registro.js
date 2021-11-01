import { Form, Button } from 'react-bootstrap';

import * as Yup from "yup";

import { useForm } from '../hooks/useForm';
import {registroEmailPasswordNombre} from '../action/actionRegistro';
import {useDispatch} from 'react-redux'
import { ErrorMessage, Field, Formik } from 'formik';
import { Link } from 'react-router-dom';


export const Registro = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        nombre: '',
        Email: '',
        Pass1: '',
        Pass2: ''
    });

    const { nombre, Email, Pass1, Pass2 } = formValues;

    const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(registroEmailPasswordNombre(Email, Pass1, nombre))
    }

    const formSchema = Yup.object().shape({
        Email: Yup.string()
          .required("Campo Requerido")
          .email("Correo Electronico Invalido"),
        Pass1: Yup.string()
          .required("Campo Requerido, Mínimo 5 caracteres."),
        Pass2: Yup.string()
          .required("Campo Requerido, Debe ser igual al campo anterior."),
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
        <div className="principal">
            
            <Form onSubmit={handleRegistro} className="formRegistro">
            <h1 className="RegisNos">Registrese Con Nosotros</h1>
                <Form.Group className="mb-3 campname">
                    <Form.Label>Nombre</Form.Label>
                    <Field className="formBasicName"
                        type="text"
                        placeholder="Nombre"
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="campoemail">Correo</Form.Label>
                    <Field className="formEmailRegistro"
                        type="email"
                        placeholder="correo@gmail.com"
                        name="Email"
                        value={Email}
                        onChange={handleInputChange}
                    />
                    <ErrorMessage
                        name='Email'
                        component='div'
                        className='field-error text-danger'
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="camppassword">Contraseña</Form.Label>
                    <Field className="formBasicPasswordRegistro"
                        type="password"
                        placeholder="Password"
                        name="Pass1"
                        value={Pass1}
                        onChange={handleInputChange}
                    />
                    <ErrorMessage
                        name='Pass1'
                        component='div'
                        className='field-error text-danger'
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="camprepita">Repita contraseña</Form.Label>
                    <Field className="formBasicRepitPassword"
                        type="password"
                        placeholder="Password"
                        name="Pass2"
                        value={Pass2}
                        onChange={handleInputChange}
                    />
                    <ErrorMessage
                        name='Pass2'
                        component='div'
                        className='field-error text-danger'
                    />
                </Form.Group>


                <Button className="registrosend" variant="primary" type="submit">
                    Registrarse 
                </Button> {""}

                <Link className="voolver btn btn-success" type="button" to="/">
                    Volver
                </Link> <br />

            </Form>

        </div>
    </Formik>
    )
}