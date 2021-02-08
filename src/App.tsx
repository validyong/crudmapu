import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Counter from './Counter';
class App extends React.Component {

  public render() {

    return (
      <div>
        <Heading/>
        <Counter label={'Current'}/>
      </div>
    );
  }

}

export default App;
