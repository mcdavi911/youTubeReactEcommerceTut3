import React from 'react'
import CartProductRow from './CartProductRow'
import CartEmpty from './CartEmpty'
import CartTotals from './CartTotals'
import { Store } from '../../Store'

import CartProductCard from './CartProductCard';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ActionCart from '../../actions/ActionCart'
import { Typography } from '@material-ui/core'


export default function Cart(props) {
  const { state, dispatch } = React.useContext(Store);

  return (
    <div>
      {state.cart.length > 0 ? (
        <>
          <Container>
            <Typography component="h4" style={{fontSize: 22, fontWeight: 600}} >Cart</Typography>

            <Grid container spacing={2} >
              <Grid item sm={12} md={8} lg={8}>

                {state.cart.map(p => (
                  <CartProductCard product={p} />
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

