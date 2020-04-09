import React from 'react'
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import { addToCart } from '../actions/Action'


export default function Details() {
  const { state, dispatch } = React.useContext(Store);
  const { id, company, img, info, price, title, inCart } = state.productDetail;

  const isInCart = function() {
    return state.cart.some(p => p.id === id);
  }

  React.useEffect(() => {
    isInCart();
  })

  return (
    <div className="container py-5">
      {console.log('stateDetail', state)}
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{title}</h1>
          <p>{company}</p>
          <img src={img} alt="test" />
          <p>{info}</p>
          <p>price: {price}</p>
          <div>
            <Link to="/">
              <ButtonContainer>
                back to products
              </ButtonContainer>
            </Link>
            <ButtonContainer
              onClick={() => addToCart(dispatch, state.products, id)}
              disabled={inCart ? true : false}
            >
              {isInCart() ? "inCart" : "add to cart"}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

