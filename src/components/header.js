import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from "@material-ui/icons/Add";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "./css/header.css"
import "../pages/login"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(100)
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const token = localStorage.getItem("token");
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton}  aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link to="/">
          <Typography variant="h6" className={classes.title}>
            E-shop
          </Typography>
          </Link>
          
          <Button href="/" className = "btn home-btn" round>Home</Button> 
          <Button href="/aboutus" className = "btn about-btn" round>About Us</Button>
          {token ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                href="/profile"
              >
                <AccountCircle />
              </IconButton>

              <Button
                href="/Login"
                color="inherit"
                onClick={() => {
                  localStorage.clear();
                }}
              >
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <Button href="/login" color="inherit">
                Login
              </Button>
              <Button href="/cart" color="inherit">
                <ShoppingCartOutlinedIcon href = "/cart" />
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}