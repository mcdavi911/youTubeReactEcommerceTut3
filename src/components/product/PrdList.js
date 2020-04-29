import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Title from '../Title'
import { Store } from '../../Store'
import { itemCategories } from '../../data'
import PrdCard from './PrdCard'
import VerticalNav from '../VerticalNav'
import { setSearchResults, setProductType } from '../../actions/Action'

// MUI
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'


/*
// MUI Icons
import Search from '@material-ui/icons/Search'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
//import ShoppingCart from '@material-ui/icons/ShoppingCart'
import Smartphone from '@material-ui/icons/Smartphone'
import Camera from '@material-ui/icons/Camera' 
import WorkOutline from '@material-ui/icons/WorkOutline'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import ThreeSixty from '@material-ui/icons/ThreeSixty'
import CreditCard from '@material-ui/icons/CreditCard'
*/

const useStyles = makeStyles((theme) => ({
  test: {
    //marginTop: theme.spacing(.1),
    //alignContent: 'space-around',
    //margin: theme.spacing(0, -2),

    '& > div': {
      //flexBasis: (100 / 3) + '%',
      //padding: theme.spacing(2, 2, 2, 2),
    }
  },
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



export default function P_List() {
  const { state, dispatch } = React.useContext(Store);
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
                      <PrdCard {...p} />
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

