import React, { Component } from 'react';
import axios from 'axios';
import { Input, Form, FormGroup, Label, Button, FormText, CustomInput } from 'reactstrap';

class Partnerlogin extends Component {

  state = {
    email: '',
    pwd: '',
    loginType: ''
  }

  partnerlogin = () => {
    const { email, pwd, loginType } = this.state;
    const body = { email, pwd, loginType }
    axios.post('https://api-dev.emjoy.co/api/partner', {
      headers: {
        "email": "coolban@gmail.com",
        "pwd": 123456,
        "loginType": "email"
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
    const { email, pwd, loginType } = this.state;
    return (
      <div className="container">
        <h1>Partner Login</h1>
        <FormGroup >
          <Label for="email">Email</Label>
          <Input type="text" id="email" placeholder="Enter Email" onChange={this.onChangeHandler} value={email} />
        </FormGroup>
        <FormGroup >
          <Label for="pwd" >Password</Label>
          <Input type="password" id="pwd" placeholder="Enter Password" onChange={this.onChangeHandler} value={pwd} />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0" >
          <Label for="loginType" className="mr-sm-2" >LoginType</Label>
          <Input type="loginType" id="loginType" placeholder="Enter LoginType" onChange={this.onChangeHandler} value={loginType} />
        </FormGroup>
        <Button onClick={this.partnerlogin}>Submit</Button>
      </div>

    )
  }
}

export default Partnerlogin;
