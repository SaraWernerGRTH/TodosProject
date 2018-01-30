import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { onLoad } from './actions/todoAction';
import { OnAddTodo, OnUpdateTodo, deleteTodo, OnSearchTodo, OnRefreshTodo, changeTodo } from './actions/todoAction';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/home/home';
import { Add } from './components/add/Add';
import { TodoList } from './components/todoList/TodoList';
import { Layout } from './components/layout/Layout'
import { Details } from './components/Details/Details';

class App extends Component {
    componentWillMount() {
        this.props.onLoad();
    }
    render() {
       // console.log(this)
        return (
            <div>                 
                <BrowserRouter>
                    <div>
                        <Layout />
                        <Route exact path="/"
                            render={(props) => <Home {...props} data={this.props.data}></Home>} />
                        <Route path="/TodoList"
                            render={(props) => <TodoList onDelete={this.props.delete}  onUpdate={this.props.update} onSearch={this.props.Search} data={this.props.data} FilterList={this.props.FilterList} OnRefresh={this.props.Refresh}></TodoList>} />
                        <Route path="/Add/:id"
                            render={(props) => <Add {...props} onAdd={this.props.add} onUpdate={this.props.update} data={this.props.data} ></Add>} />
                        <Route path="/Details/:id"
                            render={(props) => <Details {...props} data={this.props.data} ></Details>} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
function mapStateToProps(store, ownProps) {
    return {
        data: store.data,
        FilterList: store.FilterList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        delete: (id) => dispatch(deleteTodo(id)),
        change: (id,newStatus) => dispatch(changeTodo(id,newStatus)),        
        onLoad: () => dispatch(onLoad()),
        add: (todo) => dispatch(OnAddTodo(todo)),
        update: (todo) => dispatch(OnUpdateTodo(todo)),
        Search: (value) => dispatch(OnSearchTodo(value)),
        Refresh: () => dispatch(OnRefreshTodo())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);