import React from 'react'
import DetailSide from './DetailSide'
import SlctSelect from '../SlctSelect'
import { devices } from '../../data';


export default function DetailSideCase() {
  
  return (
    <div>
      <DetailSide>
        <SlctSelect devices={devices} />
      </DetailSide>
    </div>
  )
}
