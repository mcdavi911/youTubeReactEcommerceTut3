import React from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import SelectNum2 from '../form/SelectNum2';
import { Store } from '../../Store'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import ActionCart from '../../actions/ActionCart'
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default function CartProduct(props) {
  const { state, dispatch } = React.useContext(Store);

  const { id, imgHero, count, title, productType, special, price } = props.product;

  const handleQuantity = (quantity) => {
    ActionCart.updateCount(dispatch, id, quantity);

    console.log('quantity', quantity);
  }

  return (
    <>
      <Box display="flex" style={{ padding: '24px 8px', boxShadow: 'rgba(0, 0, 0, 0.12) 0px -1px 0px 0px inset' }}>
        <div style={{ marginRight: 20, background: '#f6f6f6', height: 150, width: 150, padding: 16 }}>
          <img src={imgHero} alt={title} style={{ mixBlendMode: 'multiply', width: '100%', height: 'auto' }} />
        </div>


        <div style={{ flexGrow: 1 }}>
          <Box display="flex" justifyContent="space-between" style={{ textTransform: 'capitalize' }}>
            <Typography style={{ color: '#111', lineHeight: '1.7' }}>{title}</Typography>
            <Typography style={{ color: 'rgb(141, 141, 141)', textTransform: 'capitalize' }}>
              € {price}
            </Typography>
          </Box>

          <div style={{ color: 'rgb(141, 141, 141)', textTransform: 'capitalize' }}>
            <div>{productType}</div>
            <div>{special}</div>
          </div>

          <Breadcrumbs separator="|" aria-label="breadcrumb" style={{ marginTop: 8 }}>
            <Box display="flex" alignItems="center">
              <SelectNum2 range={10} handleValue={handleQuantity} setValue={count} label="Quantity" />
            </Box>
            <Button style={{ fontSize: 14 }} onClick={() => ActionCart.delete(dispatch, id)}>
              Remove
            </Button>
          </Breadcrumbs>
        </div>
      </Box>
    </>
  )
}


/*
      <Grid container>
        <Grid item md={2}>
          <img
            src={img}
            style={{ width: "5rem", heigth: "5rem" }}
            className="img-fluid"
            alt=""
          />
        </Grid>
        <Grid item md={2}>
          <span className="d-lg-none">product :</span> {title}
        </Grid>
        <Grid item md={2}>
          <strong>
            <span className="d-lg-none">price :</span> ${price}
          </strong>
        </Grid>
        <Grid item md={2}>
          <Box display="flex" justifyContent="center" >
            <div>
              <span
                className="btn btn-black mx-1"
                onClick={() => {
                  return ActionCart.changeCount(props.dispatch, props.product, -1);
                }}
              >
                -
              </span>
              <span className="btn btn-black mx-1">{count}</span>
              <span
                className="btn btn-black mx-1"
                onClick={() => {
                  return ActionCart.changeCount(props.dispatch, props.product);
                }}
              >
                +
              </span>
            </div>
          </Box>
        </Grid>
        <Grid item md={2}>
          <div className=" cart-icon" onClick={() => ActionCart.remove(props.dispatch, id)}> {/*removeItem(id)}>}
     //     <i className="fas fa-trash" />
      //    </div>
      //  </Grid>
      //  <Grid item md={2}>
      //    <strong>item total : ${count * price} </strong>
      //  </Grid>
     // </Grid>
     */

