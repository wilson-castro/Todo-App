import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Search from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/CancelPresentationSharp';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(0.5),
    },
  }));

  export default function IconButtons(props) {
    const classes = useStyles();
  
    return (
        <IconButton className={classes.button}   >
          {
            props.tipo == "add" ? <AddBoxIcon style={{ fontSize: 35 }} /> :
            props.tipo== "search" ? <Search style={{ fontSize: 35 }} /> :
            <CancelIcon style={{ fontSize: 35 }} />
            }
        </IconButton>

  
    );
  }