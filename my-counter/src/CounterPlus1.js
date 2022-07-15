import React, { Component } from 'react';

class CounterPlus1 extends Component {
  state = {
    count: 0,
  }
  addCount = () => {
    this.setState({
      count: this.state.count +1,
    });
  }
  render(){
    return(
      <div>
        <p>{'從0開始,加1'}</p>
        <h1>{this.state.count}</h1>
        <button onClick={this.addCount}>+1</button>
        <hr/>
      </div>
    )
  }
}

export default CounterPlus1;
