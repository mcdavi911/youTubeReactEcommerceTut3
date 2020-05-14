import React from 'react'
import DetailSide from './DetailSide'
import { listDevices, listArms, listLense360, listLensePhoto } from '../../data';
import ProductTypes from '../../utilities/ProductTypes';
import Typography from '@material-ui/core/Typography';
import SelectList from '../form/SelectList'
import Action from '../../actions/Action';
import { Store } from '../../Store';
import Product from '../product/Product';
import Hidden from '@material-ui/core/Hidden';
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
      


      <ul style={{ marginTop: 8 }}>
        {product.children.length > 0 && product.children.map((productChild, idx) => (
          <li key={idx}>
            <Typography>
              {productChild.title}
            </Typography>

            {productChild.productType === ProductTypes.case && <SelectList list={listDevices} label={'devices'} handleValue={(value) => handleSelect(value, productChild.title)} />}

            {productChild.title === 'Nodalview Arm' && <SelectList list={listArms} label={'arms types'} handleValue={(value) => handleSelect(value, productChild.title)} />}

            {productChild.title === 'Nodalview 360°' && <SelectList list={listLense360} label={'lenses 360'} handleValue={(value) => handleSelect(value, productChild.title)} />}

            {productChild.title === 'Nodalview Pro Photo Lens' && <SelectList list={listLensePhoto} label={'lenses photo'} handleValue={(value) => handleSelect(value, productChild.title)} />}
          </li>
        ))}
      </ul>
    </DetailSide>
  )
}
