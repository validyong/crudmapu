import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Counter from './Counter';

interface ICounterState {
  count: number
}
class App extends React.Component<object, ICounterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    };
  }

  public increment = (isShift: boolean) => {
    const inc: number = isShift ? 10 : 1;
    this.setState({ count: this.state.count + inc });
  }

  public render() {
    return (
      <div>
        <Heading />
        <Counter
          label={'Current'}
          count={this.state.count}
          onCounterIncrease={this.increment}
        />
      </div>
    )
  }
}

export default App;
