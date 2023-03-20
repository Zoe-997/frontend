import React from "react";

class ChildComponent extends React.Component{
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    render(){
        let { arrJobs } = this.props;
        let { showJobs } = this.state;

        return (
            <React.Fragment>
                {showJobs === false ? 
                    <button onClick={() => this.handleShowHide()}>Show</button>
                :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return(
                                        <div key={item.id}>{item.title} - ${item.salary}</div>
                                    )
                                })
                            }
                        </div>
                        <button onClick={() => this.handleShowHide()}>Hide</button>
                    </>
                }
            </React.Fragment>
        )
    }
}

export default ChildComponent;