import React from "react";
import './Demo.scss';

class ChildComponent extends React.Component{
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnclickDelete = (job) => {
        this.props.deleteAJob(job)
    }

    render(){
        let { arrJobs } = this.props;
        let { showJobs } = this.state;

        return (
            <React.Fragment>
                {showJobs === false ? 
                    <button className="btn btn-show" onClick={() => this.handleShowHide()}>Show</button>
                :
                    <React.Fragment>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return(
                                        <div key={item.id}>{item.title} - ${item.salary} <span onClick={() => this.handleOnclickDelete(item)}>x</span></div>
                                    )
                                })
                            }
                        </div>
                        <button className="btn btn-hide" onClick={() => this.handleShowHide()}>Hide</button>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

export default ChildComponent;