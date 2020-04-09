import React from 'react'
import Product from './Product'
import Title from './Title'
//import { storeProducts } from '../data'
import { Store } from '../Store'


export default function ProductList() {
  const { state, dispatch } = React.useContext(Store);

  
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            {state.products.map(p => (
              <Product key={p.id} {...p} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

