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
import Badge from '@material-ui/core/Badge';

import Search from '@material-ui/icons/Search'
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
    //border: '1px solid #fff',
    boxShadow: '0px 5px 12px rgba(0, 0, 0, 0.15)',
    //fontSize: theme.typography.pxToRem(20),
    borderRadius: theme.shape.borderRadius,
    //backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      //backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    //marginRight: theme.spacing.unit * 2,
    //marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      //marginLeft: theme.spacing.unit * 3,
      //width: 'auto',
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
    padding: theme.spacing(2, 2, 2, 1),
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
  menuWrapper: {
    //width: '100%',
    width: theme.spacing(65),
    textAlign: 'center',
    //margin: '0 auto',
    //position: 'absolute',
    //bottom: -75,
    //left: 0,
    display: "flex",
    justifyContent: "center",
    alignSelf: 'flex-end',

    //borderRadius: theme.shape.borderRadius,
    '& > a': {
      color: theme.palette.text.primary,
      //marginLeft: theme.spacing(.5),
      //marginRight: theme.spacing(.5),
      textDecoration: 'none',
      display: "flex",
      flexGrow: 1,
      //flexDirection: 'row-reverse',
      flexDirection: 'column',
      alignContent: 'center',
      padding: `${theme.spacing.unit * 1.5}px ${theme.spacing.unit * 2}px`,
      fontWeight: 700,
      
      position: 'relative',
      overflow: 'hidden',

      '&:before': {
        content: '""',
        position: 'absolute',
        background: theme.palette.primary.dark,
        bottom: 0,
        left: '0',
        right: '0',
        height: '3px',
        transform: 'translateX(-100%)',
        opacity: 0,
        transition: 'transform .2s linear,opacity .2s linear'
      },
      '&:hover:before': {
        transform: 'translateX(0)',
        opacity: 1
      }

    }
  },
  
  toolbar: {
    minHeight: theme.spacing(10)
  }
}));


/*
topbarLinks: {
    position: 'relative',
    overflow: 'hidden',
    marginLeft: theme.spacing(2),
    display: 'inline-flex',
    padding: '20px 8px',
    maxHeight: 64,

    '&:hover': {
      textDecoration: 'none',
      //borderBottom: '4px solid red'
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      background: theme.palette.secondary.main,
      bottom: 0,
      left: '0',
      right: '0',
      height: '3px',
      transform: 'translateX(-100%)',
      opacity: 0,
      transition: 'transform .2s linear,opacity .2s linear,-webkit-transform .2s linear'
    },
    '&:hover:before': {
      transform: 'translateX(0)',
      opacity: 1
    }
  }



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
  const [isSearchToggle, setIsSearchToggle] = React.useState(false);

  const toggleSearch = e => {
    setIsSearchToggle((prevState) => !prevState);
  }


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
          <Toolbar disableGutters className={classes.toolbar}>

            <Link to='/' onClick={() => setIsSearchToggle(false)}>
              <img style={{ height: 32, width: 'auto' }} src="img/nodalview-shop-logo.png" alt="nodalview logo" />
            </Link>

            <div className={classes.grow} />

            {isSearchToggle ? (
              <div className={classes.menuWrapper} style={{alignSelf: isSearchToggle ? 'center':''}}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <Search />
                  </div>

                  <InputBase
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
              </div>
            ) : (
                <div class={classes.menuWrapper}>
                  <Link href="#" style={{}}>
                    <span>
                      <WorkOutline />
                    </span>
                  Kits
                </Link>
                  <Link href="#">
                    <span>
                      <Camera />
                    </span>
                  Lenses
                </Link>
                  <Link href="#">
                    <span>
                      <Smartphone />
                    </span>
                  Cases
                </Link>
                  <Link href="#">
                    <span>
                      <ThreeSixty />
                    </span>
                  Motor
                </Link>
                  <Link href="#">
                    <span>
                      <PhotoCamera />
                    </span>
                  Tripods
                </Link>
                  <Link href="#">
                    <span>
                      <CreditCard />
                    </span>
                    {/*Prepaid */} Credits
                </Link>
                </div>
              )}

            <div className={classes.grow} />


            <IconButton onClick={(e) => toggleSearch(e)}>
              <Search />
            </IconButton>

            <Link to="/cart" style={{marginRight: 12}}>
              <IconButton>
                <Badge badgeContent={4} color="primary">
                  <ShoppingBasket />
                </Badge>
              </IconButton>
            </Link>


          </Toolbar>
        </Container>


      </AppBar>

    </>
  )
}

/*
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`
*/



