import React from 'react'
import DetailSide from './DetailSide'
import { devices, productTypes } from '../../data';
import Typography from '@material-ui/core/Typography';
import SlctSelect from '../SlctSelect'

export default function DetailSideKit({childProducts}) {
  
  return (
    <div>
      <DetailSide>
        <ul>
          {childProducts.length > 0 && childProducts.map(p => (
            <li key={p.id}>
              <Typography>
                {p.title}
              </Typography>

              {p.productType === productTypes.CASE && <SlctSelect devices={devices} />}
            </li>
          ))}
        </ul>
      </DetailSide>
    </div>
  )
}
