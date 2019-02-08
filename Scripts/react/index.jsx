import React from "react"
import ReactDOM from "react-dom"
import Counter from "./Counter.jsx"
import { createStore } from "redux"
import { Provider } from "react-redux"

/*
 * boilerplate made by Mike Mao Che
 * How to understand 
 */
// initialize a default value for the state
const initialState = {
    count: 0
}


function reducer(state = initialState, action) {
    switch (action.type) {
        case "increment":
            return {
                count : state.count + 1 
            }
        case "decrement":
            return {
                count: state.count - 1
            }
        default:
            return state
    }
    return state
}

const store = createStore(reducer)

const App = () => (
    <Provider store={store}>
        <Counter />
    </Provider>
)

const root = document.getElementById("app")
ReactDOM.render(<App />, root)