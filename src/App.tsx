import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  public render() {
    return (
      <div>
        <h1>{this.label('React')}</h1>
        <p>Nice TDD</p>
      </div>
    );
  }

  public label(name: string) {
    return `Hello ${name.toUpperCase()}`;
  }
}

export default App;
