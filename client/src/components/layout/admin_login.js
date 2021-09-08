import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { Helmet } from "react-helmet";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

class adminlogin extends Component{
    constructor() {
        super();
        this.state = {
          email: "",
          password: "",
          errors: {}
        }
      }

      onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
      }
    
      onSubmit = e => {
        const {email, password} = this.state;
        e.preventDefault();
        if(email==="admin@gmail.com"&&password==="admin"){
            window.location.replace("http://localhost:3000/admin");
        }
        if(email!=="admin@gmail.com"&&password!=="admin"){
            MySwal.fire({
                icon: 'error',
                title: 'Invalid Details',
                text: 'Check your Email and Password',
              })
        }
        if(email!=="admin@gmail.com"&&password==="admin"){
            MySwal.fire({
                icon: 'error',
                title: 'Email Not Found',
                text: 'Check your Email',
              })
        }
        if(email==="admin@gmail.com"&&password!=="admin"){
            MySwal.fire({
                icon: 'error',
                title: 'Wrong Password',
                text: 'Check your Password',
              })
        }

      }

    render(){
        const {email, password, errors } = this.state;
        return(
            <div>
                <Helmet>
                    <link rel="stylesheet" href="/css/admin_login.css" />
                </Helmet>
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <div className="box">
                <div className="form-box ">
                    <form className="admin_login-form" onSubmit={this.onSubmit}>
                        <div><Link to="/"><i className="fa fa-arrow-circle-left "></i> Back to Home</Link></div>
                        <h2>Admin Login</h2>
                        <hr />
                        <div className="form-group">
                            <input type="email"
                            id="email"
                            placeholder="Email Address"
                            value={email}
                            error={errors.email}
                            onChange={this.onChange}
                            className={classnames("form-control", {
                                invalid: errors.email
                            })} />
                            <span className="red-text">{errors.email}</span>
                        </div>

                        <div className="form-group">
                            <input type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            error={errors.password}
                            onChange={this.onChange}
                            className={classnames("form-control", {
                                invalid: errors.password
                            })} />
                            <span className="red-text">{errors.password}</span>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block btn-lg">Login</button>
                        </div>
                    </form>
                </div>
            </div>
                
    </div>
        )
    }
}

export default adminlogin;