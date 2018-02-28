import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ListPart1 from "./ListPart1";
import PostDetails from "./PostDetail";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={ListPart1}/>
                <Route path="/Second" component={PostDetails}/>
            </div>
        </BrowserRouter>
    );
}

//Renders the First Page
ReactDOM.render(<App/>, document.getElementById("root"));
