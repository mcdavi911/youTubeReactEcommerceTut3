import React from 'react'
import PrdDetailSide from './PrdDetailSide'
import { devices, productTypes } from '../../data';
import Typography from '@material-ui/core/Typography';
import SlctSelect from '../select/SlctSelect'
import { Store } from '../../Store';

export default function PrdDetailSideKit({childProducts}) {
  
  return (
    <div>
      <PrdDetailSide>
        <ul>
          {childProducts.map(p => (
            <li key={p.id}>
              <Typography>
                {p.title}
              </Typography>

              {p.productType === productTypes.CASE && <SlctSelect devices={devices} />}
            </li>
          ))}
        </ul>
      </PrdDetailSide>
    </div>
  )
}
