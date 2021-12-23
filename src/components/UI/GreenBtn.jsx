import React from "react";
import { Link } from "react-router-dom";

const GreenBtn = (props) => <div className="GreenBtn"><Link to={props.link} onClick={props.onclick}>{props.namebtn}</Link></div>

export default GreenBtn;
