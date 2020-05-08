import React from 'react'
//import { makeStyles } from '@material-ui/core/styles'
import Breadcrumbs from '../Breadcrumbs';
import Container from '@material-ui/core/Container';

import DetailSide from './DetailSide'
import DetailSideCase from './DetailSideCase'
import DetailSideKit from './DetailSideKit'
import DetailImgList from './DetailImgList'

import RightRail from '../../layouts/RightRail'
import Product from '../product/Product';

import { Store } from '../../Store';
import ProductTypes from '../../utilities/ProductTypes';



export default function Detail() {
  const { state, dispatch } = React.useContext(Store);
  const product = new Product(state.productDetail);


  let right;

  switch (product.productType) {
    case ProductTypes.kit:
      right =  <DetailSideKit /> ;
      break;
    case ProductTypes.case:
      right = <DetailSideCase />;
      break;
    default:
      right = <DetailSide /> ;
  }

  return (
    <>
      <Container>
        <Breadcrumbs />
        <RightRail left={<DetailImgList imgs={product.getImgs()} />} right={right} />
      </Container >
    </>
  )
}



