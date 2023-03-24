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

    handleDeleteUser = (user) => {
        console.log('>>> check user delete: ', user);
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.addUserRedux();
    }

    render(){
        console.log('>>> check prop redux: ', this.props.dataRedux);
        let listUsers = this.props.dataRedux;
        return(
            <React.Fragment>
                <div>Hello world from Homepage.</div>
                <div><img src={logo} alt="Orfarm Logo" /></div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item,index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    <span className="btn btn-delete" onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        })
                    }
                    <button className="btn btn-add" onClick={() => this.handleCreateUser()}>Add new</button>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETED_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATED_USER'}),
    }
}

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));