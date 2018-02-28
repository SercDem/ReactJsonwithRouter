import React from "react";
import "./index.css";
import Getusername from "./utils/listUtils";

class ListPart2 extends React.Component {
  constructor(props) {
    super(props);
    this.onListClick = this.onListClick.bind(this);
  }
  onListClick(e) {
    //We get the clicked elements's tagName till we reach "div" html element and get its id so we can send it to other page
    let tarName = e.target;
    while (tarName.tagName !== "DIV") {
      tarName = tarName.parentNode;
    }
    let tarId = tarName.id;

    //We get the id number from postData and get the actual user id no
    let collectedId = this.props.postData.find(
      q => q.id.toString() === tarId.toString()
    );
    var collectedId1 = collectedId.userId;
    //Then we render the other page with values we need
    window.location.href =
      "/Second" + "?userId=" + collectedId1 + "&&id=" + tarName.id;
  }

  render() {
    let a = this.props.postData.find(q => q.title === this.props.item);
    return (
      <div onClick={this.onListClick} className="Listdiv" id={this.props.i_id}>
        <span> Post Title: {this.props.item} </span>
        <span>
          <p />
          Username:
          <Getusername
            id={a.userId}
            title={this.props.item}
            userData={this.props.userData}
            postData={this.props.postData}
          />
        </span>
      </div>
    );
  }
}

export default ListPart2;
