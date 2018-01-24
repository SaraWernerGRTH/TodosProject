import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter, Link } from 'react-router-dom';
import { Route, browserHistory, Redirect } from 'react-router';

export class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    };
    returnToList = (e) => {
        e.preventDefault();
        this.setState({ redirect: true });
    }
    render() {       
        return (
            <div>

            </div>
        );
    }
}