import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { Helmet } from "react-helmet";

class forgotpassword extends Component{
    constructor() {
        super();
        this.state = {
          email: "",
          password: "",
          password2: "",
          errors: {}
        }
      }

      onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
      }
    
      onSubmit = e => {
        e.preventDefault();
      }

    render(){
        const {email, password, password2, errors } = this.state;
        return(
            <div>
                <Helmet>
                    <link rel="stylesheet" href="/css/forgot_password.css" />
                </Helmet>
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <div className="box">
                <div className="form-box ">
                    <form className="forgot_password-form" onSubmit={this.onSubmit}>
                        <div><Link to="/login"><i className="fa fa-arrow-circle-left "></i> Back to Login</Link></div>
                        <h2>Forgot Password</h2>
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
                            placeholder="New Password"
                            value={password}
                            error={errors.password}
                            onChange={this.onChange}
                            className={classnames("form-control", {
                                invalid: errors.password
                            })} />
                            <span className="red-text">{errors.password}</span>
                        </div>

                        <div className="form-group">
                            <input type="password"
                            id="password2"
                            placeholder="Confirm New Password"
                            value={password2}
                            error={errors.password}
                            onChange={this.onChange}
                            className={classnames("form-control", {
                                invalid: errors.password2
                            })} />
                            <span className="red-text">{errors.password2}</span>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block btn-lg">Change</button>
                        </div>
                    </form>
                </div>
            </div>
                
    </div>
        )
    }
}

export default forgotpassword;