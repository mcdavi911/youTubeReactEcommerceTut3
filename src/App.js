import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import NavTabs from './components/NavTabs';

import Product from './components/product/Product';
import { products } from './data';

import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Topbar';
import PrdList from './components/product/ProductList';
import Detail from './components/detail/Detail';
import Cart from './components/cart/Cart';
import Default from './components/Default';
//import Banner from './components/Banner';
import MobileDrawer from './components/MobileDrawer';

import ProductTypes from './utilities/ProductTypes';


const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));


function App() {
  const classes = useStyles();

  React.useEffect(() => {
    Product.setProducts(products);
  }, []);


  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.toolbar}></div>


      <Box style={{ height: 30 }}></Box>
      <MobileDrawer></MobileDrawer>
      <Switch>
        <Route exact path="/" component={PrdList} />
        <Route path="/details" component={Detail} />
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

/*
<NavTabs />
<Banner />
*/

