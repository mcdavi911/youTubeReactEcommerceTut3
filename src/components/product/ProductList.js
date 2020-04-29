import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Store } from '../../Store'
import ProductCard from './ProductCard'
import VerticalNav from '../VerticalNav'

// MUI
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles((theme) => ({
  gridItemProduct: {
    flexBasis: '100%',
    [theme.breakpoints.up('sm')]: {
      flexBasis: (100 / 2) + '%',
    },
    [theme.breakpoints.up('md')]: {
      //flexBasis: (100 / 2) + '%',
    },
    [theme.breakpoints.up('lg')]: {
      flexBasis: (100 / 3) + '%',
    }
  },
  listNav: {
    textTransform: 'capitalize',
    '& span': {

    }
  },
  productTypeHeading: {
    textTransform: 'capitalize',
    marginTop: 0,
    fontWeight: 500
  },
}));



export default function ProductList() {
  const { state, /*dispatch*/ } = React.useContext(Store);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={3}>
          <Grid item sm={'auto'} md={2} lg={2}>

            <Hidden smDown>
              <VerticalNav />
            </Hidden>
          </Grid>
          <Grid item sm={12} md={10} lg={10}>
            <header>
              <h1 className={classes.productTypeHeading}>{state.productType}</h1>
            </header>

            <Grid
              container
              direction="row"
              alignItems="center"
              spacing={2}
            >
              {state.searchResults.length !== 0 ?
                (
                  state.searchResults.map(p => (
                    <Grid key={p.id} item className={classes.gridItemProduct}>
                      <ProductCard {...p} />
                    </Grid>
                  ))
                ) : (
                  <Grid item>
                    <p>Sorry no search results for <strong>{state.searchTerm}</strong></p>
                  </Grid>
                )
              }
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}
