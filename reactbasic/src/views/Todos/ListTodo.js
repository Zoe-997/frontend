import React from "react";
import "./ListTodo.scss"
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component{
    state = {
        listTodos: [
            {id: 'todo1', title: 'Doing homework'},
            {id: 'todo2', title: 'Making videos'},
            {id: 'todo3', title: 'Fixing bugs'}
        ]
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })

        toast.success('Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listTodos;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodo
        })

        toast.success('Todo was deleted', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    render (){
        let {listTodos} = this.state;
        return(
            <React.Fragment>
                <div className="list-toto-container">
                    <AddTodo addNewTodo={this.addNewTodo} />
                </div>
                <div className="list-todo-content">
                    { listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return(
                                <div className="todo-child" key={item.id}>
                                    <span className="title">{index + 1} - {item.title}</span>
                                    <button className="btn btn-edit">Edit</button>
                                    <button className="btn btn-delete" onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                </div>
                            )
                        })
                    }
                   
                </div>
            </React.Fragment>
        )
    }
}

export default ListTodo;