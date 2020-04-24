import React from 'react'
import PrdDetailBasket from './PrdDetailBasket'
import SlctSelect from '../select/SlctSelect'
//import { Store } from '../../Store';
import { devices } from '../../data';


export default function PrdDetailBasketCase() {
  //const { state, dispatch } = React.useContext(Store);
  
  return (
    <div>
      <PrdDetailBasket>
        <SlctSelect devices={devices} />
      </PrdDetailBasket>
    </div>
  )
}
