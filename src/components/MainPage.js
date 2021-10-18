import React, { Component } from 'react';
import Post from './Post'
import Add from './Add'
import './MainPage.css'
 class MainPage extends Component {
 	constructor(props){
 	super(props)
	this.state= {
			add: false, posts:[]
	
	}
	this.delete = this.delete.bind(this)
	}
	add(){
		this.setState({add:true, posts:[]})
	}
	back(){
		this.setState({add:false,posts:[]})
	}
	delete(e){

		this.state.posts.pop(e.target.id)
		const posts = this.state.posts
		localStorage.removeItem(e.target.name)	
		this.setState({posts:[]}, this.setState({posts:posts}))
	}
	submit= (val) =>{
		this.setState({
			add:val
		})
	}
	render() {
		let count = 1	
		let postNo = 1
		if(this.state.add == false){
			
			const  max = localStorage.getItem('max')
			for(var i = 0; i <= max; i++){
				if(localStorage.getItem(i + '')){
				var info = JSON.parse(localStorage.getItem(i + ''))
				var post = <Post number = {postNo} date = {info[1]} category = {info [2]} text= {info[3]} link = {info[4]}/>
				 this.state.posts.push([post,i])
				postNo++

				}
			}
		}
		return (

			!this.state.add ? (
			<div className= 'paper content pattern'>

				 <button className = 'new' onClick= {() => this.add()}> New Entry </button>  <h1>Nino </h1>
				 <ul >
					  {this.state.posts.map(item =>
					  
					  <li key={count++} ><button  id = {count} name = {item[1]} className = 'X' onClick={this.delete}>X</button>{item[0]} </li>
					  
					  )}
				</ul>
				
			</div> ) :
			<div className= 'paper content pattern'> 
			 <Add submit = {this.submit}/>
			 <button className = 'back' onClick= {() => this.back()}> Back </button>
			 </div>
		);
	}
}
export default MainPage;