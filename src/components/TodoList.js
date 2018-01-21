import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom'
import { Route } from 'react-router'
import { Todo } from './Todo'
import { Done } from './Done';
import style from './TodoList.scss'
export class TodoList extends Component {
    // componentWillUnmount() {
    //     this.setState({todos: this.props.FilterList.filter(item=>item.isChecked!=true)}); 
    //     this.setState({dones: this.props.FilterList.filter(item=>item.isChecked==true)}); 
    //  }
    constructor(props) {
        debugger;
        super(props);
        this.state = {
            ValueSearch: "",
            // todos:[],
            // dones:[]
        }
        debugger; 
        this.props.OnRefresh();
        console.log(this.props);
        // this.abc();
        // this.abx().subscribe(()=>{
        //     this.props.OnRefresh();
        //     console.log(this.props)
        // });
        
    }
    // abc =()=> {
    //     this.setState({todos: this.props.FilterList.filter(item=>item.isChecked!=true)}); 
    //     this.setState({dones: this.props.FilterList.filter(item=>item.isChecked==true)}); 
    // }

    onInputChange = (event) => {
        const value = event.target.value;
        this.state.ValueSearch = value;
        this.props.OnRefresh();
        this.props.onSearch(this.state.ValueSearch);
    }

    render() {
        console.log(this);
        return (
            <div >
                <Link to={`/Add/${null}`} >Add</Link>
                <br /><br /><br />
                <input className="search" type="text" placeholder="search" onChange={this.onInputChange} value={this.state.ValueSearch} />
                <div className="table-users">
                <h1 className="header">Todos List:  </h1>
                    <table className="table1">
                        <tbody>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>isDone</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                            {this.props.FilterList.filter(item=>item.IsDone!=true).map(todoItem => <Todo onDelete={this.props.onDelete} onChange={this.props.onChange} {...todoItem} id={todoItem.id}></Todo>)}
                        </tbody>
                    </table>
                </div>
                <div className="table-dones">
                <h1 className="header">Dones List:  </h1>
                    <table className="table2">
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
                            {this.props.FilterList.filter(item=>item.IsDone===true).map(doneItem => <Done onDelete={this.props.onDelete} onChange={this.props.onChange} {...doneItem} id={doneItem.id}></Done>)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


