import React from 'react'
import DetailSide from './DetailSide'
import { devices, productTypes } from '../../data';
import Typography from '@material-ui/core/Typography';
import SelectList from '../form/SelectList'
import Action from '../../actions/Action';
import { Store } from '../../Store';
import Product from '../product/Product';

export default function DetailSideKit({ childProducts }) {
  const { state, dispatch } = React.useContext(Store);

  const handleSelectCase = (value) => {
    const product = Product.create(state.productDetail);

    product.buildSpecialId(value, productTypes.CASE);

    Action.setProductDetail(dispatch, product);
  }

  return (
    <DetailSide>
      <ul>
        {childProducts.length > 0 && childProducts.map(p => (
          <li key={p.id}>
            <Typography>
              {p.title}
            </Typography>

            {p.productType === productTypes.CASE && <SelectList devices={devices} handleValue={handleSelectCase} />}

            {p.productType === productTypes.ARM && <SelectList devices={devices} handleValue={handleSelectCase} />}
          </li>
        ))}
      </ul>
    </DetailSide>
  )
}
