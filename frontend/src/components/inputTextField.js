import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 600,
  },
  dense: {
    marginTop: 19,
  },
}));

export default function TextFields(props) {
  const classes = useStyles();
  
  /*const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

*/
 return (
    <form className={classes.container} noValidate autoComplete="off">

    <TextField
        id="standard-dense"
        label={props.label}
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        
      />

	</form>
  );
}