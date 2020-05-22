import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Breadcrumbs from '../Breadcrumbs';
import Container from '@material-ui/core/Container';
// import ProductHeading from '../product/ProductHeading';

import DetailSide from './DetailSide';
import DetailSideCase from './DetailSideCase';
import DetailSideKit from './DetailSideKit';
import DetailSideKitDemo from './DetailSideKitDemo';
import DetailImgList from './DetailImgList';
import DetailSideHeader from './DetailSideHeader';
import Hidden from '@material-ui/core/Hidden';

import { productList } from '../../data';
import RightRail from '../../layouts/RightRail'
import Product from '../product/Product';

import { Store } from '../../Store';
import ProductTypes from '../../utilities/ProductTypes';
//import ReactSwipe from 'react-swipe';
//import SwipeCarousel from '../SwipeCarousel';
import SwipeCarousel2 from '../SwipeCarousel2';


const useStyles = makeStyles((theme) => ({
  imgTest: {
    // height: 'auto',
    // transform: 'scale(.5)',
    // mixBlendMode: 'multiply',
    background: 'green',
    height: 400
  }
}));


export default function Detail() {
  const { state, dispatch } = React.useContext(Store);
  const classes = useStyles();
  const productDetail = new Product(state.productDetail);
  let productTest;

  let [currentPos, setCurrentPos] = React.useState(0);

  /*
  const handlePos = React.useCallback(pos => {
    setCurrentPos(pos);
    console.log('handlePos', pos);
  }, [setCurrentPos]);
  */

  const imgs = React.useMemo(() => productDetail.imgs, []);

  let right;
  const left = (
    <>
      <Hidden smDown>
        <DetailImgList imgs={imgs} />
      </Hidden>


      <Hidden mdUp>
        <div style={{ marginLeft: 16, marginRight: 16 }}>
          <DetailSideHeader />

          <div style={{ marginBottom: 16 }} />

          <SwipeCarousel2 imgs={imgs} /*handlePos={handlePos}*/ />
        </div>
      </Hidden>
    </>
  );


  switch (productDetail.productType) {
    case ProductTypes.kit:
      if (productDetail.title === 'Kit Demo') {
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
    <Container disableGutters>
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


*/