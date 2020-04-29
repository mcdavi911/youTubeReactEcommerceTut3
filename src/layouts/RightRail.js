import React from 'react'
import Box from '@material-ui/core/Box';

export default function RightRail(props) {
  
  return (
    <Box display="flex">
      <div style={{ flexGrow: 1 }}>
        {props.left}
      </div>

      <div style={{ width: 464 }}>
        {props.right}
      </div >
    </Box>

  )
}
