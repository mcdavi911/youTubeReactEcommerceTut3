import React from 'react'
import { Link } from 'react-router-dom';
import { Store } from '../Store'

import Action from '../actions/Action';


import Search from './Search'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar'
import Badge from '@material-ui/core/Badge';
import Hidden from '@material-ui/core/Hidden';

import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import MenuIcon from '@material-ui/icons/Menu';


import IconButton from '@material-ui/core/IconButton';





const useStyles = makeStyles((theme) => ({
  appBar: {
    //boxShadow: 'none',
    boxShadow: 'inset 0 -1px 0 0 #e5e5e5',
    //marginBottom: theme.spacing(2)
    zIndex: theme.zIndex.drawer + 1,
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
    border: '1px solid #ccc',
    //backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      //backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    '&:focus': {
      //border: '1px solid grey',
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


  hidden: {
    visibility: 'hidden'
  },
  toolbar: {
    //minHeight: theme.spacing(10)
  },
  brand: {
    height: 25.4561,
    width: 'auto',

    [theme.breakpoints.up('md')]: {
      height: 28.12348
    },
    [theme.breakpoints.up('lg')]: {
      flexBasis: (100 / 3) + '%',
    }
  },

}));




export default function Navbar() {
  const classes = useStyles();
  const { state, dispatch } = React.useContext(Store);

  const cartAmount = () => {
    if (state.cart.length === 0) return;
    let count = 0;
    
    state.cart.forEach(p => {
      count += p.count;
    })

    return count
  };



  React.useEffect(() => {
    Action.setSearchResults(dispatch, state.products, state.searchTerm);
  }, [state.searchTerm, state.products, dispatch]);


  React.useEffect(() => {
    Action.setProductType(dispatch, state.searchTerm.length === 0 ? undefined : 'search')

  }, [state.searchTerm, dispatch]);

  return (
    <>
      <AppBar className={classes.appBar} color="inherit">
        <Container>
          <Toolbar disableGutters className={classes.toolbar}>

            <Hidden mdUp>
              <IconButton onClick={() => Action.toggleMobileDrawer(dispatch)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>

              <div className={classes.grow} />
            </Hidden>


            <Link to='/' onClick={() => { Action.setProductType(dispatch); Action.setSearchResults(dispatch, state.products) }}>
              <img className={classes.brand} src="img/nodalview-shop-logo.png" alt="nodalview logo" />
            </Link>

            <div className={classes.grow} />

            <Hidden smDown>
              <Search />
              <div className={classes.grow} />
            </Hidden>





            <Link to="/cart" style={{ marginRight: 12 }}>
              <IconButton>
                <Badge badgeContent={cartAmount()} color="primary">
                  <ShoppingBasket />
                </Badge>
              </IconButton>
            </Link>




          </Toolbar>
        </Container>
      </AppBar >

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



