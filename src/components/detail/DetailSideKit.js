import React from 'react'
import DetailSide from './DetailSide'
import { listDevices, listArms } from '../../data';
import ProductTypes from '../../utilities/ProductTypes';
import Typography from '@material-ui/core/Typography';
import SelectList from '../form/SelectList'
import Action from '../../actions/Action';
import { Store } from '../../Store';
import Product from '../product/Product';
import produce from 'immer'

export default function DetailSideKit() {
  const { state, dispatch } = React.useContext(Store);

  const product = new Product(state.productDetail);

  const handleSelect = (value, title) => {
    product.buildId(value, title);
    Action.setProductDetail(dispatch, product);
  }

  return (
    <DetailSide>
      <ul>
        {product.children.length > 0 && product.children.map(product => (
          <li key={product.id}>
            <Typography>
              {product.title}
            </Typography>

            {product.productType === ProductTypes.case && <SelectList list={listDevices} label={'devices'} handleValue={(value) => handleSelect(value, product.title)} />}

          </li>
        ))}
      </ul>
    </DetailSide>
  )
}
