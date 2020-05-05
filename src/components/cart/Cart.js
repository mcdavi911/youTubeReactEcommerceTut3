import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CartProductRow from './CartProductRow'
import CartSummary from './CartSummary'
import { Store } from '../../Store'
import RightRail from '../../layouts/RightRail'

import CartProductCard from './CartProductCard';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ActionCart from '../../actions/ActionCart'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: theme.spacing(17),
    paddingRight: theme.spacing(17)
  }

}));


export default function Cart(props) {
  const { state, dispatch } = React.useContext(Store);
  const classes = useStyles();


  const left = (
    <>
      <Typography component="h4" style={{ fontSize: 22, fontWeight: 500 }} >Bag</Typography>

      {state.cart.length > 0 ? state.cart.map((p,idx) => (
        <CartProductCard key={idx} product={p} />
      )) : (
          <Typography variant="body2" style={{
            marginTop: 8
          }}>There are no items in your bag.</Typography>
        )}
    </>
  );

  const right = <CartSummary />;



  return (
    <Container classes={{ root: classes.container }}>
      <RightRail left={left} right={right} />
    </Container>


  )
}

