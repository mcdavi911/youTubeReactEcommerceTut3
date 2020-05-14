import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Store } from '../../Store';
import SelectNum from '../form/SelectNum';
import DetailSideHeader from './DetailSideHeader';
import Hidden from '@material-ui/core/Hidden';


import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { ActionCart2 } from '../../actions/ActionCart';



const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'rgb(229, 229, 229) 0px -1px 0px 0px inset',
    background: '#f6f6f6',
    //marginBottom: theme.spacing(1)
  },
  gridItemProduct: {
    flexBasis: '50%',
  },
  productInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingRight: 12,

    '& > p': {
      fontSize: '1rem',
      color: theme.palette.text.primary,
      margin: 0
    }
  },
  test: {
    ...theme.typography.body1
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    //width: '100%',
    marginRight: theme.spacing(3)
  },
  testy: {
    width: '100%'
  },
  selectTest: {
    padding: 8
  },
}));


export default function DetailSide({ children }) {
  const { state, dispatch } = React.useContext(Store);

  const classes = useStyles();
  let productQuantity = 1;

  const { info } = state.productDetail;

  const handleQuantity = (quantity) => productQuantity = quantity;


  const handleAdd = () => {
    const actionCart = new ActionCart2(dispatch, state.cart);

    actionCart.add2(state.productDetail, productQuantity);
  }

  React.useEffect(() => {
    //Action.clearProductDetailSpecial(dispatch);
  }, [handleAdd])


  return (
    <div style={{ padding: '0px 56px 0px 64px' }}>

      <Hidden smDown>
        <DetailSideHeader />
      </Hidden>

      {children}

      <Box display="flex" alignItems="center" style={{ marginTop: 16, marginBottom: 16, marginLeft: 8 }}>
        <p style={{ marginRight: 8 }}>Quantity</p>

        <SelectNum range={10} handleValue={handleQuantity} />
      </Box>

      <Button onClick={handleAdd} variant="contained" color="primary" style={{ marginBottom: 24, width: '100%', padding: '16px 24px', borderRadius: 100 }} >Add to Bag</Button>

      <Typography style={{ lineHeight: 1.75 }}>{info}</Typography>
    </div>
  )
}
