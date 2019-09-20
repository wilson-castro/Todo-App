import React, { Component } from 'react';


import axios from 'axios';
import Api from '../../services/api'

import Header from '../../components/Header';
import InputTextField from '../../components/inputTextField';
import Button from '../../components/Button';
import Table from '../../components/Table';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const URL = 'http://localhost:3003/api/todos';

export default class Tarefas extends Component{
	constructor(props){
		super(props)
		this.state = { description: '', list:[] }

		this.handleAdd = this.handleAdd.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleRemove = this.handleRemove.bind(this);

		this.refresh();
	}

	handleAdd(){
		const description = this.state.description;
		Api.post("/",{description})
			.then(resp => this.refresh());

	}
	handleChange(event){
		this.setState({...this.state, description: event.target.value });
	}
	refresh(){
		Api.get(`?sort=-createdAt`)
		.then(resp => this.setState({...this.state,description: '',list: resp.data}));

	}
	handleRemove(todo){
		Api.delete(`/${todo._id}`)
		.then(resp => this.refresh())
	}


	render(){

		const styles = {
		  container: {
			shadowColor: 'rgba(0,0,0, .rows2)',
			display: 'flex',
			flexWrap: 'wrap',
		  }
		 }


		return(
			<div>
			 <Header title="Tarefas" aux="ativo" header="Cadastro" />

			<CssBaseline/>
			<Container maxWidth="md">
			   		<Card containerStyle={styles.container}>
				      <CardContent >
				  		
				      <InputTextField
				       label="Adicione uma tarefa"
				       handleChange={this.handleChange}
				       description={this.state.description} 
				       />
					  
					  <Button
					   handleAdd={this.handleAdd}
					   tipo="add"
					   />

					  <Button tipo="search"/>
					  <Button tipo="cancel"/>
					
				      </CardContent>
				      </Card>

					  <Table list={this.state.list}
					  handleRemove={this.handleRemove}/>
		       </Container>
			</div>
		)
	}
}