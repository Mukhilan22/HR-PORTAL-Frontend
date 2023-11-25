import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

import isAuth, { userType } from "../lib/isAuth";

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
  loginButton: {
    backgroundColor: "#3f8c59", // Blue color
    marginRight: theme.spacing(1), // Adjust spacing if needed
  },
  signupButton: {
    backgroundColor: "#3f8c59", // Green color
    marginRight: theme.spacing(1), // Adjust spacing if needed
  },
  appBar: {
    backgroundColor: "#333333", // Charcoal grey color
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        
      <Typography variant="h6" className={classes.title}>
          <span style={{ fontFamily: "Impact", color: "#3f8c59"}}>
            <Link to="/welcome" style={{ textDecoration: "none", color: "#3f8c59" }}>HR</Link>
          </span> Portal - ATS
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => handleClick("/addjob")}>
                Add Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                My Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/employees")}>
                Employees
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => handleClick("/applications")}
              >
                Applications
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          )
        ) : (
          <>
            <Button
              color="inherit"
              onClick={() => handleClick("/login")}
              className={classes.loginButton}
            >
              Login
            </Button>
            <Button
              color="inherit"
              onClick={() => handleClick("/signup")}
              className={classes.signupButton}
            >
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
