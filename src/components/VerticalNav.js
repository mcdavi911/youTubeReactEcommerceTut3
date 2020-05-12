import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { itemCategories } from '../data'
import Action from '../actions/Action'
import { Store } from '../Store'

import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles((theme) => ({
  listNav: {
    textTransform: 'capitalize',
  }
}));

export default function VerticalNav() {
  const classes = useStyles();
  const { state, dispatch } = React.useContext(Store);

  return (
    <div>
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
    </div>
  )
}
