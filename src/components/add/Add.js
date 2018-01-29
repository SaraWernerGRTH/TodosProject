import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter, Link } from 'react-router-dom';
import { Route, browserHistory, Redirect } from 'react-router';
import { setTimeout } from 'timers';
import ReactTimeout from 'react-timeout';
export class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {         
            todo: {
                "id": "",
                "name": "",
                "IsDone":"",
                "startDate":"",
                "endDate":"",
                "Remark":""
            },
            redirect: false,
            currentTodo: null ,
            validationError:false                   
        }
        if (this.props.match.params.id !== "null") {
            this.state.currentTodo = this.props.data.filter(ct => ct.id == this.props.match.params.id);
            if(this.state.currentTodo.length>0){   
                this.state.todo.id = this.state.currentTodo[0].id;
                this.state.todo.name = this.state.currentTodo[0].name;
                this.state.todo.IsDone = this.state.currentTodo[0].IsDone;
                this.state.todo.startDate = this.state.currentTodo[0].startDate;
                this.state.todo.endDate = this.state.currentTodo[0].endDate;
                this.state.todo.Remark = this.state.currentTodo[0].Remark;       
    
            }
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onSave = this.onSave.bind(this);
    };
    //  componentWillMount(){
    //     if(this.props.data.length==0){
    //         this.setState({ redirect: true });            }
    //  }
    onInputChange = (event) => {
        const todo = this.state.todo;
        todo[event.target.id] = event.target.value;
        this.setState({ todo })
    }

    returnToList = (e) => {
        e.preventDefault();
        this.setState({ redirect: true });
    }

    onSave = (event) => {
        if(this.state.todo.name){
            if (this.state.currentTodo == null) {
                this.state.todo.id =Math.max.apply(Math,this.props.data.map(function(o){return o.id}))+1;                
                this.props.onAdd(this.state.todo);
            }
            else {
                debugger
                this.props.onUpdate(this.state.todo);
            }
            this.returnToList(event);
        }
        else{
         this.setState({validationError:true}
             , () => {
            setTimeout(()=> {
              this.setState(()=> ({validationError:false}));
            }, 2000);
        }
    );   
    event.preventDefault();    
    } 
} 
    onCancel = (event) => {
        this.returnToList(event);
    }
    render() { 
        debugger;      
        if (this.state.redirect) return <Redirect to="/TodosList" />
        return (
            <div>
                <form className="add">
                    <p className="titleAdd">Todo Details</p>
                    <input  
                        id="name"
                        onChange={this.onInputChange}
                        placeholder="name"
                        value={this.state.todo.name}
                        className="ss"/>
                    <br /> 
                    {(this.state.validationError === true) ? (<p className="error-message">You Must Add A Todo's Name !!!</p>) : (<p></p>)}
                    <button className="panel-footer cancel" onClick={this.onCancel} >Cancel</button>
                    <button className="panel-footer sumbit" type="submit" onClick={this.onSave} >Save</button>
                </form>
            </div>
        );
    }
}