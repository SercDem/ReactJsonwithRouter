import React from "react";
import "./index.css";
import Listpart2 from "./Listpart2";

class Listpart1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _titles: [],
            dEmail: "",
            dPhone: "",
            dUserName: "",
            dName: "",
            dTitle: "",
            dBodyCount: [],
            userData: [],
            postData: [],
            uName: []
        };
    }

    //Fetching json values before page renders
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(result => result.json())
            .then(data => {
                this.setState({userData: data});
                fetch("https://jsonplaceholder.typicode.com/posts")
                    .then(result => result.json())
                    .then(dataPost => {
                        this.setState({postData: dataPost});
                        //Pushing usernames into uName named array
                        let nArray = [];
                        for (let i = 0; i < this.state.userData.length; i++) {
                            nArray.push(this.state.userData[i].name);
                        }
                        //Pushing titlenames into pTitle named array
                        let tArray = [];
                        for (let i = 0; i < this.state.postData.length; i++) {
                            tArray.push(this.state.postData[i].title);
                        }
                        this.setState({
                            _titles: tArray,
                            uName: nArray
                        });
                    });
            });
    }

    render() {
        //Mapping the titles we have and giving incremental id to elements
        let userData = this.state.userData;
        let postData = this.state.postData;
        let titleList = this.state._titles;
        let i = 0;
        let itemList;
        itemList = titleList.map(function (item, index) {
            i++;
            return (
                <Listpart2
                    item={item}
                    key={index}
                    i_id={i}
                    userData={userData}
                    postData={postData}
                />
            );
        });
        return (
            <div>
                <h1> List </h1>
                <ul> {itemList} </ul>
            </div>
        );
    }
}

export default Listpart1;
