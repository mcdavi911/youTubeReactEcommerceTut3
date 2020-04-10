import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import { setProductDetail, addToCart } from '../actions/Action'
import { findByLabelText } from '@testing-library/react';
import { Typography } from '@material-ui/core';

export default function Product({ id, title, img, price, inCart }) {
  const { state, dispatch } = React.useContext(Store);

  const isInCart = function () {
    return state.cart.some(p => p.id === id);
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div onClick={() => setProductDetail(dispatch, state.products, id)} style={{ width: '100%', paddingTop: '75%', position: 'relative', background: 'red', overflow: 'hidden' }}>
          <Link to="/details">
            <img src={img} alt="product" className="card-img-top" style={{ position: 'absolute', top: 0 }} />
          </Link>
        </div>

        <Typography>
          {title}
        </Typography>
        <Typography>
          {price}
        </Typography>
      </div>

      {
        /*
      <ProductWrapper className="col-3  ">
      
      
      
              <div className="card">
                <div
                  className="img-container p-5"
                  onClick={() => setProductDetail(dispatch, state.products, id)}
                >
                  <Link to="/details">
                    <img src={img} alt="product" className="card-img-top" />
                  </Link>
      
                </div>
                <div className="card-footer">
                  <p className="align-self-center mb-0">
                    {title}
                  </p>
                  <h5 className="text-blue font-italic mb-0">
                    <span className="mr-1">$</span>
                    {price}
                  </h5>
                </div>
              </div>
            </ProductWrapper>
        */
      }
    </>
  )
}


/*
<button 
className="cart-btn" 
disabled={isInCart() ? true : false} 
onClick={() => addToCart(dispatch, state.products, id)}>


{isInCart() ? (
  <p className="text-capitalize mb-0" disabled>
    in Cart
  </p>
) : (
    <i className="fas fa-cart-plus" />
  )}
</button>
*/



const ProductWrapper = styled.div`
  .card{
    border-color:transparent;
    transition: all 1s linear;

  }
  .card-footer {
    background: transparent;
    border-top: all 1s linear;

  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0,0,0,.2);
      box-shadow: 2px 2px 5px 0px rgba(0,0,0,.2);
    }
    .card-footer {
      background: rgba(247,247,247)
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all .2s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
  }
`