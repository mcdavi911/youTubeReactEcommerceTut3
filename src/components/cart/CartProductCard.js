import React from 'react'
import ProductTypes from '../../utilities/ProductTypes';


import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import SelectNum2 from '../form/SelectNum2';
import { Store } from '../../Store'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';

import ActionCart from '../../actions/ActionCart'
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default function CartProduct(props) {
  const { state, dispatch } = React.useContext(Store);

  const { id, imgHero, count, title, productType, special, price, children } = props.product;

  const handleQuantity = (quantity) => {
    ActionCart.updateCount(dispatch, id, quantity);

    console.log('quantity', quantity);
  }

  return (
    <>
      <Box display="flex" style={{ padding: '24px 8px', boxShadow: 'rgba(0, 0, 0, 0.12) 0px -1px 0px 0px inset' }}>
        <div style={{ marginRight: 20, background: '#f6f6f6', height: 150, width: 150, padding: 16 }}>
          <img src={imgHero} alt={title} style={{ mixBlendMode: 'multiply', width: '100%', height: 'auto' }} />
        </div>


        <div style={{ flexGrow: 1 }}>
          <Box display="flex" justifyContent="space-between" style={{ textTransform: 'capitalize' }}>
            <Typography style={{ color: '#111', lineHeight: '1.7' }}>{title}</Typography>
            <Typography variant="body2" style={{ color: 'rgb(17, 17, 17)', textTransform: 'capitalize' }}>
              € {price.toFixed(2)}
            </Typography>
          </Box>

          <div style={{ color: 'rgb(141, 141, 141)', textTransform: 'capitalize' }}>
            <div>{ProductTypes.display(productType)}</div>
            <div>{special[title]}</div>
            
            <ul>
              {children && children.map(productChild => (
                <li key={productChild.id}>{productChild.title} {productChild.special !== '' && (<>- <span style={{color: '#111'}}>{productChild.special}</span></>)}</li>
              ))}
            </ul>
          </div>


          <Breadcrumbs separator="|" aria-label="breadcrumb" style={{ marginTop: 8 }}>
            <Box display="flex" alignItems="center">
              <SelectNum2 range={10} handleValue={handleQuantity} setValue={count} label="Quantity" />
            </Box>
            <Button style={{ fontSize: 14 }} onClick={() => ActionCart.delete(dispatch, id)}>
              Remove
            </Button>
          </Breadcrumbs>
        </div>
      </Box>
    </>
  )
}



/*

{

  {productChild.special}
                  /*
                  <li key={productChild.id}>{productChild.title} {Object.keys(productChild.special).length !== 0 && (<>- <span style={{color: '#111'}}>{productChild.special}</span></>)}</li>
                  
                }
*/