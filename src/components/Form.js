import React, { Component } from 'react'

export default class form extends Component {
    state = {
        title: 'JS',
        text: 'Js is awesome',
        language: '',
        isAwsome: false
    }
  render() {
    const {title, text, language, isAwsome} = this.state
    return (
      <div>
        <form>
            <input type="text" value={title} onChange={(e)=> this.setState({title: e.target.value})}/>
            <br /><br />
            <textarea value={text} onChange={(e)=> this.setState({text: e.target.value})}/>
            <br />
            <select value={language} onChange={(e) => this.setState({language: e.target.value})}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
            <br />
            <input type="checkbox" checked={isAwsome} onChange={ (e) => this.setState({isAwsome: e.target.checked}) }/>

        </form>
      </div>
    )
  }
}
