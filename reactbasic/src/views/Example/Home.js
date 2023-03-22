import React from "react";
import { withRouter } from "react-router";  

class Home extends React.Component{
    componentDidMount(){
        setTimeout(() => {
            this.props.history.push('/todos');
        }, 3000)
    }
    render(){
        return(
            <React.Fragment>
                <div>Hello world from Homepage.</div>
            </React.Fragment>
        )
    }
}

export default withRouter(Home);