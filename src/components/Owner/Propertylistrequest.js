import React, { Component } from 'react';
import axios from 'axios';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Card, CardHeader, CardFooter, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';




class Propertylistrequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyList: []
    }
  }

  componentDidMount() {
    axios('https://www.getpostman.com/collections/a5eb25af7ea60f53c432/api/user/property/request')
      .then(res => {
        this.setState({
          propertyList: [{
            City: "Ajmer", Tenant: "Robert", BHK: "3", GroupSize: "2", Location: "Sector 82", Furnishing: "2", budget: "24000", ShiftDate: "21/10/2017", Type: "Family",
          },
          { City: "Jaipur", Tenant: "Harshit", BHK: "2", GroupSize: "3", Location: "WTP mall", Furnishing: "full", budget: "124000", ShiftDate: "21/10/2020", Type: "Bachelor" },
          { City: "Alwar", Tenant: "RambirSingh", BHK: "1", GroupSize: "1", Location: "Clocktower", Furnishing: "none", budget: "824000", ShiftDate: "21/10/2019", Type: "Family" }
          ]
        })
      })
  }
  render() {
    return (
      <div>

        <h1>Owner/Propertylistrequest</h1>
        <ContentWrapper>
          <div className="content-heading">
            <div>Tables
                        <small>A showcase of different components inside tables</small>
            </div>
          </div>
          {/* START card */}
          <Card className="card-default">
            <CardHeader>Demo Table #1</CardHeader>
            {/* START table-responsive */}
            <Table bordered hover responsive>
              <thead>
                <tr>
                  <th>City</th>
                  <th>Tenant</th>
                  <th>BHK</th>
                  <th>GroupSize</th>
                  <th>Location</th>
                  <th>Furnishing</th>
                  <th>Family/Bachelor</th>
                  <th>Budget</th>
                  <th>ShiftDate</th>
                  <th data-check-all>
                    <div className="checkbox c-checkbox" data-toggle="tooltip" data-title="Check All">
                      <label>
                        <input type="checkbox" onChange={this.handleCheckListA} />
                        <span className="fa fa-check"></span>
                      </label>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.propertyList.map(property => <tr><td>{property.City}</td><td>{property.Tenant}</td> <td>{property.BHK}</td> <td>{property.GroupSize}</td> <td>{property.Location}</td><td>{property.Furnishing}</td><td>{property.Type}</td><td>{property.budget}</td><td>{property.ShiftDate}</td></tr>)}
              </tbody>
            </Table>
            {/* END table-responsive */}

          </Card>
        </ContentWrapper>

      </div>



    );
  }
}

export default Propertylistrequest;
