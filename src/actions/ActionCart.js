import React from 'react';
import produce from 'immer'
import { Store } from '../Store'
import Validate from '../utilities/Validate'
import GUID from '../utilities/GUID'


export class ActionCart2 {

  constructor(dispatch, cart) {
    this.dispatch = dispatch;
    this.cart = cart;
  }

  
  add2(prd, count = 1) {

    let product = produce(prd, draft => {
      draft.count = 0;
      draft.count += count;
    });

    // check if match
    const idx = this.cart.findIndex(p => p.id === product.id);

    if (idx === -1) {
      return this.dispatch({
        type: 'CART_CREATE_PRODUCT_2',
        idx: null,
        payload: product
      });
    } else {
      return this.dispatch({
        type: 'CART_PUT_PRODUCT_2',
        idx,
        payload: product
      });
    }
  }
}




export default class ActionCart {
  //static { state, dispatch } = React.useContext(Store);



  static updateCount = (dispatch, id, count = 1) => {

    return dispatch({
      type: 'CART_UPDATE_COUNT',
      id,
      payload: count
    })
  }


  static add = (dispatch, product, count) => {
    console.log('ölkjadsölkjfsaöldkfjdsaf');

    const prd = produce(product, draft => {
      draft.count = 0;
      draft.count += count;
    })

    return dispatch({
      type: 'CART_PUT_PRODUCT',
      id: product.id,
      payload: prd
    })
  }


  /*
    static changeCount = (dispatch, product, count = 1) => {
      
      const prd = produce(product, draft => {
        draft.count = 0;
        draft.count += count;
      })
      
      return dispatch({
        type: 'CART_CHANGE_COUNT',
        payload: prd //{...prd}
      })
    }
    */

  static delete = (dispatch, id) => {

    return dispatch({
      type: 'CART_DELETE',
      id,
      payload: null
    })
  }


  static clear = (dispatch) => {

    return dispatch({
      type: 'CART_CLEAR',
      payload: null
    })
  }

}