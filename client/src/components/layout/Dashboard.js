import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <Helmet>
          <link rel="stylesheet" href="/css/dashboard.css" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        </Helmet>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div>
          <div className="navbar">
            <h3>Hey there,</h3>
            <h4><b>{user.name.split(" ")[0]}</b></h4>
            <nav>
              <ul>
                <Link to="/feedback"><li><a href="#">Feedback</a></li></Link>
                <li><a onClick={this.onLogout} href="">Logout</a></li>
              </ul>
            </nav>
          </div>
          <div className="Big_box">
            <div className="heading">
              <h1>ENT</h1>
              <p>Entertainment is everything</p>
            </div>
            <div className="container" style={{ marginTop: '100px' }}>
              <div className="box box-1">
                <div className="cover">
                  <img
                  src="https://i.pinimg.com/originals/95/51/d4/9551d4539d80bd55533202aa7e4b6e6b.gif" alt=""
                  style={{ width: '260px', height: '180px' }} /></div>
                <Link to="/music">
                  <button className="button">
                    <div></div>
                  </button>
                </Link>
              </div>
              <div className="box box-2">
                <div className="cover"><img
                  src="https://i.pinimg.com/originals/c1/a8/1d/c1a81d0956f0456e4ebc324883bbc9a2.gif" alt=""
                  style={{ width: '260px', height: '180px' }} /></div>
                <Link to="/video">
                  <button className="button">
                    <div></div>
                  </button>
                </Link>
              </div>
              <div className="box box-3">
                <div className="cover"><img
                  src="https://i.pinimg.com/originals/04/71/2c/04712cb5c07df56adf12280da2e153e1.gif" alt=""
                  style={{ width: '260px', height: '180px' }} /></div>
                <Link to="/comic">
                  <button className="button">
                    <div></div>
                  </button>
                </Link>
              </div>
              <div className="box box-4">
                <div className="cover"><img
                  src="https://i.pinimg.com/originals/0e/03/f8/0e03f8e389b7a3b8ee4b5670cabb1975.gif" alt=""
                  style={{ width: '260px', height: '180px' }} /></div>
                <Link to="/joke">
                  <button className="button">
                    <div></div>
                  </button>
                </Link>
              </div>
              <div className="box box-4">
                <div className="cover"><img
                  src="https://i.pinimg.com/originals/0e/03/f8/0e03f8e389b7a3b8ee4b5670cabb1975.gif" alt=""
                  style={{ width: '260px', height: '180px' }} /></div>
                <Link to="/game">
                  <button className="button">
                    <div></div>
                  </button>
                </Link>
              </div>
              <div className="box box-4">
                <div className="cover"><img
                  src="https://i.pinimg.com/originals/0e/03/f8/0e03f8e389b7a3b8ee4b5670cabb1975.gif" alt=""
                  style={{ width: '260px', height: '180px' }} /></div>
                <Link to="/chatbot" target="_blank">
                  <button className="button">
                    <div></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);