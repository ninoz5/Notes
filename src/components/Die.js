import React, { Component } from 'react';

 class Die extends Component {
	constructor(props){
		super(props)
		this.state= {
			inputValue: '',number: '', total: 0, rolltext: 'Roll the die!', game: ''

		}
		this.handlechange = this.handlechange.bind(this);
		this.gamestart = this.gamestart.bind(this)
	}
	roll(){
		const min = 1;
		const max = 6;
		const rand = Math.ceil(min + Math.random() * (max-min));
		this.setState({rolltext: 'You rolled ' ,number: rand, total: this.state.total + rand} )
		
	}
	
	
		
		
	
	handlechange(e) {

    this.setState({inputValue: e.target.value });
	}
	gamestart(e){
		this.setState({game:'start'});
	}
	render() {

		if (this.state.inputValue !== '' && this.state.game === 'start'){
			return(
			<div>
			<h1> Player: {this.state.inputValue} </h1>
			<h2> Roll the die </h2> 
			<button onClick = {() => this.roll()}>Roll</button><br/> 
			<label> {this.state.rolltext} </label>  {this.state.number} <br/> 
			<label> Score < /label> {this.state.total}
			</div>
			)
		}else{
			return(
			<div>

				 <label>Enter your player name!</label>
				 <br/> 
				 <input value = {this.state.inputValue} onChange={this.handlechange}/> 
				 <button onClick = {this.gamestart} >Submit</button> 
				 
			</div>
			)
		}
		
	}
}
export default Die;