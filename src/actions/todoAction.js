
import fetch from 'isomorphic-fetch'
import * as axios from 'axios'

export const LOAD_TODO = 'LOAD_TODO'
export const CHANGE_TODO = 'CHANGE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const SEARCH_TODO = 'SEARCH_TODO';
export const REFRESH_TODO = 'REFRESH_TODO';

// export function OnAddTodo(todo) {
//     return { type: ADD_TODO, payload: todo };
// }

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
        return axios.get('http://localhost:3000/data/')
            .then(res => {
                console.log(res)
                dispatch({
                    type: LOAD_TODO,
                    data: res.data
                })
            })
            .catch(err => {
                console.log("error");
            }
            )
    })
    export const OnAddTodo = (todo) => (
        dispatch => {
            return axios.post('http://localhost:3000/data/',todo)
                .then(res => {
                    dispatch({ type: ADD_TODO, payload: todo })
                })
                .catch(err => {
                    console.log("error");
                }
            )
        }
    )
    // export function deleteTodo(todoId) {
    //     dispatch => {
    //         return axios.delete('http://localhost:3000/data/'+todoId)
    //             .then(res => {
    //                 console.log("res:   "+res);
    //                 dispatch({ type: DELETE_TODO, todoId })
    //             })
    //             .catch(err => {
    //                 console.log("error");
    //             }
    //         )
    //     }
    // }
    // export function OnUpdateTodo(todo) {
    //     dispatch => {
    //         return axios.put('http://localhost:3000/data/'+todo.id,todo)
    //             .then(res => {
    //                 debugger;
    //                 console.log("res:   "+res);                    
    //                 dispatch({ type: UPDATE_TODO, payload: res })
    //             })
    //             .catch(err => {
    //                 console.log("error");
    //             }
    //         )
    //     }
    // }