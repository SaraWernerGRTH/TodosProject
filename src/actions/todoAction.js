
import fetch from 'isomorphic-fetch'
import * as axios from 'axios'

export const LOAD_TODO = 'LOAD_TODO'
export const CHANGE_TODO = 'CHANGE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const SEARCH_TODO = 'SEARCH_TODO';
export const REFRESH_TODO = 'REFRESH_TODO';

export function OnAddTodo(todo) {
    return { type: ADD_TODO, payload: todo };
}

export function deleteTodo(todoId) {
    return { type: DELETE_TODO, todoId };
}
export function changeTodo(todoId,newStatus) {
    return { type: CHANGE_TODO, todoId,newStatus };
}
export function OnUpdateTodo(todo) {
    return { type: UPDATE_TODO, payload: todo };
}
export function OnSearchTodo(Value) {
    return { type: SEARCH_TODO, payload: Value };
}
export function OnRefreshTodo() {
    return { type: REFRESH_TODO };
}
export const onLoad = () => (
    dispatch => {
        return axios.get('todos.json')
            .then(res => {
                dispatch({
                    type: LOAD_TODO,
                    data: res.data.data
                })
            })
            .catch(err => {
                console.log("error");
            }
            )
    })