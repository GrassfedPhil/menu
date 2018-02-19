import React from "react";
import allTheData from "../data/allTheData";
import {Link} from "react-router-dom";

const Item = ({match}) => {
    function renderItems() {
        let categories = allTheData.categories.filter(category => category.name === match.params.category)
        let items = categories[0].items;
        return items.map(item => {
            return (
                <div>
                    <Link to="place">{item.text}</Link>
                </div>
            )
        });
    }

    return (
        <div>
            {renderItems()}
        </div>
    )
};

export default Item;