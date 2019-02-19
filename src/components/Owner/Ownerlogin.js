import React, { Component } from 'react';
import axios from 'axios';
import { Input, Form, FormGroup, Label, Button, FormText, CustomInput } from 'reactstrap';

class OwnerLogin extends Component {
  state = {
    mobile: '',
    name: ''
  }
  ownerlogin = () => {
    const { mobile, name } = this.state;
    const body = { mobile, name }
    axios.post('https://api-dev.emjoy.co/api/owner', {
      headers: {
        "mobile": 9711005448,
        "name": "Nikhil Rathore"
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
    const { mobile, name } = this.state;
    return (
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Owner-Login/Registers</h1>
        <FormGroup >
          <Label for="mobile" >Mobile</Label>
          <Input type="text" id="mobile" placeholder="Enter Mobile" onChange={this.onChangeHandler} value={mobile} />
        </FormGroup>
        <FormGroup Col md={6}>
          <Label for="name" >Name</Label>
          <Input type="text" id="name" placeholder="Enter Name" onChange={this.onChangeHandler} value={name} />
        </FormGroup>
        <Button onClick={this.ownerlogin}>Submit</Button>
      </div>
    )
  }

}

export default OwnerLogin;