import React from "react";

function Getusername(props) {
    //We get the object with its title name
    let t = props.postData.find(q => q.title === props.title);
    let vv = t.userId;
    if (props.id.toString() === vv.toString()) {
        let c = props.userData.find(q => q.id === vv);
        return <span> {c.name} </span>;
    } else {
        //Returning empty span if something wrong happens
        return <span> </span>;
    }
}

export default Getusername;
