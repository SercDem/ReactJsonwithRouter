import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Listpart1 from "./Listpart1";
import Postdetail from "./Postdetail";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Listpart1}/>
                <Route path="/Second" component={Postdetail}/>
            </div>
        </BrowserRouter>
    );
}

//Renders the First Page
ReactDOM.render(<App/>, document.getElementById("root"));
