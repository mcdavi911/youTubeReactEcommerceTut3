import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
//import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Store } from '../../Store';
import { setProductDetail, addToCart } from '../../actions/Action'
//import { findByLabelText } from '@testing-library/react'
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles((theme) => ({
  linkActionArea: {
    textDecoration: 'none',
  },
  productInfoWrapper: {
  
    '&:hover > div > p:first-child': {
      color: theme.palette.primary.dark
    }
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
  img: {
    mixBlendMode: 'multiply',
    [theme.breakpoints.up('sm')]: {
      transform: 'scale(1)'
    },
    [theme.breakpoints.up('md')]: {
      transform: 'scale(.8)'
    },
    [theme.breakpoints.up('lg')]: {
    
    }
  }
}));


export default function PrdCard(product) {
  const { state, dispatch } = React.useContext(Store);
  const classes = useStyles();
  const { id, title, imgHero, price, productType } = product;

  return (
    <div>
      <Link to="/details" className={classes.linkActionArea} onClick={() => setProductDetail(dispatch, product)}>

        <div style={{ overflow: 'hidden', background: '#f6f6f6', paddingBottom: '75%', position: 'relative' }}>
          <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img className={classes.img} src={imgHero} alt={title} />
          </div>
        </div>


        <div className={classes.productInfoWrapper}>
          <div className={classes.productInfo}>
            <p>{title}</p>
            <p>{price} €</p>
          </div>
          <p style={{ fontSize: '1rem', color: 'rgb(141, 141, 141)', marginTop: 0 }}>{productType}</p>
        </div>
      </Link>
    </div>
  )
}

