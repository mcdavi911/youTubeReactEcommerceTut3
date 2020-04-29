import React from 'react'


import BreadcrumbsBar from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Store } from '../Store'


export default function Breadcrumbs() {
  const { state, dispatch } = React.useContext(Store);
  

  

  return (
    <>
      <Box p={2} style={{ textTransform: 'capitalize', fontSize: 14 }}>
        <BreadcrumbsBar aria-label="breadcrumb" style={{fontSize: 14}}>
          <Link to="/" onClick={() => ''}>
            {state.productType}
          </Link>
          <Typography color="textPrimary" style={{fontSize: 14}}>
            {state.productDetail.title}
          </Typography>
        </BreadcrumbsBar>
      </Box>
    </>
  )
}

