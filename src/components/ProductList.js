import React from 'react'
import Product from './Product'
import Title from './Title'
import { Store } from '../Store'
import { itemClasses } from '../data'

// MUI
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

export default function ProductList() {
  const { state, /*dispatch*/ } = React.useContext(Store);

  return (
    <React.Fragment>
      <Container>
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

