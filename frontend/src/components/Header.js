import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
  card: {
    color:'#ffff',
    backgroundColor : '#333',
    marginTop: '40px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <React.Fragment>
	   <Container maxWidth="md">
	    <Card className={classes.card}>
	      <CardContent>
	  		<Typography variant="h5" component="h3">
	          {props.title}
	          {bull}
	          <small>{props.header}</small>
	        </Typography>
	      </CardContent>
	    </Card>
       </Container>
    </React.Fragment>
  );
}