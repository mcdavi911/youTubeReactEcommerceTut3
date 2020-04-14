import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Topbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/cart/Cart';
import Default from './components/Default';


const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));


function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;