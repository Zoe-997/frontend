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

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log('>>> run component did update: ', 'prevState: ', prevState, 'curentState: ', this.prevState);
    }

    componentDidMount(){
        console.log('>>> run component did mount');
    }

    render(){
        return (
            <React.Fragment>
                <AddComponent addNewJob={this.addNewJob} />
                <ChildComponent 
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
                
            </React.Fragment>
        )
    }
}

export default MyComponent;