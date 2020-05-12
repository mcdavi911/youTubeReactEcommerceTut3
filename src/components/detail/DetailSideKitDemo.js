import React from 'react'
import DetailSide from './DetailSide'
import { listDevices, listArms, listLense360, listLensePhoto } from '../../data';
import ProductTypes from '../../utilities/ProductTypes';
import Typography from '@material-ui/core/Typography';
import SelectList from '../form/SelectList'
import Action from '../../actions/Action';
import { Store } from '../../Store';
import Product from '../product/Product';
import produce from 'immer'

export default function DetailSideKitDemo() {
  const { state, dispatch } = React.useContext(Store);

  const product = new Product(state.productDetail);

  const handleSelect = (value, title) => {
    product.buildId(value, title);
    Action.setProductDetail(dispatch, product);
  }

  

  return (
    <DetailSide>
      <ul>
        {product.children.length > 0 && product.children.map((productChild, idx) => (
          <li key={idx}>
            <Typography>
              {productChild.title}
            </Typography>

            {productChild.productType === ProductTypes.case && <SelectList list={listDevices} label={'devices'} handleValue={(value) => handleSelect(value , productChild.title)} />}

            {productChild.productType === ProductTypes.arm && <SelectList list={listArms} label={'arms types'} handleValue={(value) => handleSelect(value, productChild.title)} />}

            {productChild.title === 'Nodalview 360°' && <SelectList list={listLense360} label={'lenses 360'} handleValue={(value) => handleSelect(value, productChild.title)} />}

            {productChild.title === 'Nodalview Pro Photo Lens' && <SelectList list={listLensePhoto} label={'lenses photo'} handleValue={(value) => handleSelect(value, productChild.title)} />}

          </li>
        ))}
      </ul>
    </DetailSide>
  )
}