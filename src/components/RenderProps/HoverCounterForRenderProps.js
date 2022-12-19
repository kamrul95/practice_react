import React, { Component } from 'react';

export default class HoverCounterForRenderProps extends Component {
    
  render() {
    const {count, handleClick, theme, changeTheme} = this.props
    const styles = theme === 'dark' ? {backgroundColor: '#333', color: '#fff', padding: '20px'} : { padding : '20px'}
    return (
        <div>
          <h1 style={styles} onMouseOver={handleClick}>Mouse hovered {count} times </h1>
          <button onClick={changeTheme}>Change Theme</button>
        </div>
    )
  }
}
