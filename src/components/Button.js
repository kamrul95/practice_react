import React, { Component } from 'react';

export default class Button extends Component {
    shouldComponentUpdate = (nextProps) => {
        const {handleClick: currentHandleClick, locale: currentLocale} = this.props;
        const {handleClick: nextHandleClick, locale: nextLocale} = nextProps;
        if(currentHandleClick === nextHandleClick && currentLocale === nextLocale) {
            return false
        } else {
            return true;
        }
    }
  render() {
    console.log("From Button");
    const {handleClick, locale} = this.props
    return (
      <div>
        <button onClick={()=> handleClick(locale)}>{locale === 'bn-BD' ? 'Change clock' : 'ঘড়ি পরিবর্তন করুন'}</button>
      </div>
    )
  }
}
