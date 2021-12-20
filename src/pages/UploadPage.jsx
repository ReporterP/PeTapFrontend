import React , {useState} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import UploadInput from "../components/uploadInput";
import preimg from "../img/uploadpage/upload ikon.svg"
import GreenBtn from "../components/UI/GreenBtn"



const Upload = () => {
    const [image, setimage] = useState(preimg)

    const updateData = (value)=>{setimage(value)}

    return (
        <div className="page">
            <div className="upload d-flex justify-content-center align-items-center"><UploadInput updateData={updateData}/></div>
            <div className="answer">
                <Container>
                    <Row>
                        <Col md={4}><div className="preimgshow"><img src={image} alt="img" /></div></Col>
                        <Col md={4}>
                            <div className="play">
                                <h2>suppose the variant</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmoda.</p>
                                <div>
                                    <GreenBtn link="/" namebtn="confirm"/>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}><div className="preimgshow res"><img src={image} alt="img" /></div></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Upload;