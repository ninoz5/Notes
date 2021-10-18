import React, { Component } from 'react';

class Post extends Component {
	constructor(props){
		super(props)
		this.state= {
			
		}
	}
	render() {
		return (
			<div>
			<h2>Post {this.props.number}</h2>
			<h3> {this.props.category} -
			<label> {this.props.date} </label></h3>
			<p> {this.props.text} </p>
			<label>Link:</label><a href = {this.props.link} >{this.props.link}</a>
			</div>
		);
	}
}
export default Post;