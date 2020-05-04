import React from 'react'
import CartProductRow from './CartProductRow'
import CartEmpty from './CartEmpty'
import CartTotals from './CartTotals'
import { Store } from '../../Store'

import CartProduct from './CartProduct';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ActionCart from '../../actions/ActionCart'


export default function Cart(props) {
  const { state, dispatch } = React.useContext(Store);

  return (
    <div>
      {state.cart.length > 0 ? (
        <>

          <Container>
            <p>Your cart</p>

            <Grid container>
              <Grid item sm={12} md={8} lg={8}>

                {state.cart.map(p => (
                  <CartProduct product={p} />
                ))}

              </Grid>
              <Grid item sm={12} md={4} lg={4}>
                <div style={{ background: 'red' }}>
                  Summary
                  <CartTotals history={props.history} />
                </div>

              </Grid>
            </Grid>
          </Container>


          
          

        </>
      ) : (
          <CartEmpty />
        )}
    </div>
  )
}

