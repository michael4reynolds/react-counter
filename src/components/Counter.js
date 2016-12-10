import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

const Counter = (props) => {
  return (
    <div>
      <h1>Superstitious Counter Component</h1>
      <p>Counter: {props.counter}&nbsp;
        <button type="submit" onClick={props.decreaseCount}>-</button>
        <button type="submit" onClick={props.increaseCount}>+</button>
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
