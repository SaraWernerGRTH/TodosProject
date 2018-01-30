import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { setTimeout } from 'timers';
export class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {         
            todo: {"id": "","name": "","IsDone":"","startDate":"","endDate":"","Remark":""},
            redirect: false,
            currentTodo: null ,
            validationError:false                   
        }
        if (this.props.match.params.id !== "null") {// update : fill old data.
            this.state.currentTodo = this.props.data.filter(ct => String(ct.id) === this.props.match.params.id);
            if(this.state.currentTodo.length>0){  
                this.state.todo={...this.state.currentTodo[0]};    
            }
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onSave = this.onSave.bind(this);
    };

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
            if (this.state.currentTodo === null) {
                const id = Math.max.apply(Math,this.props.data.map(function(o){return o.id}))+1;  
                const todo=this.state.todo;
                todo.id =id;   
                this.setState({todo},() => this.props.onAdd(this.state.todo));           
            } else {
                this.props.onUpdate(this.state.todo);
            }
            this.returnToList(event);
        } else{
                this.setState({validationError:true}, () => {
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