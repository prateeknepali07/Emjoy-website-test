import React, { Component } from 'react';
import axios from 'axios';



class Tenantlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenantList: []
    }
  }
  componentDidMount() {
    axios('https://www.getpostman.com/collections/a5eb25af7ea60f53c432/api/owners')
      .then(res => {
        this.setState({
          tenantList: [{ name: "Prateek", mobile: "8588915160" }]
        })
      })
  }
  render() {
    return (
      <div>
        <h1>TENANTLIST</h1>
        <table>
          <thead><tr><th>Name</th><th>Mobile Number</th></tr></thead>
          <tbody>{this.state.tenantList.map(tenant => <tr><td>{tenant.name}</td><td>{tenant.mobile}</td></tr>)}</tbody>
        </table>
      </div>

    );
  }
}

export default Tenantlist;
