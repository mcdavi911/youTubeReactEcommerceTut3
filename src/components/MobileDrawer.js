import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer';
import { Store } from '../Store'
import { toggleMobileDrawer } from '../actions/Action'
import VerticalNav from './VerticalNav'


const useStyles = makeStyles({
  drawerInner: {
    paddingTop: 55,
    //width: '100vw',
    width: 250,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});



export default function MobileDrawer() {
  const { state, dispatch } = React.useContext(Store);
  const classes = useStyles();

  return (
    <Hidden mdUp>
      <Drawer anchor={"left"} open={state.toggleMobileDrawer} onClose={() => toggleMobileDrawer(dispatch, false)}>
        <div className={classes.drawerInner}>

          <VerticalNav />
        </div>
      </Drawer>
    </Hidden>
  )
}
