import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import { Store } from '../Store'
import Action from '../actions/Action'
import VerticalNav from './VerticalNav'
import Search from './Search'

const useStyles = makeStyles((theme) => ({
  drawerInner: {
    //paddingTop: 80.4568987,
    //width: '100vw',
    //width: 250,
    height: '100vh'
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  toolbar: theme.mixins.toolbar
}));



export default function MobileDrawer() {
  const { state, dispatch } = React.useContext(Store);
  const classes = useStyles();

  return (
    <Hidden mdUp>
      <Drawer anchor={"top"} open={state.toggle.mobileDrawer} onClose={() => Action.toggle(dispatch, 'mobileDrawer')}>
        <div className={classes.toolbar}></div>

        <div className={classes.drawerInner}>
          <Box p={2}>
            <Search />
          </Box>
          
          <VerticalNav />
        </div>
      </Drawer>
    </Hidden>
  )
}
