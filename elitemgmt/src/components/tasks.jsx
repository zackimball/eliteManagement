import React, { Component } from 'react'

class ToDoWidget extends Component{
    constructor(props){
        super(props);
        this.state = { items: [] , text:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.text.length === 0){
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now,
    }

    this.setState(state => ({
      items: this.state.items.concat(newItem),
      text: '',
    }));
  }
}