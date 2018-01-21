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
            remark:""
        }
        this.handleApply1 = this.handleApply1.bind(this);   
        this.handleApply2 = this.handleApply2.bind(this); 
        this.setRemark = this.setRemark.bind(this);       
    }
    update(id){
        this.setState({showDetails:true});
    }
    save(id){
        this.setState({showDetails:false});
        //startDate,endDate,remark,true
        this.props.onChange(id);        
    }
    setRemark(){
    //     var remark=document.getElementById(remark).textContent;
    //   this.setState({remark:remark});
    }
    handleApply1(event, picker) {
        this.setState({
          startDate: picker.startDate,
        });
      }
      handleApply2(event, picker) {
        this.setState({
          endDate: picker.startDate,
        });
      }
    render() {
        return (
            <tr>                
                {(this.state.showDetails == true) ? ( <td className="details-to-fill">
                <div className="wrapper-details">
                   <DatePop id="startDate" className="date-picker"  onApply={() => this.handleApply1()}></DatePop>
                   <DatePop id="endDate" className="date-picker"  onApply={() => this.handleApply2()}></DatePop>
                   <input id="remark" type="text" placeholder="Remark Here..." onChange={() => this.setRemark()}/>
                   <button className="save-btn" onClick={() => this.save(this.props.id)}>Save</button>
               </div>
                </td>) : (<td></td>)}
                <td> {this.props.id}</td>
                <td> {this.props.name}</td>
                <td> <input type="checkbox" onClick={() => this.update(this.props.id)}/> </td>
                <td ><Link to={`/Add/${this.props.id}`}>Update</Link></td>
                <td><button  onClick={() => this.props.onDelete(this.props.id)}>delete</button></td>
            </tr>
        );
       
    }
}
 