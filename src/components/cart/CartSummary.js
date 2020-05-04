import React from 'react'
import { Store } from '../../Store'
import ActionCart from '../../actions/ActionCart'

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
//import PaypalButton from './PaypalButton'

export default function CartSummary(props) {
  const { state, dispatch } = React.useContext(Store);

  const cartSubtotal = () => {
    let subTotal = 0;
    state.cart.map((p) =>
      subTotal += p.price * p.count
    )

    return subTotal;
  }

  /*console.log('yo props history here dawg', props.history)*/

  return (
    <div>
      <Typography style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>Summary</Typography>

      <Box variant="body2" display="flex" justifyContent="space-between">
        <Typography>Subtotal</Typography>
        <div>{cartSubtotal()}</div>
      </Box>

      

      <Typography variant="body2" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, marginTop: 12 }}>
        <span>Estimated Delivery</span>
        <span>{10}</span>
      </Typography>


      <Divider />

      <Typography variant="body2" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, marginTop: 16 }}>
        <span>Total</span>
        <span>{cartSubtotal() + 10}</span>
      </Typography>

      <Divider style={{marginBottom: 20}} />

      <Button variant="contained" color="primary" style={{ marginBottom: 24, width: '100%', padding: '16px 24px', borderRadius: 100 }} >
        Checkout
      </Button>

    </div>
  )
}


/*
<Divider light />

        <PaypalButton
        total={cartSubtotal() + state.cartTax}
        clearCart={cartClear(dispatch)}
        history={props.history}
      />



<button
        className="btn btn-warning float-right"
        onClick={() => ActionCart.clear(dispatch)}
      >Clear cart
      </button>

*/