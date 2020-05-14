import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Store } from '../../Store'

const useStyles = makeStyles((theme) => ({
  productTypeHeading: {
    textTransform: 'capitalize',
    marginTop: 0,
    fontWeight: 500
  },
}));


export default function ProductHeading() {
  const { state, /*dispatch*/ } = React.useContext(Store);
  const classes = useStyles();

  return (
    <header>
      <h1 className={classes.productTypeHeading}>{state.productType}</h1>
    </header>
  )
}


