import React from "react";
import footGreen from "../../img/pawtap ikon.png"
import footBrown from "../../img/pawtap ikon_brown.png"

const Foots = (props) => {
    return(
        <div className="foots" id={props.ind}><img src={props.color === "green"?footGreen:footBrown} alt="lags" /></div>
    )
}

export default Foots;