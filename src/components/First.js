import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  divClass: {
    maxWidth: 700,
    margin: `${theme.spacing(0.5)}px auto`,
    paddingTop: "210px",
  },
  welcomeDiv: {
    background: "black",
    color: "white",
  },
}));

const First = () => {
  const classes = useStyles();

  return (
    <div className={classes.firstClass}>
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://media.gettyimages.com/photos/contemporary-yellow-velvet-mousse-cake-picture-id623730394?s=2048x2048"
              alt="Los Angeles"
              width="100%"
              height="500"
            />
            <div className="carousel-caption">
              <h1>ONE OF THE BEST CAKES</h1>
              <p>We have collections of cakes!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://media.gettyimages.com/photos/stack-of-homemade-gluten-free-brownies-with-chocolate-and-coffee-picture-id1199650543?s=2048x2048"
              alt="Chicago"
              width="100%"
              height="500"
            />
            <div className="carousel-caption">
              <h3>ALL PASTRIES ARE AVAILABLE</h3>
              <p>We have all varieties of pastries!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://media.gettyimages.com/photos/close-up-of-freshly-baked-cakes-and-cupcakes-in-a-row-at-food-market-picture-id916575452?s=2048x2048"
              alt="New York"
              width="100%"
              height="500"
            />
            <div className="carousel-caption">
              <h3>ORDER AND GET UNDER 2 HRS</h3>
              <p>We can accoplish your order under 120 mins!</p>
            </div>
          </div>
        </div>

        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  );
};

export default First;
