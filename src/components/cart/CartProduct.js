import React from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import SelectNum from '../form/SelectNum';
import { Store } from '../../Store'

import ActionCart from '../../actions/ActionCart'

export default function CartProduct(props) {
  const { state, dispatch } = React.useContext(Store);

  const {id, imgHero,count, title, productType, special, price } = props.product;

  const handleQuantity = (quantity) => {
    ActionCart.updateCount(dispatch, id, quantity);
    
    console.log('quantity',quantity);
  }

  return (
    <>

      <Box display="flex" style={{ boxShadow: 'rgb(229, 229, 229) 0px -1px 0px 0px inset, rgb(229, 229, 229) 0px 0px 0px 0px inset' }}>
        <div>
          <img src={imgHero} alt={title} />
        </div>
        <div>
          <p>{title}</p>
          <p>{productType}</p>
          <p>{special}</p>
          <p>{price}</p>

          <p>Quantity {count}</p>
          <SelectNum range={10} handleValue={handleQuantity} setValue={count} />
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

