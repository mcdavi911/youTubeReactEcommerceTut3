import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { itemCategories } from '../data'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Action from '../actions/Action'

import { Store } from '../Store'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'rgb(229, 229, 229) 0px -1px 0px 0px inset',
    background: '#f6f6f6',
    //marginBottom: theme.spacing(1)
    '& img': {
      // transform: 'scale(0.75)'
    }
  }
}));

export default function Banner() {
  const classes = useStyles();
  const { state, dispatch } = React.useContext(Store);

  return (
    <div className={classes.root}>
      
    </div>
  )
}



/*

<List className={classes.listNav} component="nav" aria-label="product categories" disablePadding>
          {itemCategories.map(({ label, icon: Icon }, idx) =>
            <ListItem
              key={idx}
              selected={state.productType === label}
              button
              onClick={() => { Action.setProductType(dispatch, label); Action.setSearchResults(dispatch, state.products, label) }}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          )}
        </List>





<Box display="flex" alignItems="center" justifyContent="center" style={{ textAlign: 'center' }}>
          <Box display="flex" flexDirection="column" m={1} >
            <img src="img/customIcons/Kits.png" alt="kits" />
            <Typography>Kits</Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            <img src="img/customIcons/Lenses.png" alt="lenses" />
            <Typography>Lenses</Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            <img src="img/customIcons/Cases.png" alt="cases" />
            <Typography>Cases</Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            <img src="img/customIcons/Tripods.png" alt="tripods" />
            <Typography>Tripods</Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            <img src="img/customIcons/Accessories.png" alt="accessories" />
            <Typography>Tripods</Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            <img src="img/customIcons/PrepaidCredits.png" alt="Prepaid Credits" />
            <Typography>Tripods</Typography>
          </Box>
        </Box>

*/