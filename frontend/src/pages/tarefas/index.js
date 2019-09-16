import React, { Component } from 'react';

import axios from 'axios'

import Header from '../../components/Header';
import InputTextField from '../../components/inputTextField';
import Button from '../../components/Button';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


export default class Tarefas extends Component{
	
	render(){

		const styles = {
		  container: {
			shadowColor: 'rgba(0,0,0, .2)',
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
				  		
				      <InputTextField label="Adicione uma tarefa" />
					  
					  <Button tipo="add"/>
					  <Button tipo="search"/>
					  <Button tipo="cancel"/>


					  <Header title="Tarefas" aux="ativo" header="Descrição" />
					
				      </CardContent>
				      </Card>
		       </Container>

		


			</div>
		)
	}
}