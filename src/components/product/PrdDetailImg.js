import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Store } from '../../Store';
import PrdImg from './PrdImg'
import Prd from './Prd'

import Carousel from 'nuka-carousel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  gridItemProduct: {
    flexBasis: '50%',
  }
}));


export default function PrdDetailImg({imgs}) {
  const classes = useStyles();
  //const { state, /*dispatch*/ } = React.useContext(Store);
  //const { title, getImgs } = state.productDetail;

  //console.log('YOYOYO', state.productDetail.getImgs);



  return (
    <div>
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={2}
      >
        {imgs.map(({src,alt}, idx) => (
          <Grid key={idx} item className={classes.gridItemProduct}>
            <PrdImg src={alt} alt={alt} />
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
