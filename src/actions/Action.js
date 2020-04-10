import produce from 'immer'


export const addToCart = (dispatch, products, id) => {
  const product = products.find(p => p.id === id);

  const productNew = produce(product, draft => {
    draft.count++;
  })

  return dispatch({
    type: 'ADD_TO_CART',
    payload: productNew
  })
}


export const setProductDetail = (dispatch, products, id) => {
  const product = products.find(p => p.id === id);
  
  return dispatch({
    type: 'SET_PRODUCT_DETAIL',
    payload: product
  })
}


export const setSearchTerm = (dispatch, searchTerm) => {
  return dispatch({
    type: 'SET_SEARCH_TERM',
    payload: searchTerm
  })
}

export const setSearchResults = (dispatch, searchResults) => {
  return dispatch({
    type: 'SET_SEARCH_RESULTS',
    payload: searchResults
  })
}





export const cartIncrement = (dispatch, id) => {
  
  return dispatch({
    type: 'CART_INCREMENT',
    payload: id
  })
}

export const cartDecrement = (dispatch, id) => {
  
  return dispatch({
    type: 'CART_DECREMENT',
    payload: id
  })
}

export const cartRemove = (dispatch, id) => {
  
  return dispatch({
    type: 'CART_REMOVE',
    payload: id
  })
}


export const cartClear = (dispatch) => {
  
  return dispatch({
    type: 'CART_CLEAR',
    payload: null
  })
}



