import produce from 'immer'

export default class ActCart {

  static add = (dispatch, product, quantity = 1) => {

    const prd = produce(product, draft => {
      draft.count += quantity;
    })

    return dispatch({
      type: 'ADD_TO_CART',
      payload: { ...prd }
    })
  }

  static changeCount = (dispatch, product, count = 1) => {

    const prd = produce(product, draft => {
      draft.count = 0;
      draft.count += count;
    })

    return dispatch({
      type: 'CART_CHANGE_COUNT',
      payload: { ...prd }
    })
  }


  // Cart
  /*
  static increment = (dispatch, id) => {

    return dispatch({
      type: 'CART_INCREMENT',
      payload: id
    })
  }

  static decrement = (dispatch, id) => {

    return dispatch({
      type: 'CART_DECREMENT',
      payload: id
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