import React, { Component } from 'react';
import axios from 'axios';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Card, CardHeader, CardBody, Table } from 'reactstrap';




class Ownerlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerList: []
    }
  }

  componentDidMount() {
    axios('https://www.getpostman.com/collections/a5eb25af7ea60f53c432/api/owners')
      .then(res => {
        this.setState({
          ownerList: [{ name: "Rohan", mobile: "7007123456", gender: "Male", },
          { name: "Prateek", mobile: "9001006261", gender: "Male", },
          { name: "Priya", mobile: "8007454456", gender: "Female", }
          ]


        })
      })
  }
  render() {
    return (
      <div>

        <h1>OWNERLIST</h1>

        <ContentWrapper>
          <div className="content-heading">

          </div>
          {/* START row */}
          <Row>
            <Col xl="6">
              {/* START card */}
              <Card className="card-default">
                <CardHeader>Owner List</CardHeader>
                <CardBody>
                  {/* START table-responsive */}
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>User Name</th>
                        <th>Mobile No</th>
                        <th>Gender</th>

                      </tr>
                    </thead>
                    <tbody>
                      {this.state.ownerList.map(owner => <tr><td>{owner.name}</td><td>{owner.mobile}</td><td>{owner.gender}</td></tr>)}


                    </tbody>
                  </Table>
                  {/* END table-responsive */}
                </CardBody>
              </Card>
              {/* END card */}
            </Col>


          </Row>
          {/* END row */}
        </ContentWrapper>


      </div>



    );
  }
}

export default Ownerlist;
