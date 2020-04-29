import React from 'react'
import { Store } from '../Store'
import Action from '../actions/Action'
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'

const useStyles = makeStyles((theme) => ({

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
    //marginRight: theme.spacing(2),
    //marginLeft: 0,
    width: '100%',
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
      width: '20ch',
    },
  },

}));

export default function Search() {
  const { state, dispatch } = React.useContext(Store);
  const classes = useStyles();

  return (

    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        value={state.searchTerm}
        onChange={(e) => Action.setSearchTerm(dispatch, e.target.value)}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}
