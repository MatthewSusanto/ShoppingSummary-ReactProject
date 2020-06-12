import React from 'react';
import { Row, Col } from 'react-bootstrap'



const TaxesFees = (props) => {




    return (

        <Row className="show-grid">
            <Col md={6}>
                Estimated taxes and fees
            </Col>

            <Col md={6}> {`$${props.taxes}`}</Col>

        </Row>


    )


}

export default TaxesFees;
