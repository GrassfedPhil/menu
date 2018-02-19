import React from "react";
import {Link} from "react-router-dom";

const Category = ({name, link}) => {
    return (
        <div>
            <Link to={link}>{name}</Link>
        </div>
    )
};

export default Category;