import React from 'react'

export default function user({name}) {
  return (
    <div>{name(false)}</div>
  )
}
