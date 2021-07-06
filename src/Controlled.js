import React from 'react'

class Controlled extends React.Component {
    state = {name: ""}

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                />
            </div>
        )
    }
}

export default Controlled