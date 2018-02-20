import React from "react";
import allTheData from "../data/allTheData";

const MenuItem = ({match}) => {
    let category = match.params.category;
    let itemId = match.params.id;
    let menuItem = allTheData[category][itemId];
    return (
        <div>
            <div>{menuItem.itemName}</div>
            <div>{menuItem.description}</div>
        </div>
    )
};

export default MenuItem;