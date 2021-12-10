import React from 'react';
import logo from '../img/dogcat ikon.svg';


const Welcome = ()=>{
    return (
        <div className='welcome'>
            <img src={logo} alt={"logo"} />
            <p><span>P</span>E<span>T</span>AP</p>
        </div>
    );
};

export default Welcome;