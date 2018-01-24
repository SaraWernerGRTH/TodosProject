import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter, Link } from 'react-router-dom';
import { Route, browserHistory, Redirect } from 'react-router';

export class Details extends React.Component {
    constructor(props) {
        debugger
        super(props);
        this.state = {
            itemSelected:{}
        }
        this.componentWillMount=this.componentWillMount.bind(this);
    };
    componentWillMount = () =>{
        var s=this.props.match.params.id;    
        var found = this.props.data.find(function(element) {
            return element.id ==s;
          });
          found.IsDone=String(found.IsDone);
          found.Remark=found.Remark==""?"There Is No Remark To Display.":found.Remark;
          found.startDate=found.startDate==""?"There Is No startDate To Display.":found.startDate;
          found.endDate=found.endDate==""?"There Is No endDate To Display.":found.endDate;          
        this.setState({itemSelected:found});
    }
    returnToList = (e) => {
        e.preventDefault();
        this.setState({ redirect: true });
    }

    render() {       
        return (
            <div className="container details-container">
            <div className="row details-header"><h1>Details Display Form</h1></div>
                <div className="row">
                    <div className='col col-md-2' ><h2>Id:</h2></div>
                    <div className='col col-md-2'><h2>{this.state.itemSelected.id}</h2></div>
                </div>
                <div className="row">
                    <h2 className='col col-md-2'>name:</h2>
                    <div className='col col-md-4' ><h2>{this.state.itemSelected.name}</h2></div>
                </div>
                <div className="row">
                    <h2 className='col col-md-2'>IsDone:</h2>
                    <div className='col col-md-2' ><h2>{this.state.itemSelected.IsDone}</h2></div>
                </div>
                <div className="row">
                    <h2 className='col col-md-2'>startDate:</h2>
                    <div className='col col-md-6' ><h2>{this.state.itemSelected.startDate}</h2></div>
                </div>
                <div className="row">
                    <h2 className='col col-md-2'>endDate:</h2>
                    <div className='col col-md-6' ><h2>{this.state.itemSelected.endDate}</h2></div>
                </div>
                <div className="row">
                    <h2 className='col col-md-2'>Remark:</h2>
                    <div className='col col-md-6' ><h2>{this.state.itemSelected.Remark}</h2></div>
                </div>
            </div>
        );
    }
}