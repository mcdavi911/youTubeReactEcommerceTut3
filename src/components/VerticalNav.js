import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { itemCategories } from '../data'
import { setSearchResults, setCategory } from '../actions/Action'
import { Store } from '../Store'

//import Box from '@material-ui/core/Box'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
//import Icon from '@material-ui/core/Icon'

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
    flexBasis: (100 / 2) + '%',
    [theme.breakpoints.up('lg')]: {
      flexBasis: (100 / 3) + '%',
    }
  },
  listNav: {
    textTransform: 'capitalize',
    '& span': {

    }
  },
  categoryHeading: {
    textTransform: 'capitalize',
    marginTop: 0,
    fontWeight: 500
  },
}));
 

export default function VerticalNav() {
  const classes = useStyles();
  const { state, dispatch } = React.useContext(Store);

  return (
    <div>
      <List className={classes.listNav} component="nav" aria-label="product categories" disablePadding>
        {itemCategories.map(({ id, label, icon: Icon }, idx) =>
          <ListItem
            key={idx}
            selected={state.category === label}
            button
            onClick={() => { setCategory(dispatch, label); setSearchResults(dispatch, state.products, label) }}
          >
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        )}
      </List>
    </div>
  )
}
