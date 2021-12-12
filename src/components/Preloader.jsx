import React from 'react';
import logo from '../img/dogcat ikon.svg';


const Preloader = ()=>{
    return (
        <div className='Preloader'>
            <img src={logo} alt={"logo"} />
            <p><span>P</span>E<span>T</span>AP</p>
        </div>
    );
};

export default Preloader;