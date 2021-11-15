import React, {Component} from "react";

class CloseSearch extends Component{
    render(){
        return(
            <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
        )
    }
}

export default CloseSearch;