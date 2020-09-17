import React, { Component } from 'react'
import firebase from "../config"
import "firebase/auth";
import Popup from "./Popup"

export default class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            logStatus: "Log in",
            display: "none"
        }

        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this);
        this.togglePopup = this.togglePopup.bind(this);
    }

    handleEmailChange(e){
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange(e){
        this.setState({
            password: e.target.value
        })
    }

    async handleLogin(){
        if (this.state.logStatus === "Log in") {
            try {
                await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                console.log("success")
                this.setState({
                    logStatus: "Log out"
                })
            } catch(error) {
                console.log("Fail...")
                // Handle Errors here.
                alert(error.message);
                // ...
            }
        } else if (this.state.logStatus === "Log out") {
            try {
                await firebase.auth().signOut()
                // Sign-out successful.
                console.log("logged out")
                this.setState({
                    logStatus: "Log in"
                })
            } catch(error) {
                // An error happened.
              };
        }

    }

    togglePopup(e) {
        console.log(e.target.id)
        const displayed = this.state.display === "none" ? "block" : "none";
        this.setState({
            display: displayed
        })
      }

    render() {
        return (
            <div className="NavBar">
                <div className="title">
                    <h2>League of Legends: Rune Tracker</h2>
                </div>
                <div className="user-control">
                    <h4 onClick={this.togglePopup} value={this.state.logStatus} id="login-button">{this.state.logStatus}</h4>
                    
                </div>

                <Popup style={this.state.display} onClick={this.togglePopup}>
                     <div className="text-container">
                        <h1>Log in</h1>
                        <label id="email">Email address:</label><br/>
                        <input htmlFor="email" type="email"></input><br/>
                        <label id="password">Password:</label><br/>
                        <input htmlFor="password" type="password" placeholder=""></input><br/>
                        <h4 onClick={this.handleLogin} value={this.state.logStatus} id="login-button">{this.state.logStatus}</h4>
                    </div>
                </Popup>

            </div>
        )
    }
}
