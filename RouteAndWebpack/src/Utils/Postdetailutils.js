import React from "react";

function returnToFirstPage() {
    window.location.href = "/";
}

function infoPart() {
    if (this.state.v5 === false) {
        this.setState({
            v5: true
        });
    } else {
        this.setState({
            v5: false
        });
    }
}

function getSearchParameters() {
    let prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray(prmstr) {
    let params = {};
    let prmarr = prmstr.split("&&");
    for (let i = 0; i < prmarr.length; i++) {
        let tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

export {getSearchParameters, returnToFirstPage, infoPart};
