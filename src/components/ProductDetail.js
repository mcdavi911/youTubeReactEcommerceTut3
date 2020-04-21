import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Breadcrumbs from './Breadcrumbs';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';




import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import { addToCart } from '../actions/Action'
import { products } from '../data';



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
    //width: '100%'
  },
}));


export default function Details() {
  const { state, dispatch } = React.useContext(Store);
  const classes = useStyles();

  const { id, imgHero, category, info, price, title, imgs, kitProductsId } = state.productDetail;
  const kitProducts = [];

  if (kitProductsId.length > 0) {

    kitProductsId.forEach(id => {
      const p = state.products.find(p => p.id === id);

      kitProducts.push(p);
    });
  }

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];


  return (
    <Container disableGutters>
      <Breadcrumbs />

      <Grid container>
        <Grid item sm={8}>

          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={2}
          >

            <Grid item className={classes.gridItemProduct}>
              <div style={{ overflow: 'hidden', background: '#f6f6f6', paddingBottom: '75%', position: 'relative' }}>
                <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={imgHero} alt={title} style={{ mixBlendMode: 'multiply' }} />
                </div>
              </div>
            </Grid>


            {kitProducts.length === 0 ?
              imgs.map(img => (
                <Grid item className={classes.gridItemProduct}>
                  <div style={{ overflow: 'hidden', background: '#f6f6f6', paddingBottom: '75%', position: 'relative' }}>
                    <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={imgHero} alt={title} style={{ mixBlendMode: 'multiply' }} />
                    </div>
                  </div>
                </Grid>
              ))
              :
              kitProducts.map(p => (
                <Grid item className={classes.gridItemProduct}>
                  <div style={{ overflow: 'hidden', background: '#f6f6f6', paddingBottom: '75%', position: 'relative' }}>
                    <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={p.imgHero} alt={title} style={{ mixBlendMode: 'multiply' }} />
                    </div>
                  </div>
                </Grid>
              ))
            }
          </Grid>

        </Grid>
        <Grid item sm={4}>
          <div style={{ padding: '0px 56px 0px 64px' }}>
            <div className={classes.productInfo} style={{ marginBottom: 4 }}>
              <Typography variant="body1" component="h2">{category}</Typography>
              <Typography component="div">{price} €</Typography>
            </div>

            <Typography variant="h5" component="h1" style={{ marginBottom: 12, fontSize: 28, fontWeight: 600, lineHeight: 1.2, letterSpacing: '0.007em' }}>{title}</Typography>



            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-name-label">Device</InputLabel>
              <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                multiple
                value={['personName']}
                onChange={'handleChange'}
                input={<Input />}
                MenuProps={'MenuProps'}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name} style={''}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>


            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-checkbox-label">Model</InputLabel>
              <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                value={['personName']}
                onChange={'handleChange'}
                input={<Input />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={'MenuProps'}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={'personName.indexOf(name) > -1'} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>



            {
              /*
              <div style={{ display: 'inline-block' }}>
              <p>Case</p>
              <span>Device</span>
              <span>Apple</span>
              <span>Huwei</span>
              <span>Samsung</span>
            </div>
              */
            }



            {
              /*
            <ul>
              {kitProducts.map(p => (
                <li>
                  <Typography>
                    {p.title}
                  </Typography>
                </li>
              ))}
            </ul>
              */
            }



            <Button variant="contained" color="primary" style={{ width: '100%', padding: '16px 24px', borderRadius: 100, marginBottom: 12 }}>Add to Basket</Button>

            <Typography>{info}</Typography>

          </div>
        </Grid>
      </Grid>

      <div style={{ marginBottom: 1200 }}></div>

      <div className="container py-5">
        {console.log('stateDetail', state)}
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1>{title}</h1>
            <p></p>
            <img src={imgHero} alt="test" />
            <p>{info}</p>
            <p>price: {price}</p>
            <div>
              <Link to="/">
                <ButtonContainer>
                  back to products
                </ButtonContainer>
              </Link>
              <ButtonContainer
                onClick={() => addToCart(dispatch, state.products, id)}
                disabled={true ? true : false}
              >
                {true ? "inCart" : "add to cart"}
              </ButtonContainer>
            </div>
          </div>
        </div>
      </div>

    </Container >
  )
}

/*
  <div className="container py-5">
  {console.log('stateDetail', state)}
  <div className="row">
    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
      <h1>{title}</h1>
      <p>{company}</p>
      <img src={img} alt="test" />
      <p>{info}</p>
      <p>price: {price}</p>
      <div>
        <Link to="/">
          <ButtonContainer>
            back to products
          </ButtonContainer>
        </Link>
        <ButtonContainer
          onClick={() => addToCart(dispatch, state.products, id)}
          disabled={inCart ? true : false}
        >
          {isInCart() ? "inCart" : "add to cart"}
        </ButtonContainer>
      </div>
    </div>
  </div>
</div>








  /*
  const isInCart = function () {
    return state.cart.some(p => p.id === id);
  }

  React.useEffect((props) => {
    isInCart();
  })
*/



