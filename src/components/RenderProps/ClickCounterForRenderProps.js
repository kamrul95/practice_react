import React, { Component } from 'react'

export default class ClickCounterForRenderProps extends Component {
    
  render() {
    const {count, handleClick} = this.props
    return (
      <div>
        <button onClick={handleClick}>Button clicked {count} </button>
      </div>
    )
  }
}
