import React, { Component } from 'react';
import axios from 'axios';

import './Contact.css';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    };
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    const res = await axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
    console.log(res);
    console.log(res.data);
    this.setState({data:res.data});
  }
  showMessage = ()=> this.state.data?<h3>Gracias {this.state.data.user.name} Su ID de envío es: {this.state.data.id}</h3>:""

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
        <p>Ha introducido:{this.state.name}</p>
        {this.showMessage()}
        
      </div>
    )
  }

}

export default Contact;