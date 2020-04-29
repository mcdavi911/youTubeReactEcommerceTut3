

export default class ActCart {


  // Cart
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