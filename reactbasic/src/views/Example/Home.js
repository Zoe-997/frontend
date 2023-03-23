import React from "react";
import { withRouter } from "react-router";

import Color from "../HOC/Color";
import logo from '../../assets/images/orfarm-logo.png';

class Home extends React.Component{
    componentDidMount(){
        // setTimeout(() => {
        //     this.props.history.push('/todos');
        // }, 3000)
    }

    render(){
        return(
            <React.Fragment>
                <div>Hello world from Homepage.</div>
                <div><img src={logo} alt="Orfarm Logo" /></div>
            </React.Fragment>
        )
    }
}

// export default withRouter(Home);
export default Color(Home);