import { productTypes2 } from '../data'
import Product from '../components/product/Product'
import produce from 'immer'

export default class Action {
  static setProductDetail = (dispatch, product) => {

    return dispatch({
      type: 'SET_PRODUCT_DETAIL',
      payload: { ...product }
    })
  }

  /*
  static clearProductDetailSpecial = (dispatch) => {
    return dispatch({
      type: 'CLEAR_PRODUCT_DETAIL_SPECIAL',
      payload: null
    })
  }
*/


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

  /*
  static setProductDetailSpecial = (dispatch, productType, caseModel) => {

    /*
    if (productType === productTypes.CASE) {
      return dispatch({
        type: 'SET_CASE_SPECIAL',
        payload: caseModel
      })
    }
    /

    if (productType === productTypes2.KIT.key) {

      return dispatch({
        type: 'SET_KIT_SPECIAL',
        payload: caseModel
      })
    }
  }
  */

}



