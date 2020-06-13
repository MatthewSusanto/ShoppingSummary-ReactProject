import React, { Component } from 'react';
import { Button, Collapse, Card, Row, Col, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux';
import { handleChange } from '../../actions/promoCodeActions';


class PromoCode extends Component {

    state = {
        open: false
    };

    handleChange = e => {
        this.props.handleChange(e);
    }

    render() {
        return (
            <div >
                <div className="toggle-button">
                    <a
                        onClick={() => this.setState({ open: !this.state.open })}
                    >

                        {this.state.open === false ? `Apply ` : `Hide `} promo code
                    {this.state.open === false ? ` +` : ` -`}

                    </a>
                </div>

                <Collapse in={this.state.open}>
                    <div>

                        <Card>
                            <Row className="show-grid">
                                <Col md={12}>
                                    <Form>
                                        <FormGroup controlId="formInlineName">
                                            {/* <ControlLabel> Promo Code </ControlLabel> */}
                                            <FormControl type="text" placeholder="Enter promo code" value={this.props.PromoCode} onChange={this.handleChange} />
                                            <Button variant="success" block className="btn-round" disabled={this.props.isDisabled} onClick={this.props.giveDiscount} > Apply </Button>
                                        </FormGroup>
                                    </Form>
                                </Col>
                            </Row>

                        </Card>

                    </div>
                </Collapse>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
});

export default connect(mapStateToProps, { handleChange })(PromoCode);
