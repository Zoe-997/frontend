import React from "react";
import './ListUser.scss';
import axios from "axios";
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
    state = {
        listUsers: []
    }
    // componentDidMount(){
    //     axios.get('https://reqres.in/api/users?page=2')
    //     .then(res => {
    //         console.log('>>> check res', res.data.data);
    //     })
    // }

    // ES7:
    async componentDidMount(){
        let res = await axios.get('https://reqres.in/api/users?page=2')
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`);
    }

    render() {
        let {listUsers} = this.state;
        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list users
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className="child">
                                    <span className="title" onClick={() => this.handleViewDetailUser(item)}>
                                        {index + 1} - {item.first_name} {item.last_name}
                                        </span>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        )
    }
}

export default withRouter(ListUser);