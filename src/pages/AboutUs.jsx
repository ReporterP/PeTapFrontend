import React, {useState, useEffect} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Igor from "../img/Ellipse 3.png"
import Sasha from "../img/Ellipse 6.png"
import Alexandra from "../img/Ellipse 5.png"
import Sofia from "../img/Ellipse 4.png"
import Style from 'style-it';



const AboutUs = () => {

    const [team, setteam] = useState("")

    useEffect(() => {
        setTimeout(()=>{setteam(  ".Sofia {animation: orbita 7s linear infinite; opacity: 1;}")}, 0)
        setTimeout(()=>{setteam( t => t + ".Igor {animation: orbita 7s linear infinite; opacity: 1;} ")}, 2000)
        setTimeout(()=>{setteam( t => t + ".Sasha {animation: orbita 7s linear infinite; opacity: 1;} ")}, 4000)
        setTimeout(()=>{setteam( t => t + ".Alexandra {animation: orbita 7s linear infinite; opacity: 1;} ")}, 5500)
    }, [])

    console.log(team)

    return (
        <div className="page Team d-flex align-items-center">
            <Style>{`
                ${team}
            `}</Style>

            <Container>
                    <Row>
                        <Col md={6}>
                            <div className="teamText d-flex justify-content-center">
                                <h2>About us</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </Col>
                        <Col md={{span: 4, offset:2}}>
                            <div className="teams">
                                <div className="Igor team"><img src={Igor} alt="team"></img></div>
                                <div className="Sasha team"><img src={Sasha} alt="team"></img></div>
                                <div className="Alexandra team"><img src={Alexandra} alt="team"></img></div>
                                <div className="Sofia team"><img src={Sofia} alt="team"></img></div>
                            </div>
                        </Col>
                    </Row>
            </Container>
        </div>
    )
}

export default AboutUs;