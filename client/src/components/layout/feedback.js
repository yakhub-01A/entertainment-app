import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class Feedback extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            comments: "",
        }
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        alert("submitted")
        let databody = {
            "comments":this.state.comments,
            "name": this.state.name,
            "email": this.state.email
        }
    console.log(databody);
        return fetch('/api/users/staff', {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => console.log(data)); 
    }

    onChange = e => {
        console.log(e.target.name)
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { name, email, comments } = this.state;
        return (
            <div>
                <Helmet>
                    <link rel="stylesheet" href="/css/nav.css" />
                    <link rel="stylesheet" href="/css/feedback.css" />
                </Helmet>
                <header>
                    <a className="logo" href=""><span className="logo_name">ENT APP</span></a>
                    <nav>
                        <ul>
                            <Link to="/dashboard"><li><a href="">Home</a></li></Link>
                            <Link to="/music"><li><a href="">Music</a></li></Link>
                            <Link to="/video"><li><a href="">Videos</a></li></Link>
                            <Link to="/comic"><li><a href="">Comics</a></li></Link>
                            <Link to="/joke"><li><a href="">Jokes</a></li></Link>
                        </ul>
                    </nav>
                    <div className="clearfix"></div>
                </header>
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <div className="agileits_w3layouts">
                    <h1 className="agile_head text-center">Feedback</h1>
                    <div className="w3layouts_main wrap">
                        <form onSubmit={this.handleSubmit} className="agile_form">
                            <h2>Enter your specific feedback here</h2>
                            <textarea onChange={this.onChange} placeholder="comments" className="w3l_summary" name="comments" required="" value={this.state.commentsIn}></textarea>
                            <input onChange={this.onChange} type="text" placeholder="Your Name" name="name" value={this.state.nameIn}/>
                            <input onChange={this.onChange} type="email" placeholder="Your Email" name="email" value={this.state.emailIn}/>
                            <center><input type="submit" value="submit" className="agileinfo" /></center>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Feedback;