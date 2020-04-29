import React from 'react'
import { Store } from '../../Store'
import ActionCart from '../../actions/ActionCart'
//import PaypalButton from './PaypalButton'

export default function CartTotals(props) {
  const { state, dispatch } = React.useContext(Store);

  const cartSubtotal = () => {
    let subTotal = 0;
    state.cart.map((p) => 
      subTotal += p.price * p.count
    )

    return subTotal;
  }

  console.log('yo props history here dawg', props.history)

  return (
    <div className="col-10 mx-auto">
      <button
        className="btn btn-warning float-right"
        onClick={() => ActionCart.clear(dispatch)}
      >Clear cart
      </button>
      <p>SUBTOTAL: {cartSubtotal()}</p>
      <p>TOTAL: {cartSubtotal() + state.cartTax}</p>
      
      {
        /*
        <PaypalButton
        total={cartSubtotal() + state.cartTax}
        clearCart={cartClear(dispatch)}
        history={props.history}
      />
        */
      }
      
    </div>
  )
}
