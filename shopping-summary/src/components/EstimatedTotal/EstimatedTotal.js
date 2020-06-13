import React from 'react';
import { Row, Col } from 'react-bootstrap'



const EstimatedTotal = (props) => {




    return (

        <Row className="show-grid">
            <Col md={6}>
                <h3>Estimated Total</h3>
            </Col>

            <Col md={6} className="text-right"> <h3>{`$${props.price}`}</h3> </Col>

        </Row>


    )


}

export default EstimatedTotal;
