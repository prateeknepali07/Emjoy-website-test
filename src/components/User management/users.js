import React, { Component } from 'react';
import axios from 'axios';
import { Input, Form, FormGroup, Label, Button, FormText, CustomInput } from 'reactstrap';

class EditUsers extends Component {
  state = {
    email: ''
  }

  edituserdetail = () => {
    const { email } = this.state;
    const body = { email }
    axios.post('https://api-dev.emjoy.co/api/user/5c5f0b3f8f9432690d04c405', {
      headers: {
        "email": "coolban@gmail.com"
      }
    }, body).then(res => {
      console.log(res)
    })
      .catch(error => {
        console.log(error)
      })
  }

  onChangeHandler = event => {
    this.setState({
      [event.target.id]: event.target
    })
  }
  render() {
    const { email } = this.state;
    return (
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Edit User Details</h1>
        <FormGroup Col md={6}>
          <Label for="email" >Email</Label>
          <Input type="text" id="email" placeholder="Enter Email" onChange={this.onChangeHandler} value={email} />
        </FormGroup>
      </div >


    );
  }
}

export default EditUsers;
