import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    }
  },
  left: {
    
    [theme.breakpoints.up('md')]: {
      flexGrow: 1,
    },
  },
  right: {
    
    [theme.breakpoints.up('md')]: {
      flex: '0 0 464px'
    }
  } 
}));


export default function RightRail(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        {props.left}
      </div>

      <div className={classes.right}>
        {props.right}
      </div >
    </div>
  )
}
