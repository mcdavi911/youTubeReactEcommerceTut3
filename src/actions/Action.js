import produce from 'immer'


export const addToCart = (dispatch, product, quantity = 1) => {
  console.log('from action quantity', quantity);

  const productNew = produce(product, draft => {
    draft.count += quantity;
  })

  return dispatch({
    type: 'ADD_TO_CART',
    payload: productNew
  })
}


export const setProductDetail = (dispatch, product) => {

  return dispatch({
    type: 'SET_PRODUCT_DETAIL',
    payload: product
  })
}


export const setSearchTerm = (dispatch, searchTerm) => {
  return dispatch({
    type: 'SET_SEARCH_TERM',
    payload: searchTerm.toLowerCase()
  })
}


export const setSearchResults = (dispatch, products, term = null) => {
  let searchResults = products;

  if (term) {
    searchResults = products.filter(p =>
    p.category.toLowerCase().includes(term));

    //if (searchResults.length === 0) searchResults = products;
  }

  return dispatch({
    type: 'SET_SEARCH_RESULTS',
    payload: searchResults
  })
}


export const setCategory = (dispatch, category = 'all products') => {

  return dispatch({
    type: 'SET_CATEGORY',
    payload: category
  })
}

/*
export const toggleMobileDrawer = (dispatch, open) => {

  return dispatch({
    type: 'TOGGLE_MOBILE_DRAWER',
    payload: open
  })
}
*/

export const toggleMobileDrawer = (dispatch) => {

  return dispatch({
    type: 'TOGGLE_MOBILE_DRAWER',
    payload: null
  })
}



// Cart
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



