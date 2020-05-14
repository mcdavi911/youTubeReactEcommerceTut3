import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Store } from '../Store'
import Action from '../actions/Action'
import { itemCategories } from '../data';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';



const InlineTab = withStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(4),

    '& > span > svg': {
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(0.75), // counter marginBottom
    }
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'initial'
  },
  labelIcon: {
    minHeight: 'auto'
  }
}))(Tab);




function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


const useStyles = makeStyles((theme) => ({
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  
}));



export default function SideNav() {
  const { state, dispatch } = React.useContext(Store);
  const classes = useStyles();
  //const [value, setValue] = React.useState(null);

  const handleChange = (event, newValue) => {
    Action.setTabValues(dispatch, {sideNav: newValue});
  };

  return (
    <div className={classes.root}>
      <Tabs
        component="nav"
        orientation="vertical"
        value={state.tabValues.sideNav}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        centered
        className={classes.tabs}
      >
        {itemCategories.map(({ id, label, icon: Icon }, idx) =>
          <InlineTab
            onClick={() => { Action.setProductType(dispatch, label); Action.setSearchResults(dispatch, state.products, label) }}
            key={id}
            icon={<Icon />}
            label={label}
          />
        )}
      </Tabs>
    </div>
  )
}



/*icon={<Icon />}*/
/* label={<div style={{width: '100%'}}><Icon style={{verticalAlign: 'middle', }} />{label}</div>}*/