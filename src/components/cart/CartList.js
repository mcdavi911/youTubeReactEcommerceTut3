import React from 'react'
import CartProduct from './CartProduct'
import { Store } from '../../Store'


export default function CartList() {
  const { state, dispatch } = React.useContext(Store);

  return (
    <div className="container-fluid">
      {state.cart.map(p => <CartProduct key={p.id} product={p} dispatch={dispatch}/>)}
    </div>
  )
}
