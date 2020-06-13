import React from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap'

var styles = {
  pickupSavings: {
    textDecoration: 'underline'
  },
  totalSavings: {
    color: 'red',
    fontWeight: 800
  }
}

const PickupSavings = (props) => {

  const tooltip = (
    <Tooltip id="tooltip">
      <p>Picking up your order in the store helps cut cost, and we pass the savings on to you.</p>
    </Tooltip>
  );


  return (

    <Row className="show-grid">
      <Col md={6}>
        <OverlayTrigger placement="bottom" overlay={tooltip}>
          <div style={styles.pickupSavings}>Pickup Savings</div>
        </OverlayTrigger>
      </Col>

      <Col style={styles.totalSavings} className="text-right" md={6}> {`$${props.price}`}</Col>

    </Row>


  )


}

export default PickupSavings;
