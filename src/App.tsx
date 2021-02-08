import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  public render() {
    return (
      <div>
        <h1>{this.label()}</h1>
        <p>Nice TDD</p>
      </div>
    );
  }

  public label() {
    return 'Hello React';
  }
}

export default App;
