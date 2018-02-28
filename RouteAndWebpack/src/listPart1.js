import React from "react";
import "./index.css";
import ListPart2 from "./ListPart2";

class ListPart1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [],
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
        this.setState({ userData: data });
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(result => result.json())
          .then(dataPost => {
            this.setState({ postData: dataPost });
            let nameArray = [];
            for (let i = 0; i < this.state.userData.length; i++) {
              nameArray.push(this.state.userData[i].name);
            }
            let titleArray = [];
            for (let i = 0; i < this.state.postData.length; i++) {
              titleArray.push(this.state.postData[i].title);
            }
            this.setState({
              titles: titleArray,
              uName: nameArray
            });
          });
      });
  }

  render() {
    //Mapping the titles we have and giving incremental id to elements
    let userData = this.state.userData;
    let postData = this.state.postData;
    let titleList = this.state.titles;
    let i = 0;
    let itemList;
    itemList = titleList.map(function(item, index) {
      i++;
      return (
        <ListPart2
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

export default ListPart1;
