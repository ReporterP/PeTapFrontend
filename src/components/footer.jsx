import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import FooterLogo from "../img/footer_logo.png"

import twitter from "../img/twitter.png"
import facebook from "../img/facebook.png"
import discord from "../img/discord.png"
import instagram from "../img/instagram.png"
import github from "../img/git.png"


function Footer () {
    return (
        <footer>
            <Container>
                <Row>
                    <Col md={1}>
                        <img src={FooterLogo} alt="logo"/>
                    </Col>
                    <Col md={{span: 4, offset:1}}>
                        <div className="CenterFooter">
                            <Row>
                                <Col md={6}>
                                    <div className="footerInfo">
                                        <h6>Phone number</h6>
                                        <a href="tel:+7 977 965 74 12">+7 977 965 74 12</a> 
                                    </div> 
                                </Col>
                                <Col md={6}>
                                    <div className="footerInfo">
                                        <h6>Email</h6>
                                        <a href="mailto:petap@gmail.com">petap@gmail.com</a> 
                                    </div> 
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={{span: 4, offset: 2}}>
                        <div className="CenterFooter">
                            <Row>
                                <Col md={2}><a href="https://twitter.com/" target="_blank" rel="noreferrer"><img src={twitter} alt="footerIkons" /></a></Col>
                                <Col md={2}><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src={facebook} alt="footerIkons" /></a></Col>
                                <Col md={2}><a href="https://discord.com/" target="_blank" rel="noreferrer"><img src={discord} alt="footerIkons" /></a></Col>
                                <Col md={2}><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={instagram} alt="footerIkons" /></a></Col>
                                <Col md={2}><a href="https://github.com/" target="_blank" rel="noreferrer"><img src={github} alt="footerIkons" /></a></Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;

