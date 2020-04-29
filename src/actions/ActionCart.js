import produce from 'immer'

export default class ActionCart {


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