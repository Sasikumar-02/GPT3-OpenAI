import React from "react";
// import Article from "./components/article/Article";
// import Brand from "./components/brand/Brand";
// import Cta from "./components/cta/Cta";
// import Feature from "./components/feature/Feature";
// import Navbar from "./components/navbar/Navbar";
import './App.css';
import { Footer,Blog, Possibility, Features, WhatGPT3, Header } from "./containers";
import { Article, Brand, Cta, Feature, Navbar } from "./components";

const App = () => { //creating a function name / components as App for the App.js
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
                <Article/>
                <Feature/>
            </div>
            <Brand/>
            <WhatGPT3/>
            <Features/>
            <Possibility/>
            <Cta/>
            <Blog/>
            <Footer/>
        </div>
    );
}

export default App;