import React from "react";
import "./index.css";
import Showcomments2 from "./ShowComments2";

class Showcomment extends React.Component {
    render() {
        //Assinging the values we get from prop so they are easier to call
        let TitleArra = [],
            BodyArra = [];
        let Email = this.props.takenEmail;
        let pD = this.props.poD;
        let id = this.props.takenID;
        for (let i = 0; i < pD.length; i++) {
            if (pD[i].userId.toString() === id.toString()) {
                TitleArra.push(pD[i].title);
                BodyArra.push(pD[i].body);
            }
        }
        //Mapping items we have
        let mappa = TitleArra;
        let i = -1;
        mappa = mappa.map(function (item, index) {
            i++;
            return (
                <Showcomments2
                    item={item}
                    key={index}
                    tTitle={TitleArra[i]}
                    tBody={BodyArra[i]}
                    tEmail={Email}
                />
            );
        });
        return (
            <div>
                <ul> {mappa}</ul>
            </div>
        );
    }
}

export default Showcomment;
