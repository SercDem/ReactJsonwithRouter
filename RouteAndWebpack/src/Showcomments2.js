import React from "react";

class Showcomments2 extends React.Component {
    render() {
        return (
            <div>
                <div className="Listdiv">
                    <span> Title Name: {this.props.tTitle} </span> <p/>
                    <span> Email: {this.props.tEmail} </span>
                </div>
                <div className="Listdivbody">
                    <span> Body: {this.props.tBody} </span>
                </div>
            </div>
        );
    }
}

export default Showcomments2;
