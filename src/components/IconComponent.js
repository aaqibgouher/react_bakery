import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CakeIcon from "@material-ui/icons/Cake";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 275,
    background: "#fff2e6",
  },
  iconClass: {
    padding: "20px",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  singleDiv: {
    padding: "20px",
    margin: "10px",
    borderRadius: 50,
  },
  styleIcon: {
    fontSize: 100,
    background: "##999999",
  },
  centerText: {
    textAlign: "center",
  },
}));

const IconComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.iconClass}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Card className={(classes.root, classes.singleDiv)}>
              <CardContent>
                <h2 className={classes.centerText}>CAKE</h2>
                <CakeIcon className={classes.styleIcon}></CakeIcon>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Card className={(classes.root, classes.singleDiv)}>
              <CardContent>
                <h2 className={classes.centerText}>TEA</h2>
                <EmojiFoodBeverageIcon
                  className={classes.styleIcon}
                ></EmojiFoodBeverageIcon>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Card className={(classes.root, classes.singleDiv)}>
              <CardContent>
                <h2 className={classes.centerText}>OTHERS</h2>
                <FastfoodIcon className={classes.styleIcon}></FastfoodIcon>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default IconComponent;
