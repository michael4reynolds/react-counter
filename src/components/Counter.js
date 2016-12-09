import React, {Component} from 'react'

class Counter extends Component {
  state = {
    count: 0
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decreaseCount = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <h1>Superstitious Counter Component</h1>
        <p>Counter: {this.state.count}&nbsp;
          <button type="submit" onClick={this.decreaseCount}>-</button>
          <button type="submit" onClick={this.increaseCount}>+</button>
        </p>
      </div>
    )
  }
}

export default Counter
