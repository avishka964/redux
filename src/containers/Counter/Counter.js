import React, { Component } from "react"
import { connect } from "react-redux"
import CounterControl from "../../components/CounterControl/CounterControl"
import CounterOutput from "../../components/CounterOutput/CounterOutput"

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={this.props.onStoreResult}>Store Results</button>
        <ul>
          {this.props.storeResults.map((strResult) => (
            <li key={strResult.id} onClick={this.props.onDeleteResult}>
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateProps = (state) => {
  return {
    ctr: state.counter,
    storeResults: state.results,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddCounter: () => dispatch({ type: "ADD", val: 10 }),
    onSubtractCounter: () => dispatch({ type: "SUBTRACT", val: 15 }),
    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
    onDeleteResult: () => dispatch({ type: "DELETE_RESULT" }),
  }
}
export default connect(mapStateProps, mapDispatchToProps)(Counter)
