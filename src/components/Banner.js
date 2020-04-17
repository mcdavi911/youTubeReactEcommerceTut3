import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'rgb(229, 229, 229) 0px -1px 0px 0px inset',
    background: 'rgb(247, 247, 247)',
  }
}));

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
      hello from banner

      </Container>
    </div>
  )
}


/*
  box-shadow: rgb(229, 229, 229) 0px -1px 0px 0px inset;

  background: rgb(247, 247, 247);
*/