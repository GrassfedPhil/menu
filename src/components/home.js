import React from "react";
import Category from "./category";
import allTheData from "../data/allTheData";

let styles = {
    container: {
        display: 'flex',
        justifyContent: 'center'

    }
};

const Home = () => {

    function renderCategories() {
        let categories = Object.keys(allTheData);
        return categories.map((name, index) => {
            return <Category name={`${name}`} link={`/category/${name}`} key={index}/>
        });
    }

    return (
        <div style={styles.container}>
            {renderCategories()}
        </div>
    );
};


export default Home;