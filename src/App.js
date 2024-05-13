import React from "react";
import ReactDOM from "react-dom";
// using named import
// import { HeaderComponent } from "./components/HeaderComponent";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";

//1.HeaderComponent
//3. RestaurantComponent
//4.restData
//2. BodyComponent
const MainComponent = ()=> {
    return <>
        <HeaderComponent/>
        <BodyComponent/>
    </>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainComponent/>);