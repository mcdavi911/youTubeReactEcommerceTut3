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

  const handleValue = (value) => {
    const prd = Product.create(state.productDetail);
    
    prd.children.forEach(p => {
      if (p.productType === productTypes.CASE) {
        p.special = value;
        console.log(p);
      }
    });

    console.log('wazaa', prd);
    
    //const idx = prd.children.findIndex(p => p.productType === productTypes.CASE);
    


    //const prdChild = Product.create(prd.children[idx]);
    //prdChild.special = value;
    
    //console.log('ZZZZ',prdChild);
    //prd.children.splice(idx,1, prdChild);
    

    //const prdChild = prd.children.filter(p => p.productType === productTypes.CASE);
    //prdChild.special = value;
  
    Action.setProductDetail(dispatch, prd);
  }

  return (
    <div>
      <DetailSide>
        <ul>
          {childProducts.length > 0 && childProducts.map(p => (
            <li key={p.id}>
              <Typography>
                {p.title}
              </Typography>

              {p.productType === productTypes.CASE && <SelectList devices={devices} handleValue={handleValue} />}
            </li>
          ))}
        </ul>
      </DetailSide>
    </div>
  )
}
