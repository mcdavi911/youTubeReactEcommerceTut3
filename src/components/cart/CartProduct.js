import React from 'react'
import {cartIncrement, cartDecrement, cartRemove} from '../../actions/Action'

export default function CartProduct(props) {
  const {id, title, img, price, count} = props.product;

  return (
    <div className="row my-1 text-capitalize text-center">
    <div className="col-10 mx-auto col-lg-2">
      <img
        src={img}
        style={{ width: "5rem", heigth: "5rem" }}
        className="img-fluid"
        alt=""
      />
    </div>
    <div className="col-10 mx-auto col-lg-2 ">
      <span className="d-lg-none">product :</span> {title}
    </div>
    <div className="col-10 mx-auto col-lg-2 ">
      <strong>
        <span className="d-lg-none">price :</span> ${price}
      </strong>
    </div>
    <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
      <div className="d-flex justify-content-center">
        <div>
          <span
            className="btn btn-black mx-1"
            onClick={() => {
              return cartDecrement(props.dispatch, id);
            }}
          >
            -
          </span>
          <span className="btn btn-black mx-1">{count}</span>
          <span
            className="btn btn-black mx-1"
            onClick={() => {
              return cartIncrement(props.dispatch, id);
            }}
          >
            +
          </span>
        </div>
      </div>
    </div>
    <div className="col-10 mx-auto col-lg-2 ">
      <div className=" cart-icon" onClick={() => cartRemove(props.dispatch, id)}> {/*removeItem(id)}>*/}
        <i className="fas fa-trash" />
      </div>
    </div>

    <div className="col-10 mx-auto col-lg-2 ">
      <strong>item total : ${count * price} </strong>
    </div>
  </div>
  )
}
