import React from "react";
import {Link} from "react-router-dom";
import {AppBar, Toolbar, CssBaseline, makeStyles} from "@material-ui/core";
// import "./styles.css";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "45px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/pan_pastries" className={classes.link}>
            Pan/Pastries
          </Link>
          <Link to="/cakes" className={classes.link}>
            Pasteles/Cakes
          </Link>
          <Link to="/tamales" className={classes.link}>
            Tamales
          </Link>
          <Link to="/contact_us" className={classes.link}>
            Contact Us
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
