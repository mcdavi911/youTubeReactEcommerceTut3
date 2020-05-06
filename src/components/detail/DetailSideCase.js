import React from 'react'
import DetailSide from './DetailSide'
import SelectList from '../form/SelectList'
import { devices } from '../../data';
import Action from '../../actions/Action';
import { productTypes } from '../../data'
import { Store } from '../../Store';
import Product from '../product/Product';
//import produce from 'immer'



export default function DetailSideCase() {
  const { state, dispatch } = React.useContext(Store);

  const handleSelectCase = (value) => {
    const product = Product.create(state.productDetail);

    product.buildSpecialId(value, product.productType, productTypes.CASE);

    Action.setProductDetail(dispatch, product);
  }

  return (
    <div>
      <DetailSide>
        <SelectList devices={devices} handleValue={handleSelectCase} />
      </DetailSide>
    </div>
  )
}
