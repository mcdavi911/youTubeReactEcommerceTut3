import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Breadcrumbs from '../Breadcrumbs';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
//import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
//import FormControl from '@material-ui/core/FormControl';
//import InputLabel from '@material-ui/core/InputLabel';
//import Select from '@material-ui/core/Select';
import PrdDetailSide from './PrdDetailSide'
import PrdDetailSideCase from './PrdDetailSideCase'
import PrdDetailSideKit from './PrdDetailSideKit'
import PrdDetailImg from './PrdDetailImg'


import Carousel from 'nuka-carousel';


import RightRail from '../../layouts/RightRail'
import Prd from './Prd';


import PImg from './PrdImg'
//import MenuItem from '@material-ui/core/MenuItem';
//import Input from '@material-ui/core/Input';
//import Checkbox from '@material-ui/core/Checkbox';
//import ListItemText from '@material-ui/core/ListItemText';


import { Store } from '../../Store';
import { devices, productTypes } from '../../data';


const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'rgb(229, 229, 229) 0px -1px 0px 0px inset',
    background: '#f6f6f6',
    //marginBottom: theme.spacing(1)
  },
  gridItemProduct: {
    flexBasis: '50%',
  },
  productInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingRight: 12,

    '& > p': {
      fontSize: '1rem',
      color: theme.palette.text.primary,
      margin: 0
    }
  },
  test: {
    ...theme.typography.body1
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    //width: '100%',
    marginRight: theme.spacing(3)
  },
  testy: {
    width: '100%'
  },
  selectTest: {
    padding: 8
  },
}));



export default function PrdDetail(props) {
  const { state, dispatch } = React.useContext(Store);
  const classes = useStyles();

  let quantity = 1;

  const { id, imgHero, productType, info, price, title, imgs, childIds } = state.productDetail;

  const prd = Prd.create(state.productDetail);

  console.log('HELLO TEST HELLO333', productType);
  console.log('HELLO TEST HELLO', prd.getImgs);

  if (childIds.length !== 0) {
    console.log('HELLO TEST HELLO222', prd.getChildren);
  }

  let detail;

  switch (productType) {
    case productTypes.KIT:
      detail = { right: <PrdDetailSideKit childProducts={prd.getChildren} /> };
      break;
    //case productTypes.LENSE:
    //break;
    case productTypes.CASE:
      detail = { right: <PrdDetailSideCase /> };
      break;
    //case productTypes.MOTOR:
    //break;
    //case productTypes.TRIPODS:
    //break;
    //case productTypes.PREPAID_CREDIT:
    //break;
    default:
      detail = { right: <PrdDetailSide product={prd} dispatch={dispatch} /> };
  }


  return (
    <>
      <Container>
        <Breadcrumbs />
        <RightRail left={'hello'} right={detail.right} />
      </Container >
    </>
  )
}



