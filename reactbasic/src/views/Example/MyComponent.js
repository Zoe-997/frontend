import React from "react";
import ChildComponent from "./ChildComponent";
// import FunctionComponent from "./FunctionComponent";

class MyComponent extends React.Component{
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            {id: 'job1', title: 'developer', salary: '500'},
            {id: 'job2', title: 'tester', salary: '400'},
            {id: 'job3', title: 'manager', salary: '1000'}
        ]
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('>>> check submit form: ', this.state);
    }

    render(){
        console.log('>>> call render: ', this.state);
        return (
            <React.Fragment>
                <form action="/action_page.php">
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    /><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input 
                    type="text" 
                    value={this.state.lastName}
                    onChange={(event) => this.handleChangeLastName(event)}
                    /><br/><br/>
                    <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)}/>
                </form>
                <ChildComponent 
                    name={this.state.firstName}
                    age={"26"}
                    address={"Ha Noi"}
                    arrJobs={this.state.arrJobs}
                />
                {/* <FunctionComponent arrJobs={this.state.arrJobs}/> */}
            </React.Fragment>
        )
    }
}

export default MyComponent;