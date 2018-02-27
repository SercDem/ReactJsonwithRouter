import React from "react";
import "./index.css";
import ShowComments from "./showComments";
import * as util from "./utils/postDetailUtils";

class PostDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            v5: false,
            userData: [],
            postData: [],
            dTitle: "",
            dBody: "",
            dUsername: "",
            dEmail: [],
            dPhone: [],
            dName: [],
            param_id: "",
            param_userId: ""
        };
        util.infoPart = util.infoPart.bind(this);
        util.returnToFirstPage = util.returnToFirstPage.bind(this);
    }

    componentDidMount() {
        let params = util.getSearchParameters();
        let param_id = params.id;
        let param_userId = params.userId;

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(result => result.json())
            .then(data => {
                this.setState({userData: data});
                fetch("https://jsonplaceholder.typicode.com/posts")
                    .then(result => result.json())
                    .then(dataPost => {
                        this.setState({postData: dataPost});
                        let tArray = [];
                        let bArray = [];
                        for (let i = 0; i < this.state.postData.length; i++) {
                            if (
                                this.state.postData[i].id.toString() === param_userId.toString()
                            ) {
                                tArray.push(this.state.postData[i].title);
                                bArray.push(this.state.postData[i].body);
                            }
                        }

                        let obj1 = this.state.userData.find(
                            q => q.id.toString() === param_userId.toString()
                        );

                        let obj2 = this.state.postData.find(
                            q => q.id.toString() === param_id.toString()
                        );

                        this.setState({
                            dTitle: obj2.title,
                            dBody: obj2.body,
                            dName: obj1.name,
                            dUsername: obj1.username,
                            dEmail: obj1.email,
                            dPhone: obj1.phone,

                            param_id: param_id,
                            param_userId: param_userId
                        });
                    });
            });
    }

    render() {
        let i_id = this.state.param_id;
        return (
            <div>
                <h1> Post Detail </h1>
                <h1 id="toReturn" onClick={util.returnToFirstPage}>
                    Click This To Return
                </h1>
                <div className="Listdiv">
                    <span> Post Title: {this.state.dTitle} </span> <p/>
                    <span> Username: {this.state.dName} </span>
                </div>
                <div className="Listdivbody"> Post Body: {this.state.dBody} </div>
                <h1> Author </h1>
                <div className="AuthorDiv">
                    <div className="leftdiv"> User</div>
                    <div className="rightdiv"> {this.state.dName} </div>
                    <div className="leftdiv"> Username</div>
                    <div className="rightdiv"> {this.state.dUsername} </div>
                    <div className="leftdiv"> Email</div>
                    <div className="rightdiv"> {this.state.dEmail} </div>
                    <div className="leftdiv"> Phone</div>
                    <div className="rightdiv"> {this.state.dPhone} </div>
                </div>
                <span id="linkforinfo" onClick={util.infoPart}>
          Show Comments
        </span>
                <div id="showcomment">
                    {this.state.v5 ? (
                        <ShowComments
                            takenID={i_id}
                            usD={this.state.userData}
                            poD={this.state.postData}
                            takenEmail={this.state.dEmail}
                            takenTitle={this.state.dTitle}
                            takenBody={this.state.dBody}
                        />
                    ) : null}
                </div>
            </div>
        );
    }
}

export default PostDetails;
