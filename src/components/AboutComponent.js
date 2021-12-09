import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import "../App.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  marginTB: {
    margin: "20px 0px",
  },
  root: {
    color: "black",
    background: "#fff2e6",
    padding: "20px",
    transition: "visibility 0s, opacity 0.5s linear",
  },
  marginLR: {
    margin: "15px 20px",
  },
  paddingLR: {
    padding: "0px 5px",
    textAlign: "justify",
    textJustify: "inter-word",
  },
  centerText: {
    textAlign: "center",
  },
  styleIcon: {
    fontSize: 100,
    color: "blue",
    padding: "5px 121px",
  },
  styleDiv: {
    borderRadius: 50,
  },
  cardClass: {
    width: "100%",
  },
}));

const AboutComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="about">
      <Container>
        <h1>ABOUT</h1>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} lg={6} md={6}>
              <h5 className={classes.paddingLR}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged.
              </h5>
            </Grid>
            <Grid item xs={12} sm={12} lg={6} md={6}>
              <Card className={classes.cardClass}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="350px"
                    image="https://media.gettyimages.com/photos/storefront-door-and-window-display-picture-id523536306?s=2048x2048"
                    title="map"
                  />
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default AboutComponent;
