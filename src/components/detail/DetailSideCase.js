import React from 'react'
import DetailSide from './DetailSide'
import SelectList from '../form/SelectList'
import { devices } from '../../data';
import Action from '../../actions/Action';
import { productTypes } from '../../data'
import { Store } from '../../Store';
import Product from '../product/Product';
import produce from 'immer'



export default function DetailSideCase() {
  const { state, dispatch } = React.useContext(Store);

  const handleValue = (value) => {
    const prd = Product.create(state.productDetail);

    prd.special = {
      ...prd.special,
      [prd.productType]: value
    };

    Action.setProductDetail(dispatch, prd);
  }

  return (
    <div>
      <DetailSide>
        <SelectList devices={devices} handleValue={handleValue} />
      </DetailSide>
    </div>
  )
}
