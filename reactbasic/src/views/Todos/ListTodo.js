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
        ],
        editTodo: {}
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

    handleEditTodo = (todo) => {
        let {editTodo, listTodos} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        if(isEmptyObj === false && editTodo.id === todo.id){   
            let listTodosCopy = [...listTodos]; 
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success('Update todo success', {
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

        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value;
        
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render (){ 
        let {listTodos, editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

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
                                    {isEmptyObj === true ?
                                        <span className="title">{index + 1} - {item.title}</span>
                                    :
                                        <span className="title edit">
                                            {editTodo.id === item.id ?
                                                <span>{index + 1} - <input type="text" value={editTodo.title} onChange={(event) => this.handleOnChangeEditTodo(event)} /></span>
                                            :
                                                <span>{index + 1} - {item.title}</span>
                                        
                                            }
                                        </span>
                                    }
                                    <button className="btn btn-edit" onClick={() => this.handleEditTodo(item)}>
                                        {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}                                        
                                    </button>
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