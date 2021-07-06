import React from 'react'

class Counter extends React.Component {
    state = {counter: this.props.startingNumber, stateValue2: 0}

    updateCounter() {
        this.setState({counter: this.state.counter + 1})
    }

    render() {
        return (
            <div>
                <h2>I'm a counter</h2>
                <h1>{this.state.counter}</h1>
                <button onClick={() => this.updateCounter()}>Click me to increase the counter!</button>
            </div>
        )
    }
}

export default Counter