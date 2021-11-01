import React from 'react'
import { getAuth } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { logout, startLogout } from '../action/actionLogin'
import { Link } from 'react-router-dom'

const Navbar = ({history}) => {
    const auth = getAuth()
    const dispatch = useDispatch()
    const {name} = useSelector(state=> state.login)

    const handle = () => {
        dispatch(logout());
        history.replace('/login'); 
    }
    
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                
                <a className="navbar-brand h3" href="#">
                    Usuario: {name}
                    </a>
                
                <Link to="/" className="navbar-brand btn btn-outline-danger sal" 
                onClick={() =>dispatch(startLogout())}>
                 Logout
                </Link>
                <Link to="/weathers" className="navbar-brand btn btn-outline-danger" 
                >
                 Agregar Clima de su Ciudad
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
