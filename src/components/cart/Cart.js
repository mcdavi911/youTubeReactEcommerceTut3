import React from 'react'
import CartProductRow from './CartProductRow'
import CartEmpty from './CartEmpty'
import CartList from './CartList'
import CartTotals from './CartTotals'
import { Store } from '../../Store'


export default function Cart(props) {
  const { state, /*dispatch*/ } = React.useContext(Store);

  return (
    <div>
      {state.cart.length > 0 ? (
        <>
          <p>Your cart</p>
          <CartProductRow />
          <CartList />
          <CartTotals history={props.history} />
        </>
      ) : (
          <CartEmpty/>
        )}
    </div>
  )
}