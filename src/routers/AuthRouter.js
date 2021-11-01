import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import App from '../components/App'
import Navbar from '../components/Navbar';
import Weathers from '../components/Weathers';




export const AuthRouter = () => {
    return (
        
        <div className="auth__main">
            <Navbar/>
            <div className="auth__box-container">
                <Switch>
                <Route exact path="/app"  component={App}/>
                <Route exact path="/weathers"  component={Weathers}/> 
                <Redirect to="/app" />  
                </Switch>
            </div>

        </div>
    )
}