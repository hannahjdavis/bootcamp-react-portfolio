import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <div>
                <h1> Login to Accesss your Dashboard </h1>
                
                <form>
                    <input type="text"/>
                    <input type="password"/>
                </form>
            </div>
        );
    }
}