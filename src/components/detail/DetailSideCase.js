import React from 'react'
import DetailSide from './DetailSide'
import SelectList from '../form/SelectList'
import { devices } from '../../data';
import Action from '../../actions/Action';
import ProductTypes from '../../utilities/ProductTypes'
import { Store } from '../../Store';
import Product from '../product/Product';




export default function DetailSideCase() {
  const { state, dispatch } = React.useContext(Store);

  const handleSelectCase = (value) => {
    const product = Product.construct(state.productDetail);

    product.buildSpecialId(value, product.productType, ProductTypes.case);

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
