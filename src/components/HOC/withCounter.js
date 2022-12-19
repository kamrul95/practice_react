import React from 'react';

const withCounter = (OriginalCounter) => {

    return class extends React.Component {
        state = {
            count : 0
        }
    
        handleClickCounter = () => {
            this.setState((previousSate)=>({
                count: previousSate.count + 1
            }))
        }

        render() {
            return (
                <OriginalCounter count={this.state.count} handleClickCounter={this.handleClickCounter} />
            )
        }
    } 
}

export default withCounter;