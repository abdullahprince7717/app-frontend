import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'
import "./css/header.css"
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            E-shop
          </Typography>
          
          <Link to="/"> <Button className = "btn home-btn"   color="inherit" round>Home</Button> </Link > 
          <Link to="/aboutus"> <Button className = "btn about-btn"  color="inherit" round>About Us</Button> </Link >
          <Link to="/login"> <Button className = " btn login-btn"  color="inherit" round>login</Button> </Link >
          <Link to="/signup"> <Button className = "btn signup-btn"  color="inherit" round>signup</Button> </Link >
        </Toolbar>
      </AppBar>
    </div>
  );
}