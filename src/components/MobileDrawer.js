import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});



export default function MobileDrawer() {

  const [toggleDrawer, setToggleDrawer] = React.useState(true);

  return (
    <div>
      <Drawer anchor={"left"} open={toggleDrawer} onClose={() => setToggleDrawer(false)}>
        hello
      </Drawer>
    </div>
  )
}
