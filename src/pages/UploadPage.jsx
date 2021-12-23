import React , {useState} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import UploadInput from "../components/uploadInput";
import preimg from "../img/upload ikon.svg"
import GreenBtn from "../components/UI/GreenBtn"
import { Progress } from 'react-sweet-progress';
import Style from 'style-it';
import axios from 'axios';
import * as Scroll from 'react-scroll';
import { Element } from 'react-scroll'


Element = Scroll.Element;


const Upload = () => {
    const [image, setimage] = useState({"show": preimg, "back": preimg})

    const [info, setinfo] = useState()

    const [colorText, setcolorText] = useState([ ".GreenBtn {background-color: #6E9C8D ;}" , "confirm", "?"])

    const updateData = (value, show)=>{
        setcolorText([ ".GreenBtn {background-color: #6E9C8D ;}" , "confirm", "?"])
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
                        setcolorText([".GreenBtn {background-color: #DBAD95 ;}", "try again", res.data.isDog===1?"DOG":"CAT"])  
        }).catch(err => console.log(err))
    }

    // console.log(info !== undefined?info.cats_percent.toString().split(".")[1].slice(0,2)*1:0)

    const cat_str = info!==undefined?info.cats_percent.toString():""
    const dog_str = info!==undefined?info.dogs_percent.toString():""

    const cat = cat_str.split(".").length===1?(cat_str+"00")*1:cat_str.split(".")[1].slice(0,2)*1
    const dog = dog_str.split(".").length===1?(dog_str+"00")*1:dog_str.split(".")[1].slice(0,2)*1

    return (
        <div className="page">
            <Style>{`.res::after {
                content:"${colorText[2]}";
                ${info!==undefined?"font-size: 150px;":"font-size: 250px;"}}
                ${colorText[0]}
            `}</Style>

            <div className="upload d-flex justify-content-center align-items-center"><UploadInput updateData={updateData} /> </div>
            <div className="answer">
                <Element name="answer">
                    <Container>
                        <Row>
                            <Col md={4}><div className="preimgshow"><img src={image["show"]} alt="img" /></div></Col>
                            <Col md={4}>
                                <div className="play">
                                    <h2>suppose the variant</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmoda.</p>
                                    <div className="progress_bar">
                                        <Progress percent={cat} 
                                        theme= {{
                                            success: {
                                                symbol: '‍100%',
                                                color: '#C08D6E'
                                            },
                                            active: {
                                                color: '#C08D6E'
                                            },
                                            default: {
                                                color: "#fff"
                                            }
                                        }}
                                        />
                                        <Progress percent={dog} 
                                        theme= {{
                                            success: {
                                                symbol: '‍100%',
                                                color: '#6E9C8D'
                                            },
                                            active: {
                                                color: '#6E9C8D'
                                            },
                                            default: {
                                                color: "#fff"
                                            }
                                        }}
                                        />
                                    </div>
                                    <div>
                                        <GreenBtn link="/upload" namebtn={colorText[1]} onclick={api}/>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}><div className="preimgshow res"><img src={image["show"]} alt="img" /></div></Col>
                        </Row>
                    </Container>
                </Element>
            </div>
        </div>
    )
}

export default Upload;