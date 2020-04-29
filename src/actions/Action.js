
export default class Action {
  static setProductDetail = (dispatch, product) => {

    return dispatch({
      type: 'SET_PRODUCT_DETAIL',
      payload: product
    })
  }


  static setSearchTerm = (dispatch, searchTerm) => {
    return dispatch({
      type: 'SET_SEARCH_TERM',
      payload: searchTerm.toLowerCase()
    })
  }


  static setSearchResults = (dispatch, products, term = null) => {
    let searchResults = products;

    if (term) {
      searchResults = products.filter(p =>
        p.productType.toLowerCase().includes(term));

      //if (searchResults.length === 0) searchResults = products;
    }

    return dispatch({
      type: 'SET_SEARCH_RESULTS',
      payload: searchResults
    })
  }


  static setProductType = (dispatch, productType = 'all products') => {

    return dispatch({
      type: 'SET_PRODUCT_TYPE',
      payload: productType
    })
  }


  static toggleMobileDrawer = (dispatch) => {

    return dispatch({
      type: 'TOGGLE_MOBILE_DRAWER',
      payload: null
    })
  }

}



