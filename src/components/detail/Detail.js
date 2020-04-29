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
import { productTypes } from '../../data';



export default function Detail() {
  const { state, dispatch } = React.useContext(Store);
  const prd = Product.create(state.productDetail);

  let detail;

  switch (prd.productType) {
    case productTypes.KIT:
      detail = { right: <DetailSideKit childProducts={prd.getChildren} /> };
      break;
    //case productTypes.LENSE:
    //break;
    case productTypes.CASE:
      detail = { right: <DetailSideCase /> };
      break;
    //case productTypes.MOTOR:
    //break;
    //case productTypes.TRIPODS:
    //break;
    //case productTypes.PREPAID_CREDIT:
    //break;
    default:
      detail = { right: <DetailSide product={prd} dispatch={dispatch} /> };
  }

  return (
    <>
      <Container>
        <Breadcrumbs />
        <RightRail left={<DetailImgList imgs={prd.getImgs()} />} right={detail.right} />
      </Container >
    </>
  )
}



