import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState((prevState)=>({
            count: prevState.count + 1
        }))
    }
  render() {
    const {render } = this.props
    const {count} = this.state
    return (
      <div>
        {render(count, this.handleClick)}
      </div>
    )
  }
}
