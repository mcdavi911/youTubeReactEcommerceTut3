import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
//import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import { setProductDetail, addToCart } from '../actions/Action'
//import { findByLabelText } from '@testing-library/react'
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  /*
  test: {
    //alignContent: 'space-around',
    margin: theme.spacing(0, -2),

    '& > div': {
      flexBasis: (100 / 3) + '%',
      padding: theme.spacing(0, 2),
    }
  }

  <div style={{ background: 'red', paddingBottom: '75%', position: 'relative' }}>
    <div style={{ position: 'absolute' }}>
      asd
    </div>
  </div>
  */

  linkActionArea: {
    //position: 'absolute',
    //top: 0,
    //left: 0,
    //width: '100%',
    //top: '100%',
    textDecoration: 'none',

    '&:hover': {
      background: 'red'
    }
  }
}));


export default function Item({ id, title, img, price, inCart, category }) {
  const classes = useStyles();

  return (
    <div>
      <Link to="/details" className={classes.linkActionArea}>

        <div style={{ overflow: 'hidden', background: '#f6f6f6', paddingBottom: '75%', position: 'relative' }}>
          <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={img} alt={title} style={{ mixBlendMode: 'multiply' }} />
          </div>
        </div>
      
        <p style={{ fontSize: '1rem', color: 'rgb(17, 17, 17)', marginBottom: 0 }}>{title}</p>
        <p style={{ fontSize: '1rem', color: 'color: rgb(141, 141, 141)', marginTop: 0 }}>{category}</p>
        <p style={{ fontSize: '1rem' }}>{price}</p>
      </Link>
    </div>
  )
}






/*


    <Card>
          <CardActionArea>
            <CardMedia style={{ background: '#f6f6f6' }}
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={img}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {price}euro
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

    </div >


<Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={img}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {price}euro
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
        </Button>
          <Button size="small" color="primary">
            Learn More
        </Button>
        </CardActions>
      </Card>


<button
className="cart-btn"
disabled={isInCart() ? true : false}
onClick={() => addToCart(dispatch, state.products, id)}>


{isInCart() ? (
  <p className="text-capitalize mb-0" disabled>
    in Cart
  </p>
) : (
    <i className="fas fa-cart-plus" />
  )}
</button>
*/


/*
const ProductWrapper = styled.div`
  .card{
    border-color:transparent;
    transition: all 1s linear;

  }
  .card-footer {
    background: transparent;
    border-top: all 1s linear;

  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0,0,0,.2);
      box-shadow: 2px 2px 5px 0px rgba(0,0,0,.2);
    }
    .card-footer {
      background: rgba(247,247,247)
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all .2s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
  }
`
*/