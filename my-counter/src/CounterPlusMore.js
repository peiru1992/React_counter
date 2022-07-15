import React, { Component } from 'react';

class CounterMulti2 extends Component {
  state = {
    count: 0,
    step: 1,
  }
  addCount = () => {
    this.setState({
      count: this.state.count + this.state.step,
      step: this.state.step +1,
    });
  }
  render(){
    return(
      <div>
        <p>{'從1開始,越加越多'}</p>
        <h1>{this.state.count}</h1>
        <button onClick={this.addCount}>+{this.state.step}</button>
        <hr/>
      </div>
    )
  }
}

export default CounterMulti2;
