import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  centerText: {
    textAlign: "center",
  },
  footerClass: {
    background: "#fff1e6",
    color: "black",
    padding: "10px",
  },
}));

const FooterComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerClass}>
      <Typography className={classes.centerText}>
        Created And Maintained By: AAQIB GOUHER
      </Typography>
    </div>
  );
};

export default FooterComponent;
