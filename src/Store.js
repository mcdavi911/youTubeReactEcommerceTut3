import React from 'react'
import { products, productDetail } from './data'
import produce from 'immer'


const initialState = {
  products,
  productDetail,
  cart: [],
  productType: 'all products',
  searchTerm: '',
  searchResults: [],
  toggleMobileDrawer: false,
  cartTax: 1.6
}

const reducer = produce((draft, action) => {
  let idx;

  switch (action.type) {
    /*
    case 'ADD_TO_CART':
      
      if(draft.cart.length > 0) {
        idx = draft.cart.findIndex(p => p.id === action.payload.id)

        if (idx === -1) {
          draft.cart.push(action.payload)
        } else {
          draft.cart[idx].count += action.payload.count;
        }
      } else {
        draft.cart.push(action.payload)
      }
      
      break;
      */
    case 'SET_PRODUCT_DETAIL':
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
    case 'CART_CHANGE_COUNT':

      if(draft.cart.length > 0) {
        idx = draft.cart.findIndex(p => p.id === action.payload.id)

        if (idx === -1) {
          draft.cart.push(action.payload)
        } else {
          draft.cart[idx].count += action.payload.count;
          if (draft.cart[idx].count < 1) {
            draft.cart[idx].count = 1;
          }
        }
      } else {
        draft.cart.push(action.payload);
      }
      
      break;
      /*
    case 'CART_INCREMENT':
      idx = draft.cart.findIndex(p => p.id === action.payload)
      draft.cart[idx].count++
      break;
    case 'CART_DECREMENT':
      idx = draft.cart.findIndex(p => p.id === action.payload)
      if (draft.cart[idx].count > 0) draft.cart[idx].count--
      break;
      */
    case 'CART_REMOVE':
      idx = draft.cart.findIndex(p => p.id === action.payload)
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
