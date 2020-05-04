import React from 'react';
import produce from 'immer'
import { Store } from '../Store'


/*
export function ActionCart2() {
  const { state, dispatch } = React.useContext(Store);

  const puplicAPIs = {}

  const getCartIdx = (id) => state.cart.findIndex(p => p.id === id);
    

  puplicAPIs.updateCount = (dispatch, id, count = 1) => {
    //const idx = getCartIdx(id);


    return dispatch({
      type: 'CART_UPDATE_COUNT',
      id,
      payload: count
    })

  }

  return puplicAPIs;
}
*/






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

  static remove = (dispatch, id) => {

    return dispatch({
      type: 'CART_REMOVE',
      payload: id
    })
  }


  static clear = (dispatch) => {

    return dispatch({
      type: 'CART_CLEAR',
      payload: null
    })
  }

}