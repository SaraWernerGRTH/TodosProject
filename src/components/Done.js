import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteTodo } from './../actions/todoAction';

export class Done extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            todo: {
                "id": "",
                "name": "",
                "IsDone":"",
                "startDate":"",
                "endDate":"",
                "Remark":""
            },
        }
        this.click = this.click.bind(this);           
    }
    click(id){ 
        var todo={
            "id": id,
            "IsDone":false
        }; 
        this.props.updateToTodo(todo);
    }
    render() {
        return (
            <div className="done-item">
                  <span className="col"> {this.props.id}</span>
                  <span className="col col-lg-3"> {this.props.name}</span>
                  <span className="col"> <input type="checkbox" onChange={() => this.click(this.props.id)} checked/> </span>
                  <span className="col"> {this.props.startDate}</span>
                  <span className="col"> {this.props.endDate}</span>
                  <span className="col col-lg-3"> {this.props.Remark}</span>
                  <span  className="col"><Link to={`/Add/${this.props.id}`}>Update</Link></span>
                  <span className="col"><button  onClick={() => this.props.onDelete(this.props.id)}>delete</button></span>
             </div>
            // <tr>
            //     <td> {this.props.id}</td>
            //     <td> {this.props.name}</td>
            //     <td> <input type="checkbox" onChange={() => this.click(this.props.id)} checked/> </td>
            //     <td> {this.props.startDate}</td>
            //     <td> {this.props.endDate}</td>
            //     <td> {this.props.Remark}</td>
            //     <td ><Link to={`/Add/${this.props.id}`}>Update</Link></td>
            //     <td><button  onClick={() => this.props.onDelete(this.props.id)}>delete</button></td>
            // </tr>
        );
       
    }
}
 