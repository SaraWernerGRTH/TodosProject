import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteTodo } from './../actions/todoAction';
import { changeTodo } from './../actions/todoAction';
import React, { Component } from 'react';
import { Calendar } from 'react-date-range';

export class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td> {this.props.id}</td>
                <td> {this.props.name}</td>
                <td> <input type="checkbox" onClick={() => this.props.onChange(this.props.id,true)}/> </td>
                <td ><Link to={`/Add/${this.props.id}`}>Update</Link></td>
                <td><button  onClick={() => this.props.onDelete(this.props.id)}>delete</button></td>
            </tr>
        );
       
    }
}
 