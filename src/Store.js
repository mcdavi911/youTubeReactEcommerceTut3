import React from 'react'
import { storeProducts, detailProduct } from './data'


const initialState = {
  storeProducts,
  detailProduct,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'handleDetail':
    
    break;
    case 'addToCart':
    
    break;
    default:
      console.log('heloo from reducer');
      break;
  }
} 


export const Store = React.createContext(initialState);

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  )
}












/*
//const [state, setState] = useState();


handleDetail() {

  },
  addToCart() {

  }




const handleDetail = () => {
  console.log('hello from detail')
}

const addToCart = () => {
  console.log('hello from add to cart')
}
*/


//export Consumer = Context.Consumer;

//export { Provider , Consumer }
