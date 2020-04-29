import React from 'react'

export default function DetailImg({ src, alt }) {
  return (
    <div style={{ overflow: 'hidden', background: '#f6f6f6', paddingBottom: '75%', position: 'relative' }}>
      <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={src} alt={alt} style={{ mixBlendMode: 'multiply' }} /> 
      </div>
    </div>
  )
}