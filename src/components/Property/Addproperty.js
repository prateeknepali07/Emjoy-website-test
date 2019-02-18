import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Form, FormGroup, Label, Button, FormText, CustomInput } from 'reactstrap';
import axios from 'axios';

class Addproperty extends Component {

  state = { code: '', title: '', address: '', area: '', pincode: '', type: '', visibility: '', builtUpArea: '', nBHK: '', beds: '', room: '', bathroom: '', floor: '', furnish_status: '', age: '', maintenance: '', emjoy_deposit: '', security: '', price: '', rent_status: '', pet_allowed: '', bachelor_friendly: '', smoking: '', otherInfo: '', amenities: '', latitude: '', longitude: '', owner: '', }

  addpropperty = () => {
    const { code, title, address, area, pincode, type, visibility, builtUpArea, nBHK, beds, room, bathroom, floor, furnish_status, age, maintenance, emjoy_deposit, security, price, rent_status, pet_allowed, bachelor_friendly, smoking, otherInfo, amenities, latitude, longitude, owner } = this.state;
    const body = { code, title, address, area, pincode, type, visibility, builtUpArea, nBHK, beds, room, bathroom, floor, furnish_status, age, maintenance, emjoy_deposit, security, price, rent_status, pet_allowed, bachelor_friendly, smoking, otherInfo, amenities, latitude, longitude, owner }
    axios.post('https://api-dev.emjoy.co/api/property', {
      headers: {
        "Api-version": 1,
        "Content-Type": "application/x-www-form-urlencoded",
        "authtoken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiRW1qb3kiLCJkYXRlIjoxNTUwNDc3ODYxODYyfQ.8jBV5355G8q88zhSo3-PG1cv84tVs-jSKU9z4ogh-FE"
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
      [event.target.id]: event.target.value
    })
  }

  render() {
    const { code, title, address, area, pincode, type, visibility, builtUpArea, nBHK, beds, room, bathroom, floor, furnish_status, age, maintenance, emjoy_deposit, security, price, rent_status, pet_allowed, bachelor_friendly, smoking, otherInfo, amenities, latitude, longitude, owner } = this.state;
    return (
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Add property</h1>
        <Form>

          <FormGroup Col md={6}>
            <Label for="code" >Code</Label>
            <Input type="text" id="code" placeholder="Enter Code" onChange={this.onChangeHandler} value={code} />
          </FormGroup>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text" id="title" placeholder="Enter Title" onChange={this.onChangeHandler} value={title} />
          </FormGroup>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input type="text" id="address" placeholder="Enter Address" onChange={this.onChangeHandler} value={address} />
          </FormGroup>
          <FormGroup>
            <Label for="area">Area</Label>
            <Input type="text" id="area" placeholder="Enter Area" onChange={this.onChangeHandler} value={area} />
          </FormGroup>
          <FormGroup>
            <Label for="pincode">Pindode</Label>
            <Input type="text" id="pincode" placeholder="Enter Pincode" onChange={this.onChangeHandler} value={pincode} />
          </FormGroup>
          <FormGroup>
            <Label for="type">Type</Label>
            <Input type="text" id="type" placeholder="Enter Type" onChange={this.onChangeHandler} value={type} />
          </FormGroup>
          <FormGroup>
            <Label for="builtUpArea">BuiltUpArea</Label>
            <Input type="text" id="builtUpArea" placeholder="Enter BuiltUpArea" onChange={this.onChangeHandler} value={builtUpArea} />
          </FormGroup>
          <FormGroup>
            <Label for="nBHK">nBHK</Label>
            <Input type="text" id="nBHK" placeholder="Enter nBHK" onChange={this.onChangeHandler} value={nBHK} />
          </FormGroup>
          <FormGroup>
            <Label for="beds">Beds</Label>
            <Input type="text" id="beds" placeholder="Enter Beds" onChange={this.onChangeHandler} value={beds} />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Rooms</Label>
            <Input type="select" id="room" placeholder="Enter Room" onChange={this.onChangeHandler} value={room} >
              <Label for="exampleSelect">Rooms</Label>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="bathroom">Bathroom</Label>
            <Input type="text" id="bathroom" placeholder="Enter bathroom " onChange={this.onChangeHandler} value={bathroom} />
          </FormGroup>
          <FormGroup>
            <Label for="floor">Floor</Label>
            <Input type="text" id="floor" placeholder="Enter Floor" onChange={this.onChangeHandler} value={floor} />
          </FormGroup>
          <FormGroup>
            <Label for="furnish_status">Furnish-status</Label>
            <Input type="text" id="furnish_status" placeholder="Enter Furnish-Status" onChange={this.onChangeHandler} value={furnish_status} />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input type="text" id="age" placeholder="Enter Age" onChange={this.onChangeHandler} value={age} />
          </FormGroup>
          <FormGroup>
            <Label for="maintenance">Maintenance</Label>
            <Input type="text" id="maintenance" placeholder="Enter Maintenance" onChange={this.onChangeHandler} value={maintenance} />
          </FormGroup>
          <FormGroup>
            <Label for="emjoy_deposite">Emjoy-Deposit</Label>
            <Input type="text" id="emjoy_deposite" placeholder="Enter Emjoy-deposit" onChange={this.onChangeHandler} value={emjoy_deposit} />
          </FormGroup>
          <FormGroup>
            <Label for="security">Security</Label>
            <Input type="text" id="security" placeholder="Enter Security" onChange={this.onChangeHandler} value={security} />
          </FormGroup>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input type="text" id="price" placeholder="Enter Price" onChange={this.onChangeHandler} value={price} />
          </FormGroup>
          <FormGroup>
            <Label for="rent_status">Rent-Status</Label>
            <Input type="text" id="rent_status" placeholder="Enter Rent-Status" onChange={this.onChangeHandler} value={rent_status} />
          </FormGroup>
          <FormGroup>
            <Label for="bachelor_friendly">Bachelor-Friendly</Label>
            <Input type="text" id="bachelor_friendly" placeholder="Enter Bachelor-friendly" onChange={this.onChangeHandler} value={bachelor_friendly} />
          </FormGroup>
          <FormGroup>
            <Label for="otherInfo">OtherInfo</Label>
            <Input type="text" id="otherInfo" placeholder="Enter OtherInfo" onChange={this.onChangeHandler} value={otherInfo} />
          </FormGroup>
          <FormGroup>
            <Label for="amenities">Amenities</Label>
            <Input type="text" id="amenities" placeholder="Enter Amenities" onChange={this.onChangeHandler} value={amenities} />
          </FormGroup>
          <FormGroup>
            <Label for="latitude">Latitude</Label>
            <Input type="text" id="latitude" placeholder="Enter latitude" onChange={this.onChangeHandler} value={latitude} />
          </FormGroup>
          <FormGroup>
            <Label for="longitude">Longitude</Label>
            <Input type="text" id="longitude" placeholder="Enter Longitude" onChange={this.onChangeHandler} value={longitude} />
          </FormGroup>
          <FormGroup>
            <Label for="owner">Owner</Label>
            <Input type="text" id="owner" placeholder="Enter Owner" onChange={this.onChangeHandler} value={owner} />
          </FormGroup>
          <FormGroup>
            <Label for="exampleCheckbox">Checkboxes</Label>
            <div>
              <CustomInput type="checkbox" id="visibility" label="Visibility" />
              <CustomInput type="checkbox" id="pet_allowed" label="Pet-Allowed" />
              <CustomInput type="checkbox" id="smoking" label="Smoking" />
            </div>
          </FormGroup>
          <Button onClick={this.addpropperty}>Submit</Button>
        </Form>
      </div>

    )
  }
}

export default Addproperty;