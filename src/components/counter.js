import React, { Component } from 'react'

export default class counter extends Component {
    constructor(){
        super();
        this.state={
            count:0,
        }
    }

    increase(){
        this.setState({
            count:
            this.state.count+1,
        })
    }

    decrease(){
        this.setState({
            count:
            this.state.count-1,
        })
    }

    reset(){
        this.setState({
            count:0,
        })
    }


  render() {
    return (
      <div>
        <h1>Counter App</h1>

        <div>{this.state.count}</div>
        <button onClick={()=>{this.increase()}}>+</button>
        <button onClick={()=>{this.decrease()}}>-</button>
        <button onClick={()=>{this.reset()}}>Reset</button>
        </div>

    )
  }
}

