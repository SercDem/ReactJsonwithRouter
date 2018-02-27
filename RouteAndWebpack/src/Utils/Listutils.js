import React from "react";

function onListClick(e) {
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

function Getusername(props) {
    //We get the object with its title name
    let t = props.postData.find(q => q.title === props.vTitle);
    let vv = t.userId;
    if (props.no.toString() === vv.toString()) {
        let c = props.userData.find(q => q.id === vv);
        return <span> {c.name} </span>;
    } else {
        //Returning empty span if something wrong happens
        return <span> </span>;
    }
}

export default Getusername;
export {onListClick};
