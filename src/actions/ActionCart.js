import React from 'react';
import produce from 'immer'
import { Store } from '../Store'
import Validate from '../utilities/Validate'
import GUID from '../utilities/GUID'


export class ActionCart2 {
  //static prds = []
  //children = []

  constructor(dispatch, cart) {
    this.dispatch = dispatch;
    this.cart = cart;
  }

  //getCartIdx(cart, id) { return cart.findIndex(p => p.id === id) };


  add2(prd, count = 1) {

    let product = produce(prd, draft => {
      draft.count = 0;
      draft.count += count;
    });

    // check if match
    const idx = this.cart.findIndex(p => p.specialId === product.specialId);

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



  /*
  add(cart, prd, count = 1) {

    let product = produce(prd, draft => {
      draft.count = 0;
      draft.count += count;
    });

    console.log('product from actionCart', product);


    // check if and how many instances are in cart
    const matches = cart.filter(p => p.id === prd.id);
    //console.log('matches', matches);
    if (matches.length === 0) {
      return this.dispatch({
        type: 'CART_CREATE_PRODUCT_2',
        idx: null,
        payload: product
      });
    }

    if (matches.length === 0) return;

    let test = true;

    // check if special obj is same

    // idx ist falsch und ist der Index von match array nicht von cart

    // Auch falsch gibt des ersten Id treffer wieder, und nicht special match.
    const idx = cart.findIndex(p => p.id === product.id);

    matches.forEach(p => {
      if (Validate.isEquivalent(p.special, prd.special)) {
        test = false;
        return this.dispatch({
          type: 'CART_PUT_PRODUCT_2',
          idx,
          payload: product
        });
      }
    });

    if (!test) return;

    return this.dispatch({
      type: 'CART_CREATE_PRODUCT_2',
      idx: null,
      payload: product
    });
  }
  */

}







/*
      if (idx === -1) {
        // product not found
        return this.dispatch({
          type: 'CART_CREATE_PRODUCT_2',
          idx: null,
          payload: product
        });
      } else {
        // if product does exist in cart
        // check if special properties hold the same obj
        if (Validate.isEquivalent(cart[idx].special, prd.special)) {
          // change count of existing product in cart
          return this.dispatch({
            type: 'CART_PUT_PRODUCT_2',
            idx,
            payload: product
          });
        } else {
          // product exists but has a different special object
  
          return this.dispatch({
            type: 'CART_CREATE_PRODUCT_2',
            idx: null,
            //payload: { ...product }
            payload: product
          });
        }
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