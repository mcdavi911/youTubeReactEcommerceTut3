import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Product from './Product'
import Title from './Title'
import { Store } from '../Store'
import { itemClasses } from '../data'
import Item from './Item'

// MUI
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

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
  const { state, /*dispatch*/ } = React.useContext(Store);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container>
        <Grid container>
          <Grid item sm={2}>
            <List component="nav" aria-label="product categories" disablePadding>
              <ListItem button>
                <ListItemIcon>
                  <WorkOutline />
                </ListItemIcon>
                <ListItemText primary="Kits" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Camera />
                </ListItemIcon>
                <ListItemText primary="Lenses" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Smartphone />
                </ListItemIcon>
                <ListItemText primary="Cases" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <ThreeSixty />
                </ListItemIcon>
                <ListItemText primary="Motor" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <PhotoCamera />
                </ListItemIcon>
                <ListItemText primary="Tripods" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <CreditCard />
                </ListItemIcon>
                <ListItemText primary="Prepaid Credits" />
              </ListItem>
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

        <div style={{ background: 'lightGrey', paddingBottom: '42.8571%', position: 'relative' }}>
          <Box display="flex" alignItems="center" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <Box display="flex" justifyContent="space-between" style={{ width: '100%', top: 0, left: 0 }}>
              <div style={{ marginLeft: '10%' }}>
                <p style={{ fontSize: 34 }}>Best equipment for</p>
                <h2 style={{ fontSize: 64 }}>HDR Photos,<br /> 360° Panoramas</h2>
              </div>
              <div>
                img
              </div>
            </Box>
          </Box>
        </div>


        <Grid container style={{ textAlign: 'center', height: 400 }} spacing="4">
          <Grid item md={4}>
            <Box display="flex" flexDirection="column" justifyContent="center" style={{}}>
              <div style={{ background: 'Grey', paddingBottom: '75%', position: 'relative' }}>

              </div>
              <div>Kits</div>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box display="flex" flexDirection="column" justifyContent="center" >
              <div style={{ background: 'Grey', paddingBottom: '75%', position: 'relative' }}>

              </div>
              <div>Lenses</div>
            </Box>
          </Grid>
          <Grid item md={4}>
            <div style={{ background: 'Grey', paddingBottom: '75%', position: 'relative' }}>

            </div>
            <div>Cases</div>
          </Grid>



        </Grid>
        <Grid container style={{ textAlign: 'center', height: 400 }} spacing="4">

          <Grid item md={4}>
            <div style={{ background: 'Grey', paddingBottom: '75%', position: 'relative' }}>

            </div>
            <div>Motor</div>
          </Grid>
          <Grid item md={4}>
            <div style={{ background: 'Grey', paddingBottom: '75%', position: 'relative' }}>

            </div>
            <div>Tripods</div>
          </Grid>
          <Grid item md={4}>
            <div style={{ background: 'Grey', paddingBottom: '75%', position: 'relative' }}>

            </div>
            <div>Prepaid Credits</div>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item sm={2}>
            <List style={{ textTransform: 'uppercase' }}>
              {itemClasses.map(c =>
                <ListItem>{c}</ListItem>
              )}
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

