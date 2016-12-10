import React, {Component} from 'react';
import logo from '../logo.svg';
import {AppWrapper, Logo, Header, Intro} from '../styles/App'
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header>
          <Logo src={logo} alt="logo"/>
          <h2>Welcome to React</h2>
        </Header>
        <Counter/>
      </AppWrapper>
    );
  }
}

export default App;
