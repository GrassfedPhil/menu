import React from "react";
import panic from "../images/panic.gif";

const NoMatch = () => {
    return (
        <div>
            <img src={panic} alt={""}/>
            <h1>OH NOES THIS ROUTE GOES NOWHERE!</h1>
        </div>
    )
};

export default NoMatch;