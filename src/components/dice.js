import React, { Component } from 'react';
import Die from './Die'

class dice extends Component {
	constructor(props){
		super(props)
		this.state= {
			p1: <Die/>,p2:''
		}
		this.clear = this.clear.bind(this)
		this.baseState= this.state
	}

	clear(){
		this.setState({p1:<Die id = '1'/>})
		

	}
  
  render() {
  return (

    <div>
      <div className="Player1">
       {this.state.p1}
      </div>
        <div className = 'Player2'>
       {this.state.p1}
      </div>
    <button onClick = {() => this.clear()}> Clear </button> 
    </div>
  );
	}
}
export default dice