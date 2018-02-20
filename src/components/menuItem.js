import React from "react";
import allTheData from "../data/allTheData";

let styles = {
    image: {
        borderRadius: '10px',
    }
};

const MenuItem = ({match}) => {
    let category = match.params.category;
    let itemId = match.params.id;
    let menuItem = allTheData[category].items[itemId];
    return (
        <div>
            <img style={styles.image} src={menuItem.image} alt={""}/>
            <div>{menuItem.itemName}</div>
            <div>{menuItem.description}</div>
        </div>
    )
};

export default MenuItem;