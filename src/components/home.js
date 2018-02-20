import React from "react";
import Category from "./category";
import allTheData from "../data/allTheData";

const Home = () => {

    function renderCategories() {
        let categories = Object.keys(allTheData);
        return categories.map((name) => {
            return <Category name={`${name}`} link={`/category/${name}`}/>
        });
    }

    return (
        <div>
            {renderCategories()}
        </div>
    );
};



export default Home;