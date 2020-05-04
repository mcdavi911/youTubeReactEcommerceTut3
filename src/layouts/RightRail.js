import React from 'react'
import Box from '@material-ui/core/Box';

export default function RightRail(props) {
  
  return (
    <Box display="flex">
      <div style={{ flexGrow: 1 }}>
        {props.left}
      </div>

      <div style={{ flex: '0 0 464px' }}>
        {props.right}
      </div >
    </Box>
  )
}
