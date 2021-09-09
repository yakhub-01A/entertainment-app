import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { Helmet } from "react-helmet";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      errors: {}
    }
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    }
    this.props.loginUser(userData);
  }

  redirect = () => {
    let timerInterval
    MySwal.fire({
      icon: 'info',
      title: 'Please contact admin to change your password',
      timer: 3500,
      html: '<span style="color:red"><b>Closes in</b></span> <span style="font-weight: bold;"><i></i></span>.',
      timerProgressBar: true,
      didOpen: () => {
        MySwal.showLoading()
        const b = MySwal.getHtmlContainer().querySelector('i')
        timerInterval = setInterval(() => {
          b.textContent = MySwal.getTimerLeft()
        }, 10)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    })
  }

  render() {
    const { email, password, errors } = this.state;
    return (
      <div className="">
        <Helmet>
          <link rel="stylesheet" href="/css/login.css" />
        </Helmet>
        <div className="box">
          <div className="form-box">
            <form className="login-form" onSubmit={this.onSubmit}>
              <div><Link to="/"><i className="fa fa-arrow-circle-left "></i> Back to Home</Link></div>
              <h2>Login</h2>
              <hr />
              <div className="form-group">
                <input type="email"
                  id="email"
                  placeholder="Email Address"
                  value={email}
                  error={errors}
                  onChange={this.onChange}
                  className={classnames("form-control", {
                    invalid: errors.email || errors.emailnotfound
                  })} />
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="form-group">
                <input type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  error={errors}
                  onChange={this.onChange}
                  className={classnames("form-control", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block btn-lg">Login</button>
              </div>
              <div className="text-center">Don't have an account? <Link to="/register">Register</Link></div>
              <div className="text-center effect"> <a onClick={this.redirect}>Forgot Password?</a></div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);