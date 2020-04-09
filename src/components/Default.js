import React from 'react'

export default function Default(props) {
  return (
    <div>
      page not found

      <p>{props.location.pathname}</p>
    </div>
  )
}
