import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
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

    <TextField
        id="standard-dense"
        label={props.label}
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        onChange={props.handleChange}
        value={props.description}
        
      />

  );
}