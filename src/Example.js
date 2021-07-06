import React from 'react'

class ClassComponent extends React.Component {
    state = {"myState1": 0}

    render() {
        return (
            <div>
                <h2>hello from Example component!</h2>
                <h4>enter your data here {this.props.name}</h4>
                <button>click me to submit!</button>
            </div>
        )
    }
}

export default ClassComponent