
import React from 'react';
import CounterContext from './components/ContextApi/CounterContext';
import Section from './components/ContextApi/Section';

class  App extends React.Component {
  state = {
    theme: 'dark'
  };

  changeTheme = () => {
    this.setState((prevState)=> ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark'
    }))
  }
  render() {
    const {theme} = this.state
    return (
      <div>
        <div>
        {/* <ClockList quantities={quantities}/> */}
        {/* <Form /> */}
        {/* <Calculator /> */}
        {/* <ClickCounter />
        <HoverCounter /> */}
        
        {/* <ClickCounterForRenderProps /> */}
        {/* <User name={(isLoggedIn)=> isLoggedIn ? "sumit" : "guest"}/> */}
        {/* <Counter render={(count, handleClick)=> <ClickCounterForRenderProps count={count} handleClick={handleClick}/>}  />
        <Counter render={(count, handleClick)=> <HoverCounterForRenderProps count={count} handleClick={handleClick}/>}  /> */}
        </div>
        <CounterContext.Provider value={{theme: theme, changeTheme: this.changeTheme}}>
          <Section />
        </CounterContext.Provider>
      </div>
    );
  }
}

export default App;
