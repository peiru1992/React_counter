import React, { Component } from 'react';

class CounterMulti2 extends Component {
  state = {
    count: 1,
  }
  addCount = () => {
    this.setState({
      count: this.state.count *2,
    });
  }
  render(){
    return(
      <div>
        <p>{'從1開始,乘以2'}</p>
        <h1>{this.state.count}</h1>
        <button onClick={this.addCount}>*2</button>
        <hr/>
      </div>
    )
  }
}

export default CounterMulti2;
