import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'rgb(229, 229, 229) 0px -1px 0px 0px inset',
    background: '#f6f6f6',
    //marginBottom: theme.spacing(1)
    '& img': {
      // transform: 'scale(0.75)'
    }
  }
}));

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Box display="flex" alignItems="center" justifyContent="center"  style={{textAlign: 'center'}}>
          <Box display="flex" flexDirection="column" m={1} >
            <img src="img/customIcons/kits.png" alt="kits" />
            <Typography>Kits</Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            <img src="img/customIcons/lenses.png" alt="lenses" />
            <Typography>Lenses</Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            <img src="img/customIcons/cases.png" alt="cases" />
            <Typography>Cases</Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            <img src="img/customIcons/tripods.png" alt="tripods" />
            <Typography>Tripods</Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            <img src="img/customIcons/accessories.png" alt="accessories" />
            <Typography>Tripods</Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            <img src="img/customIcons/PrepaidCredits.png" alt="Prepaid Credits" />
            <Typography>Tripods</Typography>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

