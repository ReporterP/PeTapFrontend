import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Foots from '../components/UI/foot';
import GreenBtn from '../components/UI/GreenBtn';

// import PostService from './API/PostService';
// import Preloader from "./components/Preloader"\


// Получение API (Backend) 

// async function fetchPost(){
//   const response = await PostService.getAll();
//   console.log(response);
// }


// const [isloading, setisloading] = useState(false);


function MainPage() {
  return (
    <div className="page">
      <Container>
        <div className='main'>
          <Row>
            <Col md={{ span: 5, offset: 2 }}>
              <div className='MainPageBtnToUpload d-flex align-items-center justify-content-end'>
                <div className='d-flex'>
                  <GreenBtn namebtn="recognize image" link="/upload" />
                </div> 
              </div>    
            </Col>
          </Row>
          <Row>
            <Col md={{span: 3, offset: 4}}>
              <Foots ind="firstFoot" color="green" />
            </Col>
          </Row>
        </div>
      </Container> 
      <Container>
        <Row>
          <Col md={{span: 3, offset: 1}}>
            <Foots ind="secondFoot" color="" />
          </Col>
          <Col md={{span: 5, offset: 2}}>
            <div className='mainads d-flex justify-content-center'>
              <h2>upload image</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmoda.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={{span: 5, offset: 1}}>
            <div className='mainads d-flex justify-content-center'>
              <h2>suppose the variant</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmoda.</p>
            </div>
          </Col>
          <Col md={{span: 3, offset: 1}}>
            <Foots ind="thirdFoot" color="" />
          </Col>
        </Row>
        <Row>
          <Col md={{span: 3, offset: 2}}>
              <Foots ind="fourFoot" color="green" />
            </Col>
            <Col md={{span: 5, offset: 1}}>
              <div className='mainads d-flex justify-content-center'>
                <h2>Play with neyron</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmoda.</p>
              </div>
            </Col>
        </Row>
      </Container>
      <Container>
        <div className='mainpCG_d'>
          <Row>
            <Col md={4}>
              <div className='mainpCG'>
                <h2>DOG</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </Col>
            <Col md={{span:4 , offset:4}}>
              <div className='mainpCG'>
                <h2><span>CAT</span></h2>
                <p className='mainpCG_p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default MainPage;
