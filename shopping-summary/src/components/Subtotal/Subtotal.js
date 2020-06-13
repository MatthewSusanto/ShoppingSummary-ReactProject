import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';



class SubTotal extends Component {

    render() {

        return (

            <Row className="show-grid">
                <Col md={6}>Subtotal </Col>
                <Col md={6} className="text-right">{`$${this.props.price}`} </Col>
            </Row>
        );

    }
}

export default SubTotal;
