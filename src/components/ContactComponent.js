import { Container, makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  marginTB: {
    margin: "20px 0px",
  },
  root: {
    color: "white",
    background: "black",
    padding: "20px",
  },
  marginLR: {
    margin: "15px 20px",
  },
  centerText: {
    textAlign: "center",
  },
  styleIcon: {
    fontSize: 100,
    background: "##999999",
    padding: "5px 121px",
  },
  cardClass: {
    maxWidth: 300,
  },
  footerClass: {
    background: "white",
    color: "black",
    padding: "10px",
  },
  InlineClass: {
    display: "flex",
  },
}));

const ContactComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="contact">
      <Container>
        <h1>CONTACT US</h1>
        <Container className={classes.marginTB}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={4} md={4}>
              <div className={classes.InlineClass}>
                <EmailIcon></EmailIcon>
                <Typography>noreply@gmail.com</Typography>
              </div>
              <br />
              <div className={classes.InlineClass}>
                <PhoneIcon></PhoneIcon>
                <Typography>+91 9876543210</Typography>
              </div>
              <br />
              <div className={classes.InlineClass}>
                <LocationOnIcon></LocationOnIcon>
                <Typography>Near Diamond Complex, Ranchi, India</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4}>
              <div className={classes.InlineClass}>
                <FacebookIcon></FacebookIcon>
                <Typography>Facebook</Typography>
              </div>
              <br />
              <div className={classes.InlineClass}>
                <TwitterIcon></TwitterIcon>
                <Typography>Twitter</Typography>
              </div>
              <br />
              <div className={classes.InlineClass}>
                <InstagramIcon></InstagramIcon>
                <Typography>Instagram</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4}>
              <Card className={classes.cardClass}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://media.istockphoto.com/photos/route-of-arial-view-futuristic-route-gps-tracking-map-navigator-with-picture-id1291379828"
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

export default ContactComponent;
