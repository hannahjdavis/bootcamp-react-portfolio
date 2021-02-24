import Axios from 'axios';
import React, { Component } from 'react';

export default class Login extends Component {
    constructor (props) {
        super(props);

        this.state = {
            email:"",
            password: "",
            errorText: "",
        }
        this.handleChange =this.handleChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }

handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value,
        errorText: "",
    })
}

handleSubmit(event) {
    Axios.post("https://api.devcamp.space/sessions",
    {
        client: {
            email:this.state.email,
            password: this.state.password
        }
    },
    { withCredentials: true }

    ).then(response => {
        if (response.data.status === "created") {
            console.log ("Welcome Admin!");
        } else {
            this.setState({
                errorText:"Wrong Email or Password!"
            });
        }
        
    }).catch(error => {
        console.log("some error occured", error);
    })
    event.preventDefault()
    
}

    render() {
        return (
            <div>
                <h1> Login to Accesss your Dashboard </h1>

                <div>{this.state.errorText}</div>
                
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                    
                    <input 
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />

                    <div>
                        <button type="submit">Login</button>
                    </div>

                </form>
            </div>
        );
    }
}