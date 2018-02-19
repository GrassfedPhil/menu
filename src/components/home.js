import React from "react";
import Category from "./category";
import allTheData from "../data/allTheData";

const Home = () => {

    function renderCategories() {
        return allTheData.categories.map((item) => {
            return <Category name={`${item.name}`} link={`/category/${item.name}`} key={item.id}/>
        });
    }

    return (
        <div>
            {renderCategories()}
        </div>
    );
};



export default Home;