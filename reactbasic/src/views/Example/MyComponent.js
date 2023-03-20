import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component{
    state = {
        arrJobs: [
            {id: 'job1', title: 'developer', salary: '500'},
            {id: 'job2', title: 'tester', salary: '400'},
            {id: 'job3', title: 'manager', salary: '1000'}
        ]
    }

    render(){
        return (
            <React.Fragment>
                <AddComponent/>
                <ChildComponent 
                    arrJobs={this.state.arrJobs}
                />
                
            </React.Fragment>
        )
    }
}

export default MyComponent;