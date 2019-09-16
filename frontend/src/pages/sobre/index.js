import React, { Component } from 'react'

import Header  from '../../components/Header'

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';	

export default class Sobre extends Component{


	render(){
		const styles = {
		  container: {
		    shadowColor: 'rgba(0,0,0, .2)',
		  }
		}
		return(
			<div>
				<Header title="Sobre" header="Nós"/>

				<CssBaseline/>
				   <Container maxWidth="md">
				   		<Card containerStyle={styles.container}>
					      <CardContent >
					  		
					  		<Typography gutterBottom variant="h5" component="h2">
				            	≼ Nossa História ≽
				         	 </Typography>
				         	 <Typography variant="body2" color="textSecondary" component="p">
					            Lorem ipsum dolor sit amet...
					         </Typography>

					         <br/><br/>

					         <Typography gutterBottom variant="h5" component="h2">
				            	≼ Missão e Visão ≽
				         	 </Typography>
				         	 <Typography variant="body2" color="textSecondary" component="p">
					            Lorem ipsum dolor sit amet...
					         </Typography>

					      </CardContent>
					      </Card>
			       </Container>
			</div>
		)
	}
}