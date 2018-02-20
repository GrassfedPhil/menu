import React from "react";
import allTheData from "../data/allTheData";
import {Link} from "react-router-dom";

let styles = {
    container: {
        display: 'flex',
        justifyContent: 'center'
    }
};

const CategoryGroup = ({match}) => {
    function renderItems() {
        let category = match.params.category;
        let categoryItems = allTheData[category].items;
        let keys = Object.keys(categoryItems);
        var itemLinks = [];
        for (var i = 0; i < keys.length; i++) {
            let key = keys[i];
            let item = categoryItems[key];
            let link = (
                <div key={key}>
                    <Link to={`/${category}/${key}`}>
                        <img src={item.image} alt={""}/>
                        <div>{item.itemName}</div>
                    </Link>
                </div>
            );
            itemLinks.push(link);
        }
        return itemLinks;
    }

    return (
        <div style={styles.container}>
            {renderItems()}
        </div>
    )
};

export default CategoryGroup;