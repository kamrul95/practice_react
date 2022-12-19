import React from 'react'
import withCounter from './withCounter'

const ClickCounter = (props) =>{
    return (
      <div>
        <button onClick={props.handleClickCounter} >You clicked {props.count} times</button>
      </div>
    )
}

export default withCounter(ClickCounter)