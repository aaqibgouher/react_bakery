import { Container, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  marginTB: {
    margin: "20px 0px",
  },
  marginLR: {
    margin: "0px 40px",
  },
  root: {
    padding: "20px",
    background: "#fff1e6",
  },
  centerText: {
    textAlign: "center",
  },
  styleIcon: {
    fontSize: 100,
    background: "##999999",
    padding: "5px 50px",
  },
  media: {
    height: 140,
  },
  cardClass: {
    width: "250px",
  },
  alignCenter: {
    display: "flex",
    justifyContent: "center",
  },
}));

let datas = [
  {
    image_path:
      "https://media.istockphoto.com/photos/chocolate-cake-with-chocolate-fudge-drizzled-icing-and-chocolate-picture-id478348860",
    name: "Dark Chocolate",
    price: "230",
    qty: "500g",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image_path:
      "https://media.istockphoto.com/photos/white-wedding-cake-decorated-with-gold-flowers-on-a-white-background-picture-id1286877284",
    name: "Venilla",
    price: "250",
    qty: "500g",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image_path:
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    name: "Double Layer",
    price: "550",
    qty: "1000g",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image_path:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80",
    name: "Choco Lava",
    price: "550",
    qty: "500g",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image_path:
      "https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=992&q=80",
    name: "Bakery Special",
    price: "300",
    qty: "500g",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image_path:
      "https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=429&q=80",
    name: "Fruit Cake",
    price: "400",
    qty: "500g",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image_path:
      "https://images.unsplash.com/photo-1514517521153-1be72277b32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Donouts",
    price: "55",
    qty: "1",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image_path:
      "https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Cup Cakes",
    price: "50",
    qty: "1",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const ProductsComponent = () => {
  let dataslist = [];
  const classes = useStyles();

  datas.forEach((data, index) => {
    dataslist.push(
      <Grid item xs={12} sm={3} lg={3} md={3} key={data.name}>
        <Card className={classes.cardClass}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={data.image_path}
              title={data.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {data.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {data.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              className={classes.alignCenter}
            >
              Try Once
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });

  return (
    <div className={classes.root} id="products">
      <Container>
        <h1>PRODUCTS</h1>
        <Container>
          <Grid className={classes.marginTB} container spacing={1}>
            {dataslist}
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default ProductsComponent;
