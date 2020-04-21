import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { StoreProvider } from './Store';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({

  palette: {
    background: {
      default: '#fff',
      
    },
    primary: {
      main: '#e35656', // '#e56565', // nodalview brand color
      dark: '#ea4f4f' // brand color more saturated
    },
    text: {
      primary: 'rgba(0,0,0,.93)'
    }
  },
  typography: {
    //fontSize: 16,  use default theme body1 instead chaning fontsize globally
    
    fontFamily: [
      'Open Sans', 'sans-serif'
    ].join(','),
    
    button: {
      textTransform: 'capitalize',
      fontSize: '1rem'
    },
  },


  
  breakpoints: {
    values: {
      xs: 0,
      sm: 640, // default 600
      md: 990, // default 960
      lg: 1440, // default 1280
      xl: 1920
    }
  }
  



  /*
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
    type: 'dark',
    text: {
      primary: '#ff0000'
    },
    background: {
      default: purple[800]
    }
  },
  */
});


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StoreProvider>
        <Router>
          <App />
        </Router>
      </StoreProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
