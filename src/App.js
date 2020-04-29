import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Prd from './components/product/Prd';
import { products } from './data';

import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Topbar';
import PrdList from './components/product/PrdList';
import PrdDetail from './components/product/PrdDetail';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import Banner from './components/Banner';
import MobileDrawer from './components/MobileDrawer';


const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));


function App() {
  const classes = useStyles();

  Prd.setPrds(products);

  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.toolbar}></div>
      <Banner />
      <Box style={{height: 30}}></Box>
      <MobileDrawer></MobileDrawer>
      <Switch>
        <Route exact path="/" component={PrdList} />
        <Route path="/details" component={PrdDetail} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <footer>
        asdsadasdsad
      </footer>
    </React.Fragment>
  );
}

export default App;
