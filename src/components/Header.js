import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#fff2e6",
    height: 70,
    position: "-webkit-sticky",
    zIndex: 5,
    display: "flex",
    color: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography
          variant="h5"
          justify="space-between"
          className={classes.title}
        >
          BAKERY
        </Typography>
        <Button color="inherit" href="#about">
          ABOUT
        </Button>
        <Button color="inherit" href="#products">
          PRODUCTS
        </Button>
        <Button color="inherit" href="#contact">
          CONTACT
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
