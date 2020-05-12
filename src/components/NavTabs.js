import React from 'react'
import Container from '@material-ui/core/Container';
import { itemCategories } from '../data';

import { Store } from '../Store'
import Action from '../actions/Action'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
  root2: {
    boxShadow: 'rgb(229, 229, 229) 0px -1px 0px 0px inset',
    background: '#f6f6f6',
    //marginBottom: theme.spacing(1)
  },
  root: {
    //flexGrow: 1,
    //maxWidth: 500,
    minWidth: 100
  },
});






export default function NavTabs() {
  const classes = useStyles();
  

  const { state, dispatch } = React.useContext(Store);

  const [value, setValue] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const a11yProps = (index) => {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    }
  } 


  return (
    <div className={classes.root2}>
      

        <Box display="flex" justifyContent="center">
          <Tabs
            className={classes.root}
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {itemCategories.map(({ id, label, icon: Icon }, idx) =>
              <Tab
                {...a11yProps(idx)}
                onClick={() => { Action.setProductType(dispatch, label); Action.setSearchResults(dispatch, state.products, label) }}
                key={id}
                icon={<Icon />}
                label={label} />
            )}
          </Tabs>
        </Box>

      
    </div>
  )
}

