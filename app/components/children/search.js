import React from "react"
import { Button, Checkbox, Form } from 'semantic-ui-react'
import api from "../../utils/utils.js"
import ResultsSection from "./results.js"
import {observable, action, computed} from 'mobx'
class SearchSection extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			@observable searchTerm: "",
			@observable endYear: "",
			@observable startYear: "",
			@observable docs: []

		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event){
		const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
		this.setState({
			[name]: value

		})
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this)
		api.runQuery(this.state.searchTerm).then((data) => {
			this.setState({
			docs: data

		});
			
		})
		
		

		
	}
 	render() { return(<div><Form onSubmit={this.handleSubmit}>
    <Form.Field>
      <label>Search Term</label>
      <input name= "searchTerm" type= "text" placeholder='Search term' value={this.state.searchTerm} onChange={this.handleChange}/>
    </Form.Field>
    <Form.Field>
      <label>Start Year</label>
      <input name= "startYear" type= "text" placeholder='2016' value={this.state.startYear} onChange={this.handleChange}/>
    </Form.Field>
    <Form.Field>
      <label>End Year</label>
      <input name= "endYear" type= "text" placeholder='2017' value={this.state.endYear} onChange={this.handleChange}/>
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
  <ResultsSection docs = {this.state.docs}/></div>)
}
}


export default SearchSection