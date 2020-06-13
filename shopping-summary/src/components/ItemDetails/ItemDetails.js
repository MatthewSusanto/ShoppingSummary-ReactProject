import React, { Component } from 'react';
import { Collapse, Media, Card, Row, Col } from 'react-bootstrap'



class ItemDetails extends Component {

    state = {
        open: false
    }

    a = parseFloat(this.props.price);
    b = parseFloat(this.props.pickupSavings)
    c = this.a + this.b

    render() {
        return (
            <div >
                <div className="toggle-button">
                    <a


                        onClick={() => this.setState({ open: !this.state.open })}
                    >

                        {this.state.open === false ? `See` : `Hide`} item details
                    {this.state.open === false ? ` +` : ` -`}

                    </a>
                </div>


                <Collapse in={this.state.open}>
                    <div>
                        <Card>
                            <Media>
                                <img width={100} height={100} className="align-self-center mr-3" alt="thumbnail" src="https://i5.walmartimages.ca/images/Large/628/529/6000199628529.jpg" />

                                <Media.Body>
                                    <p>
                                        Hyper Carbon X Sinister 27.5” Men's Carbon Fiber Mountain Bike
                                    </p>

                                    <Row className="show-grid">

                                        <Col md={6}>
                                            <strong> {`$${this.c}`}</strong>
                                            <br />
                                            <strong className="price-strike"> {`$${this.props.price}`} </strong>
                                        </Col>

                                        <Col md={6} className="text-right" >
                                            Qty: 1
                                            <br />
                                        </Col>



                                    </Row>

                                </Media.Body>
                            </Media>
                        </Card>

                    </div>
                </Collapse>

            </div>
        );
    }
}

export default ItemDetails;
