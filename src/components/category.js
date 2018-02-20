import React from "react";
import {Link} from "react-router-dom";
import allTheData from "../data/allTheData";

const Category = ({name, link}) => {
    let categoryImage = allTheData[name].image;
    return (
        <div>
            <Link to={link}>
                <img src={categoryImage} alt={""}/>
                <div>
                    {name}
                </div>
            </Link>
        </div>
    )
};

export default Category;