import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Grafic from "../img/Group 2.png"


const Statistic = () => {
    return (
        <div className="page statistic d-flex align-items-center">
            <Container>
                <h2>Statistic</h2>
                    <Row>
                        <Col md={{span: 4, offset: 1}}>
                            <Row>
                                <Col md={12}>
                                    <div className="tableS">
                                        <p className="numberS">300+</p>
                                        <p className="fact">upload img</p>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="tableS">
                                        <p className="numberS">66%</p>
                                        <p className="fact">guessed img</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={{span: 6, offset: 1}}>
                            <img className="grafic" src={Grafic} alt="statistic" />
                        </Col>
                    </Row>
            </Container>
        </div>
    )
}

export default Statistic;