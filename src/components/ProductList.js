import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Product from './Product'
import Title from './Title'
import { Store } from '../Store'
import { itemCategories } from '../data'
import Item from './Item'
import { setSearchTerm } from '../actions/Action'

// MUI
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'

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
    flexBasis: (100 / 3) + '%',
  }
}));




export default function ProductList() {
  const { state, dispatch } = React.useContext(Store);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container>
        <Grid container>
          <Grid item sm={2}>

            <List component="nav" aria-label="product categories" disablePadding>
              {itemCategories.map(({ label, icon: Icon }, idx) =>
                <ListItem button key={idx} onClick={() => {setSearchTerm(dispatch, label)}}>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={label} />
                </ListItem>
              )}
            </List>
          </Grid>
          <Grid item sm={10}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing="2"
              className={classes.test}
            >
              {state.searchResults.map(p => (
                <Grid item className={classes.gridItemProduct}>
                  <Item key={p.id} {...p} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>





        <div style={{ marginBottom: 1200 }}></div>

        <Grid container>
          <Grid item sm={2}>
            <List style={{ textTransform: 'uppercase' }}>
              {
                /*
                {itemCategories.map(c =>
                <ListItem>{c}</ListItem>
              )}
                */
              }

            </List>
          </Grid>
          <Grid item sm={10}>
            <Grid container spacing={3}>
              {state.searchResults.map(p => (
                <Grid item sm={4}>
                  <Product key={p.id} {...p} />
                </Grid>
              ))}
            </Grid>

            {
              /*
              <Box display="flex" flexWrap="wrap" style={{flexBasis: '33%', width: '100%'}}>
              {state.searchResults.map(p => (
                <Product key={p.id} {...p} />
              ))}
            </Box>
              */
            }

          </Grid>
        </Grid>



      </Container>






    </React.Fragment>
  )
}

