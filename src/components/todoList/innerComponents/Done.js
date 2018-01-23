import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteTodo } from '../../../actions/todoAction';
import { changeTodo } from '../../../actions/todoAction';
import style from '../TodoList.scss';
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
            <div className="done-item row">
                  <span className="col col-md-3"> {this.props.name}</span>
                  <span className="col col-md-1"> <input type="checkbox" onChange={() => this.click(this.props.id)} checked/> </span>
                  <span className="col col-md-2"> {this.props.startDate}</span>
                  <span className="col col-md-2"> {this.props.endDate}</span>
                  <span className="col col-md-2"> {this.props.Remark}</span>
                  <span  className="col col-md-1"><button className="btn btn-info" ><Link to={`/Add/${this.props.id}`}>Update</Link></button></span>
                  <span className="col col-md-1"><button className="btn btn-danger" onClick={() => this.props.onDelete(this.props.id)}>Delete</button></span>
             </div>
        );
       
    }
}
 