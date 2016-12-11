import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

const Counter = ({counter, increaseCount, decreaseCount, incrementAsync}) => {
  return (
    <div>
      <h1>Superstitious Counter Component</h1>
      <p>Counter: {counter}&nbsp;
        <button type="submit" onClick={decreaseCount}>-</button>
        <button type="submit" onClick={increaseCount}>+</button>
        <button type="submit" onClick={incrementAsync}>...+</button>
      </p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps, actions)(Counter)
