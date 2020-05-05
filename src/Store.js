import React from 'react'
import { products, productDetail } from './data'
import produce from 'immer'


const initialState = {
  products,
  productDetail: products[0],
  cart: [],
  productType: 'all products',
  searchTerm: '',
  searchResults: [],
  toggleMobileDrawer: false
}

const reducer = produce((draft, action) => {
  let idx;

  const getCartIdx = (id) => draft.cart.findIndex(p => p.id === id);


  function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
      return false;
    }

    for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];

      // If values of same property are not equal,
      // objects are not equivalent
      if (a[propName] !== b[propName]) {
        return false;
      }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
  }




  switch (action.type) {
    case 'SET_PRODUCT_DETAIL':
      console.log('set product detial here');
      draft.productDetail = action.payload;
      break;
    case 'SET_SEARCH_TERM':
      draft.searchTerm = action.payload;
      break;
    case 'SET_SEARCH_RESULTS':
      draft.searchResults = action.payload;
      break;
    case 'SET_PRODUCT_TYPE':
      draft.productType = action.payload;
      break;
    case 'TOGGLE_MOBILE_DRAWER':
      draft.toggleMobileDrawer = !draft.toggleMobileDrawer;
      break;
    case 'SET_CASE_SPECIAL':
      draft.productDetail.special = action.payload;
      break;
    case 'SET_KIT_SPECIAL':

      //draft.productDetail.children.forEach(p => {
      //})
      break;
    case 'CART_UPDATE_COUNT':
      draft.cart[getCartIdx(action.id)].count = action.payload;
      break;
    case 'CART_PUT_PRODUCT':
      idx = getCartIdx(action.id);
      if (idx === -1) {
        draft.cart.push(action.payload);
      } else {
        // if special product same
        if (isEquivalent(draft.cart[idx].special, action.payload.special)) {
          draft.cart[idx].count += action.payload.count;
        } else {
          draft.cart.push(action.payload);
        }
      }

      break;
    /*
  case 'CART_CHANGE_COUNT':

    if (draft.cart.length > 0) {
      idx = draft.cart.findIndex(p => p.id === action.payload.id)

      if (idx === -1) {
        draft.cart.push(action.payload)
      } else {
        draft.cart[idx].count += action.payload.count;

        /*
        if (draft.cart[idx].count < 1) {
          draft.cart[idx].count = 1;
        }
        
      }
    } else {
      draft.cart.push(action.payload);
    }
    break;
    */
    case 'CART_DELETE':
      idx = draft.cart.findIndex(p => p.id === action.id)
      draft.cart.splice(idx, 1)
      break;
    case 'CART_CLEAR':
      draft.cart = []
      break;
    default:
      console.log('hello from default switch case');
  }
})


export const Store = React.createContext(initialState);

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  console.log('state from store is ', state);

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  )
}
