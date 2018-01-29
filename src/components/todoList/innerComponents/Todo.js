import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { deleteTodo } from '../../../actions/todoAction';
// import { changeTodo } from '../../../actions/todoAction';
// import { Calendar } from 'react-date-range';
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
        return false;        
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
    cancel(){
        this.setState({showDetails:false});
        this.currentRemark=""; 
        return false;
    }
    setRemark(event){
        this.setState({currentRemark: event.target.value});
    }
    startDateHandler(event) {
        this.setState({startDate:String(event._d).slice(4,15)});        
    }
    endDateHandler(event) { 
        this.setState({endDate:String(event._d).slice(4,15)});        
    }
    render() {
        return (
            <div className="row">                
                {(this.state.showDetails === true) ? ( <div className="popup-wrapper"><span className="details-to-fill">
                <div className="wrapper-details">
                   <DatePop id="startDate" className="date-picker"  action={this.startDateHandler}></DatePop>
                   <DatePop id="endDate" className="date-picker"  action={this.endDateHandler}></DatePop>
                   { <input id="remark" className="remark" type="text" value={this.state.currentRemark} placeholder="Remark Here..." onChange={this.setRemark}/> }
                   <button className="save-btn" onClick={() => this.save(this.props.id)}>Save</button>
                   <button className="cancel-btn" onClick={() => this.cancel()}>Cancel</button>
               </div>
                </span></div>) : (<span className="empty-td"></span>)}
                <span className="col col-md-3"> {this.props.name}</span>
                <span className="col col-md-2"> <button className="btn-check" onClick={() => this.update(this.props.id)}></button> </span>
                <span className="col col-md-2"><button className="btn btn-warning"><Link to={`/Add/${this.props.id}`}>Update</Link></button></span>
                <span className="col col-md-2"><button className="btn btn-danger" onClick={() => this.props.onDelete(this.props.id)}>Delete</button></span>
                <span className="col col-md-2"><button className="btn btn-details"><Link to={`/Details/${this.props.id}`}>Details</Link></button></span>
            </div>
        );       
    }
} 