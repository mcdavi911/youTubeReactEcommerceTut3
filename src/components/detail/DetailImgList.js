import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import DetailImg from './DetailImg'
import Carousel from 'nuka-carousel';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  flexBasis50: {
    flexBasis: '50%',
  },
  flexBasis100: {
    flexBasis: '100%',
  }
}));


export default function DetailImgList({imgs}) {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={2}
      >
        {imgs.map(({src,alt}, idx) => (
          <Grid key={idx} item className={imgs.length > 1 ? classes.flexBasis50 : classes.flexBasis100}>
            <DetailImg src={src} alt={alt} />
          </Grid>
        ))}
      </Grid>

      <Carousel>
        <img
          src={`http://placehold.it/1000x400/7732bb/ffffff/&text=slide1`}
          alt={`Slide ${1}`}
          key="1"

          style={{
            height: 400
          }}
        />
      </Carousel>

    </div>
  )
}
