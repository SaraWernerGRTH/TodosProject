import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteTodo } from './../actions/todoAction';
import { changeTodo } from './../actions/todoAction';
import { Calendar } from 'react-date-range';
import { DatePop } from './datePop';
export class Todo extends React.Component {
    showDetails="1";
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false,
            startDate:"",
            endDate:"",
            currentRemark:"",
        }
        this.setRemark = this.setRemark.bind(this);    
        this.startDateHandler = this.startDateHandler.bind(this);  
        this.endDateHandler = this.endDateHandler.bind(this);               
    }
    update(id){
        this.setState({showDetails:true});
    }
    save(id){
        this.setState({showDetails:false});
        var todo={
            "id": id,
            "IsDone":true,
            "startDate":this.state.startDate,
            "endDate":this.state.endDate,
            "Remark":this.state.currentRemark
        }; 
        this.props.updateToDone(todo);
        this.currentRemark="";     
    }
    setRemark(event){
        this.setState({currentRemark: event.target.value});
    }
    startDateHandler(event) {
        console.log(String(event._d).slice(4,15)); 
        this.setState({startDate:String(event._d).slice(4,15)});        
    }
    endDateHandler(event) { 
        console.log(String(event._d).slice(4,15)); 
        this.setState({endDate:String(event._d).slice(4,15)});        
    }
    render() {
        return (
            <tr>                
                {(this.state.showDetails === true) ? ( <td className="details-to-fill">
                <div className="wrapper-details">
                   <DatePop id="startDate" className="date-picker"  action={this.startDateHandler}></DatePop>
                   <DatePop id="endDate" className="date-picker"  action={this.endDateHandler}></DatePop>
                   { <input id="remark" type="text" value={this.state.currentRemark} placeholder="Remark Here..." onChange={this.setRemark}/> }
                   <button className="save-btn" onClick={() => this.save(this.props.id)}>Save</button>
               </div>
                </td>) : (<td className="empty-td"></td>)}
                <td> {this.props.id}</td>
                <td> {this.props.name}</td>
                <td> <input type="checkbox" onClick={() => this.update(this.props.id)}/> </td>
                <td ><Link to={`/Add/${this.props.id}`}>Update</Link></td>
                <td><button  onClick={() => this.props.onDelete(this.props.id)}>delete</button></td>
            </tr>
        );       
    }
} 