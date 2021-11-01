import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeWeathers, Delete, Edit, WeathersNew } from '../action/actionWeathers'
import { useForm } from '../hooks/useForm'
import Navbar1 from './Navbar1'


const Weathers = () => {
    const dispatch = useDispatch()
    const {weathers} = useSelector(state => state.weathers)

   
    const [values, handleInputChange, reset,setValues] = useForm({
            id: '',
            dia:'',
            fecha: '',
            ciudad: '',
            pais: '',
            tipoClima: ''
    })

    const [error, setError] = useState(false)
    const [editForm, setEditForm] = useState(false)

    const {id, dia, fecha, ciudad, pais, tipoClima } = values

    const handleOnSubmit =  (e) => {
        e.preventDefault() 
    }

    const handleAdd = () => {
      dispatch(WeathersNew(values))
    }
    

    const handleDelete = async(id) => {
        dispatch(Delete(id))
        console.log('id',id);
    }

    const handleEdit = (weathers) => {
        dispatch(activeWeathers(weathers.id, weathers))
        setEditForm(true)
        setValues({
          ...weathers
        })
       
    }

    const handlePut = async() => {
      dispatch(Edit(values))
      reset()
      setEditForm(false)
    }

    
    
    return (
        <div className="container mt-5">
            <Navbar1/>
            <h1>Climas Registrados</h1>
            <hr />
            <div className="row">
                <div className="col-8">
                    <h3 className="text-center">Listas de Climas</h3>
                    <ul className='list-group'>
                        {
                            weathers.map(data =>(
                                <li className="list-group-item" key={data.id}>
                                <span>{data.dia}</span>
                               
                                <button
                                    className="btn btn-warning btn-sm float-end me-1"
                                    onClick={() => handleEdit(data)}>
                                    Editar
                                </button>
                                <button className="btn btn-danger btn-sm float-end me-1"
                                    onClick={() => handleDelete(data.id)}
                                >
                                    Eliminar
                                </button>
                            </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-4">
                    <h3 className="text-center">Agregar Clima</h3>
                    {
                        error &&
                        <div class="alert alert-danger" role="alert">
                            Los campos son obligatorios
                        </div>
                    }

                    <form className="form-group" onSubmit={handleOnSubmit}>
                        <input
                            type="text"
                            name="dia"
                            className="form-control"
                            placeholder="dia"
                            value={dia}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="fecha"
                            className="form-control"
                            placeholder="fecha"
                            value={fecha}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="ciudad"
                            className="form-control"
                            placeholder="ciudad"
                            value={ciudad}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="pais"
                            className="form-control"
                            placeholder="pais"
                            value={pais}
                            onChange={handleInputChange}
                        />
                        

                        <textarea
                            name="tipoClima"
                            className="form-control mt-2"
                            autoComplete="of"
                            value={tipoClima}
                            onChange={handleInputChange}
                        ></textarea>
                        <div className="d-grid gap-2 mx-auto">
                            {
                                !editForm
                                    ?
                                    <button
                                        className="btn btn-dark"
                                        type="submit" onClick={handleAdd}>Enviar</button>
                                    :
                                    <button
                                        className="btn btn-dark"
                                        type="submit" onClick={handlePut}>Guardar</button>
                                    
                            }               
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Weathers
