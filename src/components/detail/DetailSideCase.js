import React from 'react'
import DetailSide from './DetailSide'
import SelectList from '../form/SelectList'
import { listDevices } from '../../data';
import Action from '../../actions/Action';

import { Store } from '../../Store';
import Product from '../product/Product';
import { Typography } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';



export default function DetailSideCase() {
  const { state, dispatch } = React.useContext(Store);

  const handleSelectCase = (value) => {
    const product = new Product(state.productDetail);

    product.buildId(value, product.title);

    Action.setProductDetail(dispatch, product);
  }

  return (
    <div>
      <DetailSide>
        

        <SelectList list={listDevices} label={'devices'} handleValue={(value) => handleSelectCase(value)} />
      </DetailSide>
    </div>
  )
}
