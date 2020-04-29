import React from 'react'
import PrdDetailSide from './PrdDetailSide'
import SlctSelect from '../select/SlctSelect'
import { devices } from '../../data';


export default function PrdDetailSideCase() {
  
  return (
    <div>
      <PrdDetailSide>
        <SlctSelect devices={devices} />
      </PrdDetailSide>
    </div>
  )
}
