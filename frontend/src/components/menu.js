import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Link from '@material-ui/core/Link';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InfoIcon from '@material-ui/icons/Info';

import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  AppBar:{
    height:67,
    backgroundColor : '#333',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingLeft: theme.spacing(1,1.5),
  },
  link: {
    margin: theme.spacing(1,1.6),
    color:'#333',
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleChange(event) {
    setAuth(event.target.checked);
  }

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <React.Fragment>
        <AppBar position="static" className={classes.AppBar}>
          <Toolbar>
          <EventNoteIcon/>
          <Typography variant="h6"className={classes.title}>
              Todo App
            </Typography>
              {auth && (
              <div>
                <IconButton
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                 <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <ListAltIcon/>
                    <Link href='/' className={classes.link}>
                      Tarefas
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <InfoIcon/>
                    <Link href='/sobre' className={classes.link}>
                       Sobre
                    </Link>  
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  );
}