import React from 'react'
import PrdDetailBasket from './PrdDetailBasket'
import { devices, productType } from '../../data';
import Typography from '@material-ui/core/Typography';
import SlctSelect from '../select/SlctSelect'
import { Store } from '../../Store';

export default function PrdDetailBasketKit() {
  const { state, dispatch } = React.useContext(Store);

  const { title, childIds } = state.productDetail;

  const products = [];
  // get childProducts > hooks
  if (childIds.length > 0) {

    childIds.forEach(id => {
      const p = state.products.find(p => p.id === id);

      products.push(p);
    });
  }
  

  return (
    <div>
      <PrdDetailBasket>
        <ul>
          {products.map(p => (
            <li>
              <Typography>
                {title} asd
              </Typography>

              {p.category === productType.CASE && <SlctSelect devices={devices} />}
            </li>
          ))}
        </ul>
      </PrdDetailBasket>
    </div>
  )
}
