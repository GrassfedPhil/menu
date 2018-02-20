import React from "react";
import allTheData from "../data/allTheData";
import {Link} from "react-router-dom";

const Item = ({match}) => {
    function renderItems() {
        let category = match.params.category;
        let allTheDatum = allTheData[category];
        let keys = Object.keys(allTheDatum);
        var itemLinks = [];
        for (var i = 0; i < keys.length; i++) {
            let key = keys[i];
            let link = (
                <div>
                    <Link to={`/${category}/${key}`} key={key}>{allTheDatum[key].itemName}</Link>
                </div>
            );
            itemLinks.push(link);
        }
        return itemLinks;
    }

    return (
        <div>
            {renderItems()}
        </div>
    )
};

export default Item;