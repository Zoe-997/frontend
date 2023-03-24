import React from "react";
import { withRouter } from "react-router";
import {connect} from 'react-redux';

import Color from "../HOC/Color";
import logo from '../../assets/images/orfarm-logo.png';

class Home extends React.Component{
    componentDidMount(){
        // setTimeout(() => {
        //     this.props.history.push('/todos');
        // }, 3000)
    }

    render(){
        console.log('>>> check prop redux: ', this.props.dataRedux);
        return(
            <React.Fragment>
                <div>Hello world from Homepage.</div>
                <div><img src={logo} alt="Orfarm Logo" /></div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}
// export default withRouter(Home);
export default connect(mapStateToProps)(Color(Home));