import React from 'react';
import Button from './Button';

class Clock extends React.Component {
  state = { date: new Date(), locale: "en-US" };
  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  handleClick = () => {
    this.setState((prevState) => ({
      locale: prevState.locale === "bn-BD" ? "en-US" : "bn-BD",
    }));
  };

  render() {
    console.log("From Clock");
    const {locale} = this.state
    return (
      <div>
        <p>Time is {this.state.date.toLocaleTimeString(locale)}</p>
        <Button handleClick={this.handleClick} locale={locale === 'bn-BD'? 'en-US' : 'bn-BD'}/>
      </div>
    );
  }
}
export default Clock;