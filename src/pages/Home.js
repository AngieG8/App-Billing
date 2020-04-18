import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './styles/Home.css';


export default class Home extends Component {
  render() {
    return (
      <div className="Home">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <h1>Easy Billing</h1>
              
          <div className="inputGroup">
            <label className="text"htmlFor="username">Username</label>
            <input type="text" name="username" className="loginInput" placaholder="Username"  />
          </div>
          <div className="inputGroup">
            <label className="text" >Password</label>
            <input type="password" name="password" className="loginInput" placaholder="Password" />
          </div>
        
              <Link className="btn btn-primary" to="/badges">
                Login
              </Link>
            </div>
          </div>
      </div>
    );
  }
}
