import React from 'react';
import { Container ,Row } from 'react-bootstrap';
import logo from '../img/logo.svg';
import HeaderButton from './UI/HeaderButton';

const MainMenu = ()=>{
    return (
        <header>
            <Container>
                <Row>
                    <div className='d-flex align-items-center justify-content-between'>
                        <HeaderButton name={<img src={logo} alt={"logo"} />} link="/" />
                        <nav>
                            <HeaderButton name="upload" link="/upload" />
                            <HeaderButton name="game" link="/game"/>
                            <HeaderButton name="About Us" link="/About" />
                            <HeaderButton name="Statistic" link="/statistic" />
                        </nav>
                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default MainMenu;