import React, { Component } from "react";
import video from './images/Video1.mp4'
import { Helmet } from "react-helmet";

class Landing extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <link rel="stylesheet" href="css/landing.css" />
          <link href="http://designify.me/code-snippets/animated-buttons/css/btns.css" rel="stylesheet" />
          <link href='http://fonts.googleapis.com/css?family=Ubuntu:400,500,700' rel='stylesheet' type='text/css' />
          <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
        </Helmet>
        <nav className="navbar navbar-inverse navbar-fixed-top">
        </nav>
        <div className="jumbotron text-center">
            <video autoPlay="autoplay" muted="muted" loop="loop"  controls={false} src={video}></video>
          <div className="centered">
					<p></p>
				</div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-4 col-xs-4 col-xs-4"> <a href='/register'
              className="btn btn-sm animated-button victoria-one">Sign up</a> </div>
            <div className="col-xs-4 col-xs-4 col-xs-4"> <a href='/login'
              className="btn btn-sm animated-button victoria-two">Login</a> </div>
            <div className="col-xs-4 col-xs-4 col-xs-4"> <a href='/admin_login'
              className="btn btn-sm animated-button victoria-two">Admin Login</a> </div>
          </div>
          <footer>
            <hr style={{ marginTop: '20px'}} />
            <p className="text-center" style={{ fontSize: '30px', color: 'LightGray' }}>Don't overthink. Just let it go</p>
          </footer>
        </div>
      </div>
    );
  }
}
export default Landing;