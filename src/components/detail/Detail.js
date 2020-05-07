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
  const product = Product.construct(state.productDetail);


  let detail;

  switch (product.productType) {
    case ProductTypes.kit:
      detail = { right: <DetailSideKit childProducts={product.getChildren} product={product} /> };
      break;
    case ProductTypes.case:
      detail = { right: <DetailSideCase /> };
      break;
    default:
      detail = { right: <DetailSide /> };
  }

  return (
    <>
      <Container>
        <Breadcrumbs />
        <RightRail left={<DetailImgList imgs={product.getImgs()} />} right={detail.right} />
      </Container >
    </>
  )
}



