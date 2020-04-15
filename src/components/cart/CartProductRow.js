import React from 'react'
import Grid from '@material-ui/core/Grid'

export default function CartProductRow() {
  return (
    <Grid container>
      <Grid item md="2">
        <p className="text-uppercase">products</p>
      </Grid>
      <Grid item md="2">
        <p className="text-uppercase">name of product</p>
      </Grid>
      <Grid item md="2">
        <p className="text-uppercase">price</p>
      </Grid>
      <Grid item md="2">
        <p className="text-uppercase">quantity</p>
      </Grid>
      <Grid item md="2">
        <p className="text-uppercase">remove</p>
      </Grid>
      <Grid item md="2">
        <p className="text-uppercase">total</p>
      </Grid>
    </Grid>
  )
}
