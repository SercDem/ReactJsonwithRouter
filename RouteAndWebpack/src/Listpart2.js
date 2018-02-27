import React from "react";
import "./index.css";
import * as util from "./Utils/Listutils";
import Getusername from "./Utils/Listutils";

class Listpart2 extends React.Component {
    constructor(props) {
        super(props);
        util.onListClick = util.onListClick.bind(this);
    }

    render() {
        let a = this.props.postData.find(q => q.title === this.props.item);
        return (
            <div onClick={util.onListClick} className="Listdiv" id={this.props.i_id}>
                <span> Post Title: {this.props.item} </span>
                <span>
          <p/>
          Username:
          <Getusername
              no={a.userId}
              vTitle={this.props.item}
              userData={this.props.userData}
              postData={this.props.postData}
          />
        </span>
            </div>
        );
    }
}

export default Listpart2;
