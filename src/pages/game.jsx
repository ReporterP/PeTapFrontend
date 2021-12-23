import React, {useState} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import BtnGameStart from "../components/UI/btn_start_game"
import preimg from "../img/upload ikon.svg"
import axios from 'axios';
import GreenBtn from "../components/UI/GreenBtn";
import Style from 'style-it';

import * as Scroll from 'react-scroll';
import { Element } from 'react-scroll'


Element = Scroll.Element;




const Game = () => {

    const [image, setimage] = useState({"show": preimg, "back": preimg})

    const [colorText, setcolorText] = useState("?")


    const [info, setinfo] = useState()


    const uploadData = (value, show) => {
        setcolorText("?")
        setimage({"show": show, "back": value})
    }

    const data = new FormData();
    data.append("file", image["back"])

    const api = () => {
        axios.post("http://localhost:3333/upload", data, {
            headers: {
                'Content-Type': "multipart/from-data"
            }
        }).then(res =>  {setinfo(res.data);
            setcolorText(res.data.isDog===1?"DOG":"CAT")
        }).catch(err => console.log(err))
    }

    return (
        <div className="page game">
            <Style>{`.res::after {
                content:"${colorText}";
                ${info!==undefined?"font-size: 150px;":"font-size: 250px;"}}
            `}</Style>
            <Container>
                <h2>Play with neyron</h2>
                <div className="DOG_or_CAT">
                    <Row>
                        <Col md={{span:8, offset:2}}>
                            <BtnGameStart uploadData={uploadData}/>
                        </Col>
                    </Row>
                </div> 
            </Container>
            <Element className="game_answer">
                <Container>
                    <Row>
                        <Col md={{ span: 2, offset:1}}>
                            <div className="centerGameBtn dogBtnGame">
                                <GreenBtn  link="/game" onclick={api} namebtn="DOG"/>
                            </div>
                        </Col>
                        <Col md={{span: 4, offset: 1}}>
                            <div><div className="preimgshow res"><img src={image["show"]} alt="img" /></div></div>
                        </Col>
                        <Col  md={{ span: 2, offset:1}}>
                            <div className="centerGameBtn">
                                <GreenBtn  link="/game" onclick={api} namebtn="CAT"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Element>
        </div>
    )
}


export default Game