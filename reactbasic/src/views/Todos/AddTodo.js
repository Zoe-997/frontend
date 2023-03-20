import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component{
    state = {
        title: ''
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddTodo = () => {
        if (!this.state.title) {
            toast.error(`Missing title's Todo`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }

        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }

    render(){
        let { title } = this.state;
        return(
            <div className="add-todo">
                <input type="text" value={title} onChange={(event) => this.handleChangeTitle(event)}/>
                <button type="button" className="btn btn-add" onClick={() => this.handleAddTodo()}>Add</button>
            </div>
        )
    }
}

export default AddTodo;