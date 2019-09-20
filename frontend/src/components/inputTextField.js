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

  const heyHandler = (e) =>{
		if(e.key === "Enter"){
		  e.shiftKey ? props.handleSearch() : props.handleAdd()
		}else if (e.key === "Escape"){
		 props.handleClear()
		}
	  }


 return (

    <TextField
        id="standard-dense"
        label={props.label}
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        onChange={props.handleChange}
        value={props.description}
        onKeyUp={heyHandler}
      />

  );
}