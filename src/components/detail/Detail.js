import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Breadcrumbs from '../Breadcrumbs';
import Container from '@material-ui/core/Container';
import ProductHeading from '../product/ProductHeading';

import DetailSide from './DetailSide'
import DetailSideCase from './DetailSideCase'
import DetailSideKit from './DetailSideKit'
import DetailSideKitDemo from './DetailSideKitDemo'
import DetailImgList from './DetailImgList'
import DetailSideHeader from './DetailSideHeader';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';

import RightRail from '../../layouts/RightRail'
import Product from '../product/Product';

import { Store } from '../../Store';
import ProductTypes from '../../utilities/ProductTypes';
import Carousel from 'nuka-carousel';


const useStyles = makeStyles((theme) => ({
  imgTest: {
    height: 'auto',
    transform: 'scale(.5)',
    mixBlendMode: 'multiply',
  }
}));


export default function Detail() {
  const { state, dispatch } = React.useContext(Store);
  const classes = useStyles();
  const product = new Product(state.productDetail);

  const imgs = product.getImgs();

  let right;
  const left = (
    <>
      <Hidden smDown>
        <DetailImgList imgs={imgs} />
      </Hidden>
      <Hidden mdUp>
        <DetailSideHeader />

        <Carousel disableEdgeSwiping style={{ background: 'rgb(246, 246, 246)', marginTop: 16, marginBottom: 16 }}>
          {imgs && imgs.map(({ src, alt }, idx) => (
            <img
              src={src}
              alt={alt}
              key={idx}
              className={classes.imgTest}
            />
          ))}
        </Carousel>
      </Hidden>
    </>
  );



  switch (product.productType) {
    case ProductTypes.kit:
      if (product.title === 'Kit Demo') {
        right = <DetailSideKitDemo />;
      } else {
        right = <DetailSideKit />
      }
      break;
    case ProductTypes.case:
      right = <DetailSideCase />;
      break;
    default:
      right = <DetailSide />;
  }

  return (
    <Container disableGutters >
      <Hidden smDown>
        <Breadcrumbs />
      </Hidden>

      <RightRail left={left} right={right} />
    </Container>
  )
}

/*

 <div style={{background: 'red'}}>
        <img src={imgs && imgs[0].src} alt="asf" style={{mixBlendMode: 'multiply', position: 'relative'}} />

      </div>

*/

