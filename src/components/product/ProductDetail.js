import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Breadcrumbs from '../Breadcrumbs';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import DetailBasket from './DetailBasket'

import Carousel from 'nuka-carousel';


import RightRail from '../../layouts/RightRail'


import ProductImg from './ProductImg'
//import MenuItem from '@material-ui/core/MenuItem';
//import Input from '@material-ui/core/Input';
//import Checkbox from '@material-ui/core/Checkbox';
//import ListItemText from '@material-ui/core/ListItemText';


import { Store } from '../../Store';
import { addToCart } from '../../actions/Action'
import { devices } from '../../data';



const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'rgb(229, 229, 229) 0px -1px 0px 0px inset',
    background: '#f6f6f6',
    //marginBottom: theme.spacing(1)
  },
  gridItemProduct: {
    flexBasis: '50%',
  },
  productInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingRight: 12,

    '& > p': {
      fontSize: '1rem',
      color: theme.palette.text.primary,
      margin: 0
    }
  },
  test: {
    ...theme.typography.body1
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    //width: '100%',
    marginRight: theme.spacing(3)
  },
  testy: {
    width: '100%'
  },
  selectTest: {
    padding: 8
  },
}));



export default function Details(props) {
  const { state, dispatch } = React.useContext(Store);
  const classes = useStyles();
  // useState for quantity? try variable?
  //const [quantity, setQuantity] = React.useState(1);
  let quantity = 1;

  const { id, imgHero, category, info, price, title, imgs, childIds } = state.productDetail;
  const kitProducts = [];


  // get childProducts > hooks
  if (childIds.length > 0) {

    childIds.forEach(id => {
      const p = state.products.find(p => p.id === id);

      kitProducts.push(p);
    });
  }

  // use hook combine all images in one array
  
  


  const pImgs = (
    <>

      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={2}
      >

        <Grid item className={classes.gridItemProduct}>
          <ProductImg imgHero={imgHero} title={title} />
        </Grid>

        {kitProducts.length === 0 ?
          imgs.map((img, idx) => (
            <Grid key={idx} item className={classes.gridItemProduct}>
              <ProductImg imgHero={imgHero} title={title} />
            </Grid>
          ))
          :
          kitProducts.map((p, idx) => (
            <Grid key={idx} item className={classes.gridItemProduct}>
              <ProductImg imgHero={p.imgHero} title={p.title} />
            </Grid>
          ))
        }
      </Grid>

      <Carousel>
        <img
          src={`http://placehold.it/1000x400/7732bb/ffffff/&text=slide1`}
          alt={`Slide ${1}`}
          key="1"

          style={{
            height: 400
          }}
        />
      </Carousel>
    </>
  );


  return (
    <>
      <Container>
        <Breadcrumbs />
        <RightRail left={pImgs} right={<DetailBasket />} />
      </Container >
    </>
  )
}



