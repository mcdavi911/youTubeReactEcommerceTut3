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
import Box from '@material-ui/core/Box'

import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
//import ShoppingCart from '@material-ui/icons/ShoppingCart'
import Smartphone from '@material-ui/icons/Smartphone'
import Camera from '@material-ui/icons/Camera'
import WorkOutline from '@material-ui/icons/WorkOutline'
import PhotoCamera from '@material-ui/icons/PhotoCamera'

import CreditCard from '@material-ui/icons/CreditCard'
//import CardGiftcard from '@material-ui/icons/CardGiftcard'

import IconButton from '@material-ui/core/IconButton';

// Icon options for motor
//import Settings from '@material-ui/icons/Settings'
//import Cached from '@material-ui/icons/Cached'
//import FlashOn from '@material-ui/icons/FlashOn'
//import FlipCameraAndroid from '@material-ui/icons/FlipCameraAndroid'
//import Loop from '@material-ui/icons/Loop'
//import Sync from '@material-ui/icons/Sync'
import ThreeSixty from '@material-ui/icons/ThreeSixty'



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
    //backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      //backgroundColor: fade(theme.palette.common.white, 0.25),
      //backgroundColor: fade(theme.palette.common.black, 0.25),

    },
    //marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.08)',
    [theme.breakpoints.up('sm')]: {
      //marginLeft: theme.spacing(3),
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
      //width: '20ch',
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
  links: {
    color: 'red',
    fontWeight: 700,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),

    '& > a': {
      color: '#e56565',
      padding: theme.spacing(2),
      marginRight: theme.spacing(1),
    }
  },
  categories: {
    width: '100%',
    textAlign: 'center',
    margin: '0 auto',
    //position: 'absolute',
    bottom: -75,
    left: 0,
    display: "flex",
    justifyContent: "center",
    borderRadius: theme.shape.borderRadius,
    '& > a': {
      color: '#333',
      textDecoration: 'none',
      '&:hover' : {
        backgroundColor: fade(theme.palette.common.black, 0.15),
      }
    }
  },

}));


/*
 
borderRadius: theme.shape.borderRadius,
    //backgroundColor: fade(theme.palette.common.white, 0.15),
    //backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      //backgroundColor: fade(theme.palette.common.white, 0.25),
      //backgroundColor: fade(theme.palette.common.black, 0.25),
    },
*/



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
      <AppBar className={classes.appBar} color="inherit" position="static">
        <Container>
          <Toolbar disableGutters>

            <Box style={{ height: 64, marginTop: 12, alignSelf: 'start', display: 'flex' }}>
              <Link to='/' style={{ alignSelf: 'center' }}>
                <img style={{ height: 32, width: 'auto' }} src="img/nodalview-shop-logo.png" alt="nodalview logo" />
              </Link>
            </Box>

            <div style={{ width: '40%', minWidth: 200, margin: '12px auto 0 auto', position: 'relative' }}>
              <div className={classes.search} style={{ width: '100%', fontSize: 20 }}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>

                <InputBase
                  style={{ fontSize: 'inherit', padding: 12 }}
                  fullWidth
                  value={state.searchTerm}
                  onChange={handleChange}
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>

              <Box class={classes.categories}>
                <Link href="#" style={{ display: "flex", flexDirection: 'column', alignContent: 'center', padding: '12px 18px' }}>
                  <span>
                    <WorkOutline />
                  </span>
                    Kits
                  </Link>
                <Link color="textPrimary" href="#" style={{ display: "flex", flexDirection: 'column', alignContent: 'center', padding: '12px 18px' }}>
                  <span>
                    <Camera />
                  </span>
                    Lenses
                  </Link>
                <Link color="textPrimary" href="#" style={{ display: "flex", flexDirection: 'column', alignContent: 'center', padding: '12px 18px' }}>
                  <span>
                    <Smartphone />
                  </span>
                    Cases
                  </Link>
                <Link color="textPrimary" href="#" style={{ display: "flex", flexDirection: 'column', alignContent: 'center', padding: '12px 18px' }}>
                  <span>
                    <ThreeSixty />
                  </span>
                    Motor
                  </Link>
                <Link color="textPrimary" href="#" style={{ display: "flex", flexDirection: 'column', alignContent: 'center', padding: '12px 18px' }}>
                  <span>
                    <PhotoCamera />
                  </span>
                    Tripods
                  </Link>
                <Link color="textPrimary" href="#" style={{ display: "flex", flexDirection: 'column', alignContent: 'center', padding: '12px 18px' }}>
                  <span>
                    <CreditCard />
                  </span>
                  Prepaid Credits
                  </Link>
              </Box>
            </div>

            <Box style={{ height: 64, marginTop: 12, alignSelf: 'start', display: 'flex' }}>
              <Link to="/cart" style={{alignSelf: 'center'}}>
                <IconButton>
                  <ShoppingBasket />
                </IconButton>
              </Link>
            </Box>

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



