import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { GitHub } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginTop: 5,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const homeButtonClickedHandler = () => {
    if (location.pathname !== "/") {
      history.replace("/");
    }
  };

  const aboutButtonClickedHandler = () => {
    if (location.pathname !== "/about") {
      history.push("/about");
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <GitHub />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            GitHub Profile Finder
          </Typography>
          <Button color="inherit" onClick={homeButtonClickedHandler}>
            Home
          </Button>
          <Button color="inherit" onClick={aboutButtonClickedHandler}>
            About
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
