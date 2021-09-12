import React from "react";

const FunctionComponent = (props) => {
    console.log('>>> check function props: ', props);
    let {arrJobs} = props;
    return (
        <React.Fragment>
            <div>FunctionComponent:</div>
            <div className="job-lists">
                {
                    arrJobs.map((item, index) => {
                        return(
                            <div key={item.id}>{item.title} - ${item.salary}</div>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default FunctionComponent;