import React from 'react'


import BreadcrumbsBar from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Store } from '../Store'


export default function Breadcrumbs() {
  const { state, dispatch } = React.useContext(Store);
  

  // wenn category is set category-breadcrumb

  return (
    <>
      <Box p={2} style={{ textTransform: 'capitalize', fontSize: 14 }}>
        <BreadcrumbsBar aria-label="breadcrumb" style={{fontSize: 14}}>
          <Link to="/" onClick={() => ''}>
            {state.category}
          </Link>
          <Typography color="textPrimary" style={{fontSize: 14}}>
            {state.productDetail.title}
          </Typography>


          {
            /*
            <Link color="inherit" href="/getting-started/installation/" onClick={() => ''}>
            Core
          </Link>
            <Typography color="textPrimary">
            {state.category.length === 0 ?
              (
                'no category'

              ) :
              (
                state.category
              )}
          </Typography>
            */
          }

        </BreadcrumbsBar>
      </Box>
    </>
  )
}

