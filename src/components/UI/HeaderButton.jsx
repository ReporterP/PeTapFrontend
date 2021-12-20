import React from 'react';
import { Link } from 'react-router-dom';

const HeaderButton = (props) => (<Link to={props.link}>{props.name}</Link>)

export default HeaderButton;