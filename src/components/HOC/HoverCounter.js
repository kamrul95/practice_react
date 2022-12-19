import React from 'react'
import withCounter from './withCounter'

const HoverCounter = (props) =>{
    return (
      <div>
        <span onMouseOver={props.handleClickCounter} >You clicked {props.count} times</span>
      </div>
    )
}

export default withCounter(HoverCounter)