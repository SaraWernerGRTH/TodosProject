import React, { Component } from 'react';
import { Todo } from './innerComponents/Todo';
import { Done } from './innerComponents/Done';

export class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ValueSearch: "",
        }
        this.updateToDone = this.updateToDone.bind(this);    
        this.updateToTodo = this.updateToTodo.bind(this);    
        this.search = this.search.bind(this);    
        
        this.props.OnRefresh();
    }
    onInputChange = (event) => {
        const value = event.target.value;
        this.setState({ValueSearch:value},() => this.search());      
    }
    search = () => {
        this.props.OnRefresh();
        this.props.onSearch(this.state.ValueSearch);
    }
    updateToDone = (doneDetails) => {
        var done=this.props.FilterList.filter(obj=>obj.id===doneDetails.id)[0];
        doneDetails.name=done.name;
        this.props.onUpdate(doneDetails);
    }  
    updateToTodo = (todoDetails) => {
        var todo=this.props.FilterList.filter(obj=>obj.id===todoDetails.id)[0];
        todo.IsDone=false;        
        this.props.onUpdate(todo);
    }   
    render() {
        console.log(this);
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-lg-12">
                        <input className="search" type="text" placeholder="search" onChange={this.onInputChange} value={this.state.ValueSearch} />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-lg-12">
                         <h1>Todos List: </h1>
                         <div className="list-wrapper">
                            <div className="line row">
                                 <h3 className="col col-md-3">name</h3>
                                 <h3 className="col col-md-2">isDone</h3>                  
                                 <h3 className="col col-md-2">Update</h3>
                                 <h3 className="col col-md-2">Delete</h3>
                                 <h3 className="col col-md-2">Details</h3>
                            </div>
                            {this.props.FilterList.filter(item=>item.IsDone===false||item.IsDone==="false"||item.IsDone==="").map(todoItem => <Todo key={todoItem.id} onDelete={this.props.onDelete} updateToDone={this.updateToDone} {...todoItem} id={todoItem.id}></Todo>)}
                          </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-lg-12"> 
                        <h1>Dones List:</h1>
                        <div className="list-wrapper">
                            <div className="line row">
                                 <h3 className="col col-md-3">name</h3>
                                 <h3 className="col col-md-1">isDone</h3>
                                 <h3 className="col col-md-2">startDate</h3>
                                 <h3 className="col col-md-2">endDate</h3>
                                 <h3 className="col col-md-2">Remark</h3>
                                 <h3 className="col col-md-1">Update</h3>
                                 <h3 className="col col-md-1">Delete</h3>
                                 <h3 className="btn-details-done">Details</h3>
                            </div>
                            {this.props.FilterList.filter(item=>item.IsDone===true||item.IsDone==="true").map(doneItem => <Done key={doneItem.id} onDelete={this.props.onDelete} updateToTodo={this.updateToTodo} {...doneItem} id={doneItem.id}></Done>)}
                        </div>  
                     </div>
                </div>
            </div>
        );
    }
}