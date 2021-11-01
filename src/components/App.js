import React, { Component } from 'react';
import Encabezado from './Encabezado';
import Form from './Form';
import Failed from './Failed';
import WeathersApp from './WeathersApp';
import Navbar from './Navbar';

 
 class App extends Component {

      state = {
        error: '',
        consulta: {},
        resultado: {}
      }

      componentDidMount(){
        this.setState({
          error:false
        });
      }

	componentDidUpdate(prevProps, prevState){
		
		if(prevState.consulta !== this.state.consulta){
			this.consultarApi();
		}
		
	}
	consultarApi = () => {
		const {ciudad, pais} = this.state.consulta;

		if(!ciudad || !pais) return null;

		const appId = 'cfeac907da3a230eb39a571e27e4b67b';
		let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}&units=metric`;
		console.log(url);


		fetch(url)
			.then( resp => {
				return resp.json();
			})
			.then(datos => {
				this.setState({
					resultado: datos
				});
			})
			.catch(error => {
				console.log(error);
			})
		console.log(ciudad);
	}

	datosConsulta = (respuesta) => {
		if(respuesta.ciudad === '' || respuesta.pais === ''){
			this.setState({
				error:true
			});
		}else{
			this.setState({
				consulta: respuesta,
				error: false
			});
		}
	}
	
	render() {

		const error = this.state.error;
		let resultado;
		if(error){
			resultado = <Failed mensaje="Ambos campos son requeridos"/> 
		}else{
			resultado = <WeathersApp resultado={this.state.resultado}/>
		}

		return (
			
			<div className="app">
				<Navbar/>
				<Encabezado
					titulo="Aplicación del Clima"/>
				<Form
					datosConsulta={this.datosConsulta}/>
				{resultado}
			
			</div>
		);
	}
 }
 
 export default App;