import React from "react"
import { connect } from "react-redux"

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    increment() {
        this.props.dispatch({ type : "increment" }) // create an action
    }

    decrement() {
        this.props.dispatch({ type: "decrement" })
    }

    render() {
        return (
            <div>
                <h1>hello world , my age is {this.props.count}</h1>
                <button className="ui button" onClick={this.increment}>+</button>
                <button className="ui button" onClick={this.decrement}>-</button>
            </div>
        )
    }
}

// here you have your existing states
const mapStateToProp = (state) => ({
    count: state.count
})
export default connect(mapStateToProp)(Counter)