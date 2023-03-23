import axios from "axios";
import React from "react";  
import { withRouter } from "react-router-dom";

class DetailUser extends React.Component {
    state = {
        user: {}
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
            console.log('check res:',res);            
        }
    }

    handleBackButton = () => {
        this.props.history.push('/user')
    }

    render() {
        let {user} = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        return (
            <React.Fragment>
                <div>Hello detail user id: {this.props.match.params.id}</div>
                {isEmptyObj === false &&
                    <React.Fragment>
                        <div>User's Name: {user.first_name} {user.last_name}</div>
                        <div>User's Email: {user.email}</div>
                        <div>
                            <img src={user.avatar} alt={user.text} />
                        </div>
                        <div><button type="button" className="btn back" onClick={() => this.handleBackButton()}>Back</button></div>
                    </React.Fragment>
                }
                
            </React.Fragment>
        )
    }
}

export default withRouter(DetailUser);