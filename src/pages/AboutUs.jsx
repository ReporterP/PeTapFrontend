import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Teamimg from "../img/team img.png"

const AboutUs = () => {
    return (
        <div className="page Team d-flex align-items-center">
            <Container>
                    <Row>
                        <Col md={6}>
                            <div className="teamText d-flex justify-content-center">
                                <h2>About us</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </Col>
                        <Col md={{span: 4, offset:1}}><img src={Teamimg} alt="team"></img></Col>
                    </Row>
            </Container>
        </div>
    )
}

export default AboutUs;