import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Store } from '../../Store';

import Breadcrumbs from '../Breadcrumbs';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { addToCart } from '../../actions/Action'

import { devices, productType } from '../../data';


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


export default function PrdDetailBasket({children}) {
  const { state, dispatch } = React.useContext(Store);
  const classes = useStyles();
  let quantity = 1;

  const { id, imgHero, category, info, price, title, imgs, childIds } = state.productDetail;


  //const kitProducts = [];
  const kitProducts = [];



  // get childProducts > hooks
  if (childIds.length > 0) {

    childIds.forEach(id => {
      const p = state.products.find(p => p.id === id);

      kitProducts.push(p);
    });
  }

  

  



  let basketContent;

{
  /*
switch (category) {
    case productType.KIT:
      basketContent = (
        <ul>
          {kitProducts.map(p => (
            <li key={p.id}>
              <Typography>
                {p.title}
              </Typography>

              {p.title.toLowerCase() === 'nodalview cases' && casesSelect}
            </li>
          ))}
        </ul>
      );
      break;
    case productType.LENSE:

      break;
    case productType.CASE:
      basketContent = casesSelect
      break;
    case productType.MOTOR:
      break;
    case productType.TRIPODS:
      break;
    case productType.PREPAID_CREDIT:
      break;
    default:
    // code block

  }
  */
}

  


  const initQuantitySelect = () => {
    let children = []
    for (let idx = 0; idx < 10; idx++) {
      children.push(<option aria-label="None" value={idx + 1}>{idx + 1}</option>)
    }

    return children;
  }


  /*
  if (childIds.length > 0) {

    childIds.forEach(id => {
      const p = state.products.find(p => p.id === id);

      kitProducts.push(p);
    });
  }
  */



 



  return (
    <div style={{ padding: '0px 56px 0px 64px' }}>
      <div className={classes.productInfo} style={{ marginBottom: 4 }}>
        <Typography variant="body1" component="h2">{category}</Typography>
        <Typography component="div">{price} €</Typography>
      </div>

      <Typography variant="h5" component="h1" style={{
        fontSize: 28, fontWeight: 600, lineHeight: 1.2, letterSpacing: '0.007em'
      }}> {title}</Typography >

      {children}

      {
        /*
        <ul>
        {kitProducts.map(p => (
          <li>
            <Typography>
              {p.title}
            </Typography>

            {p.title.toLowerCase() === 'nodalview cases' && casesSelect}
          </li>
        ))}
      </ul>
        */
      }

      {
        /*
        {title.toLowerCase() === 'nodalview cases' && casesSelect}
        */
      }

      

      <Box display="flex" style={{ marginTop: 16, marginBottom: 16, marginLeft: 8 }}>
        <p style={{ marginRight: 8 }}>Quantity</p>
        <FormControl style={{ marginLeft: 0, minWidth: 32 }} variant="outlined" className={classes.formControl}>

          <Select
            classes={{ root: classes.selectTest }}
            native
            /*value={category}*/
            onChange={(e) => quantity = parseInt(e.target.value)}
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-simple',
            }}
          >
            {initQuantitySelect()}
          </Select>
        </FormControl>
      </Box>

      <Button onClick={() => addToCart(dispatch, state.productDetail, quantity)} variant="contained" color="primary" style={{ marginBottom: 24, width: '100%', padding: '16px 24px', borderRadius: 100 }} >Add to Basket</Button>

      <Typography style={{ lineHeight: 1.75 }}>{info}</Typography>

    </div >
  )
}
