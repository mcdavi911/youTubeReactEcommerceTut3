import React from 'react'
import { Link } from 'react-router-dom';

import styled from 'styled-components'
import { ButtonContainer } from './Button'
import { Store } from '../Store'
//import SearchInput from './SearchInput'
import { setSearchTerm, setSearchResults } from '../actions/Action'

//import logo from '../assets/img/nodalview-nav-logo.png'


import { makeStyles, createStyles, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'

import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import ShoppingCart from '@material-ui/icons/ShoppingCart'


const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none'
  },

  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    //backgroundColor: fade(theme.palette.common.white, 0.15),
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      //backgroundColor: fade(theme.palette.common.white, 0.25),
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  
}));



export default function Navbar() {
  const classes = useStyles();
  const { state, dispatch } = React.useContext(Store);

  const handleChange = e => {
    setSearchTerm(dispatch, e.target.value.toLowerCase());
  };

  React.useEffect(() => {
    const searchResults = state.products.filter(p =>
      p.class.toLowerCase().includes(state.searchTerm));

    setSearchResults(dispatch, searchResults)
  }, [state.searchTerm, state.products, dispatch]);


  return (
    <>
      <AppBar className={classes.appBar} color="inherit">
        <Container>
          <Toolbar disableGutters>
            <Link to='/'>

              <img style={{ height: 32, width: 'auto' }} src="img/nodalview-shop-logo.png" alt="nodalview logo" />

            </Link>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>

            <Link to="/cart" className="ml-auto">
              <ButtonContainer >
                <ShoppingBasket />
                Cart
              </ButtonContainer>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>

    </>
  )
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`


