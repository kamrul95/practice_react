import React from 'react'
import Clock from './Clock'

export default function ClockList(props) {
  return (
    <div>
        {
            props.quantities.map(key=> (
                <Clock key={key}/>
            ))
        }
    </div>
  )
}
