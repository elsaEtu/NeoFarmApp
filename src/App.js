import React from "react";
import './App.css';


class Application extends React.Component{
	
	constructor(props) {
		super(props);
		
		this.state = {
		  error: null,
		  N:''
		}
		 
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	
	handleChange(event) {
		this.setState({N: event.target.value})
	}
	
	
	handleSubmit = (event) => {
		event.preventDefault();
		
		var today=new Date(Date.now())
		var nbDaysToAdd=parseInt(this.state.N);//On suppose que l'utilisateur entrera toujours un entier 
		today.setDate(today.getDate()+nbDaysToAdd);
		const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		alert('Date future : '+ today.toLocaleDateString('fr-FR', options));
	}
  
	
	render(){
		const { error } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else {
		const dateToFormat = '1976-04-19T12:59-0500';
		return (
			<div className="App">
				<header className="App-header">
					<h1>Application d'affichage de la date</h1>
				</header>
				<form onSubmit={this.handleSubmit}>
					<label>
						Nombre de jours :
						<input type="text" value={this.state.N} onChange={this.handleChange} required />	
					</label>
					<input type="submit" value="Afficher la date"/>
				</form>
				

			</div>
		  );	
	}
	}
	
}


export default Application;