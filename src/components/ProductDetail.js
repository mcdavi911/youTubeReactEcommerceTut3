import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Breadcrumbs from './Breadcrumbs';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import { addToCart } from '../actions/Action'
import { products } from '../data';


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
  }
}));


export default function Details() {
  const { state, dispatch } = React.useContext(Store);
  const classes = useStyles();

  const { id, imgHero, category, info, price, title, imgs, kitProductsId } = state.productDetail;
  const kitProducts = [];


  if (kitProductsId.length > 0) {

    kitProductsId.forEach(id => {
      const p = state.products.find(p => p.id === id);

      kitProducts.push(p);
    });
  }


  return (
    <Container>
      <Breadcrumbs />

      <Grid container>
        <Grid item sm="8">

          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={2}
          >

            <Grid item className={classes.gridItemProduct}>
              <div style={{ overflow: 'hidden', background: '#f6f6f6', paddingBottom: '75%', position: 'relative' }}>
                <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={imgHero} alt={title} style={{ mixBlendMode: 'multiply' }} />
                </div>
              </div>
            </Grid>


            {kitProducts.length === 0 ?
              imgs.map(img => (
                <Grid item className={classes.gridItemProduct}>
                  <div style={{ overflow: 'hidden', background: '#f6f6f6', paddingBottom: '75%', position: 'relative' }}>
                    <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={imgHero} alt={title} style={{ mixBlendMode: 'multiply' }} />
                    </div>
                  </div>
                </Grid>
              ))
              :
              kitProducts.map(p => (
                <Grid item className={classes.gridItemProduct}>
                  <div style={{ overflow: 'hidden', background: '#f6f6f6', paddingBottom: '75%', position: 'relative' }}>
                    <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={p.imgHero} alt={title} style={{ mixBlendMode: 'multiply' }} />
                    </div>
                  </div>
                </Grid>
              ))
            }
          </Grid>



        </Grid>
        <Grid item sm="4">
          <Box p={3}>
            <div className={classes.productInfo}>
              <p>{category}</p>
              <p>{price} €</p>
            </div>

            <h1 style={{}}>{title}</h1>
            <p>{info}</p>
          </Box>


        </Grid>
      </Grid>

      <div style={{ marginBottom: 1200 }}></div>

      <div className="container py-5">
        {console.log('stateDetail', state)}
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1>{title}</h1>
            <p></p>
            <img src={imgHero} alt="test" />
            <p>{info}</p>
            <p>price: {price}</p>
            <div>
              <Link to="/">
                <ButtonContainer>
                  back to products
                </ButtonContainer>
              </Link>
              <ButtonContainer
                onClick={() => addToCart(dispatch, state.products, id)}
                disabled={true ? true : false}
              >
                {true ? "inCart" : "add to cart"}
              </ButtonContainer>
            </div>
          </div>
        </div>
      </div>

    </Container>
  )
}

/*
  <div className="container py-5">
  {console.log('stateDetail', state)}
  <div className="row">
    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
      <h1>{title}</h1>
      <p>{company}</p>
      <img src={img} alt="test" />
      <p>{info}</p>
      <p>price: {price}</p>
      <div>
        <Link to="/">
          <ButtonContainer>
            back to products
          </ButtonContainer>
        </Link>
        <ButtonContainer
          onClick={() => addToCart(dispatch, state.products, id)}
          disabled={inCart ? true : false}
        >
          {isInCart() ? "inCart" : "add to cart"}
        </ButtonContainer>
      </div>
    </div>
  </div>
</div>








  /*
  const isInCart = function () {
    return state.cart.some(p => p.id === id);
  }

  React.useEffect((props) => {
    isInCart();
  })
*/



