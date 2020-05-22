import React from 'react'

export default function useCountRenders() {
  const renders = React.useRef(0);
  console.log('renders: ', renders.current++);
}
