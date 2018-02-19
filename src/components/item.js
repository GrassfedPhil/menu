import React from "react";

const Item = ({match}) => {
    return (

        <div>ITEM {match.params.category}</div>
    )
};

export default Item;