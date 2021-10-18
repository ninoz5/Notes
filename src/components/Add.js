import React, { Component } from 'react';
import Post from './Post'
import DatePicker from "react-datepicker";
import Moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";

 class Add extends Component {
 	constructor(props){
		super(props)
		this.state= {
			category:'', content:'' , date: '', selected:'', link:'', update:false
		}
	this.handleCategory= this.handleCategory.bind(this)
	this.handleContent= this.handleContent.bind(this)
	this.handleLink= this.handleLink.bind(this)
	this.setDate= this.setDate.bind(this)
	}

	handleCategory(e){
		this.setState({category:e.target.value})
	}
	handleLink(e){
		this.setState({link:e.target.value})
		
	}
	handleContent(e){
		this.setState({content:e.target.value})

	}
	correct(){
		if(this.state.category === '') {
			this.setState(
			{category:'None'},
			() => {
			if(this.state.date === '') this.setState({date:Moment().format('MMMM Do YYYY')},
			()=>{
				this.add()
			}
			)})
		}else if(this.state.date === '') {
			this.setState({date:Moment().format('MMMM Do YYYY')},
			()=>{
				this.add()
			}
			)
		}else{
			this.add()
		}	
	}
	add(){
		const max = Number(localStorage.getItem('max')) +1
		let post = [max,this.state.date,this.state.category,this.state.content, this.state.link]
		localStorage.setItem(max, JSON.stringify(post))
		localStorage.setItem('max', max)
		this.props.submit(false)

	}
	update(){
		
	}
	setDate(date){
		this.setState({selected:date})
		date = Moment(date).format('MMMM Do YYYY')
		this.setState({date:date})
	}

	render() {
		
		return (
			<div>
			
			<h2> Category of the post</h2> 
			<input value = {this.state.category} onChange = {this.handleCategory}/>
			<h2>Type in the content </h2>
			<textarea   rows={12} value = {this.state.content} onChange = {this.handleContent}/> <br/>
			<h2>Link to project</h2>
			<input value = {this.state.link} onChange = {this.handleLink}/>
			<h2>Enter the date </h2>
			<DatePicker selected={this.state.selected} onChange={this.setDate}  />

			{!this.state.update ? 
			<button  onClick = {() => this.correct()}> Submit </button> :
			<button onClick = {() => console.log('update')}>Update </button>}
				
			
			</div>
		);
	}
}
export default Add;