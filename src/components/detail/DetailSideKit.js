import React from 'react'
import DetailSide from './DetailSide'
import { devices } from '../../data';
import ProductTypes from '../../utilities/ProductTypes';
import Typography from '@material-ui/core/Typography';
import SelectList from '../form/SelectList'
import Action from '../../actions/Action';
import { Store } from '../../Store';
import Product from '../product/Product';
import produce from 'immer'

export default function DetailSideKit({ childProducts }) {
  const { state, dispatch } = React.useContext(Store);

  const product = Product.construct(state.productDetail);
  

  const handleSelectCase = (value, productType) => {
  product.buildSpecialId(value, productType);
  console.log('ÜÜÜÜÜÜ',product);
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

            {product.productType === ProductTypes.case && <SelectList devices={devices} handleValue={(value) => handleSelectCase(value, ProductTypes.case)} />}

            {product.productType === ProductTypes.arm && <SelectList devices={devices} handleValue={(value) => handleSelectCase(value, ProductTypes.arm)} />}

            {product.productType === ProductTypes.motor && <SelectList devices={devices} handleValue={(value) => handleSelectCase(value, ProductTypes.motor)} />}

            {product.productType === ProductTypes.lense && <SelectList devices={devices} handleValue={(value) => handleSelectCase(value, ProductTypes.lense)} />}
          </li>
        ))}
      </ul>
    </DetailSide>
  )
}
