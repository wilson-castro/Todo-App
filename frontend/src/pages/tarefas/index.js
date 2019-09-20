import React, { Component } from 'react';

import Api from '../../services/api'

import Header from '../../components/Header';
import InputTextField from '../../components/inputTextField';
import Table from '../../components/Table';

import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Search from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/CancelPresentationSharp';

export default class Tarefas extends Component{
	constructor(props){
		super(props)
		this.state = { description: '', list:[] }

		this.handleAdd = this.handleAdd.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
		this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleClear = this.handleClear.bind(this);
		
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
	refresh(description = ''){
		const search = description ? `&description__regex=/${description}/` : ''
		Api.get(`?sort=-createdAt${search}`)
		.then(resp => this.setState({...this.state,description,list: resp.data}));

	}
	handleSearch(){
		this.refresh(this.state.description);	 
	}
	handleRemove(todo){
		Api.delete(`/${todo._id}`)
		.then(resp => this.refresh(this.state.description))
	}
	handleMarkAsDone(todo){
		Api.put(`${todo._id}`, {...todo, done:true} )
		.then(resp => this.refresh(this.state.description))
	}
	handleMarkAsPending(todo){
		Api.put(`${todo._id}`, {...todo, done:false} )
		.then(resp => this.refresh(this.state.description))
	}
	handleClear(){
		this.refresh()
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
					   keyHandler={this.keyHandler}
					   handleSearch={this.handleSearch}
					   handleAdd={this.handleAdd}
					   handleClear={this.handleClear}
					   />
				  
					 <IconButton onClick={this.handleSearch} >
						 <Search style={{ fontSize: 35 }} />
            		 </IconButton>

					 <IconButton onClick={this.handleAdd} >
              		   <AddBoxIcon style={{ fontSize: 35 }} />
            		 </IconButton>

					 <IconButton onClick={this.handleClear} >
						 <CancelIcon style={{ fontSize: 35 }} />
            		 </IconButton>

					
				      </CardContent>
				      </Card>

					  <Table list={this.state.list}
					  handleMarkAsDone={this.handleMarkAsDone}
					  handleMarkAsPending={this.handleMarkAsPending}
					  handleRemove={this.handleRemove}/>
		       </Container>
			</div>
		)
	}
}