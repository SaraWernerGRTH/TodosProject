import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom'
import { Route } from 'react-router'
import { Todo } from './Todo'
import { Done } from './Done';
import style from './TodoList.scss'
export class TodoList extends Component {
    constructor(props) {
        debugger;
        super(props);
        this.state = {
            ValueSearch: "",
        }
        this.updateToDone = this.updateToDone.bind(this);    
        this.updateToTodo = this.updateToTodo.bind(this);    
        this.props.OnRefresh();
        console.log(this.props);        
    }
    onInputChange = (event) => {
        const value = event.target.value;
        this.state.ValueSearch = value;
        this.props.OnRefresh();
        this.props.onSearch(this.state.ValueSearch);
    }
    updateToDone(doneDetails){
        debugger;
        var done=this.props.FilterList.filter(obj=>obj.id==doneDetails.id)[0];
        done.IsDone=true;
        done.startDate=doneDetails.startDate;
        done.endDate=doneDetails.endDate;
        done.Remark=doneDetails.Remark;
        this.props.onUpdate(done);
    }  
    updateToTodo(todoDetails){
        debugger;
        var todo=this.props.FilterList.filter(obj=>obj.id==todoDetails.id)[0];
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
                            <div className="line">
                                 <span className="col col-lg-2">id</span>
                                 <span className="col col-lg-4">name</span>
                                 <span className="col col-lg-2">isDone</span>                  
                                 <span className="col col-lg-2">Update</span>
                                 <span className="col col-lg-2">Delete</span>
                            </div>
                            {this.props.FilterList.filter(item=>item.IsDone!=true).map(todoItem => <Todo key={todoItem.id} onDelete={this.props.onDelete} updateToDone={this.updateToDone} {...todoItem} id={todoItem.id}></Todo>)}
                          </div>
                        {/* <table>
                            <tbody>
                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>isDone</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                                {this.props.FilterList.filter(item=>item.IsDone!=true).map(todoItem => <Todo key={todoItem.id} onDelete={this.props.onDelete} updateToDone={this.updateToDone} {...todoItem} id={todoItem.id}></Todo>)}
                            </tbody>
                        </table> */}
                    </div>
                </div>

                <div className="row">
                    <div className="col col-lg-12"> 
                        <h1>Dones List:</h1>
                        <div className="list-wrapper">
                            <div className="line">
                                 <span className="col">id</span>
                                 <span className="col col-lg-2">name</span>
                                 <span className="col">isDone</span>
                                 <span className="col">startDate</span>
                                 <span className="col">endDate</span>
                                 <span className="col col-lg-2">Remark</span>
                                 <span className="col">Update</span>
                                 <span className="col">Delete</span>
                            </div>
                            {this.props.FilterList.filter(item=>item.IsDone===true).map(doneItem => <Done key={doneItem.id} onDelete={this.props.onDelete} updateToTodo={this.updateToTodo} {...doneItem} id={doneItem.id}></Done>)}
                        </div>
                        {/* <table>
                            <tbody>
                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>isDone</th> 
                                    <th>startDate</th>
                                    <th>endDate</th>                         
                                    <th>Remark</th> 
                                    <th>Update</th>
                                    <th>Delete</th>                             
                                </tr>
                                {this.props.FilterList.filter(item=>item.IsDone===true).map(doneItem => <Done key={doneItem.id} onDelete={this.props.onDelete} updateToTodo={this.updateToTodo} {...doneItem} id={doneItem.id}></Done>)}
                            </tbody> */}
                        {/* </table> */}
                     </div>
                </div>
            </div>
        );
    }
}


