import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge } from 'react-bootstrap';


class Joke extends Component {
    constructor() {
        super()
        this.state = {
            jokeData: []
        }
    }
    componentDidMount() {
        console.log("lkjhk")
        axios.get("/api/jokes/alljokes").then(res => {
            console.log(res)
            this.setState({ jokeData: res.data["data"] })
        })
    }
    render() {
        return (
            <div>
                <Helmet>
                    <link rel="stylesheet" href="/css/nav.css" />

                    <link rel="stylesheet" href="/css/joke.css" />
                </Helmet>
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
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
                <h1 className="title">
                    Jokes
                </h1>
                {
                    this.state.jokeData.length && this.state.jokeData.map(ada => {
                        return <div className="books">
                            <div className="book">
                                <h3>{ada.id}</h3>

                                <div className="details">
                                    <p className="fun">Have fun</p>
                                    <p className="joke_num">📖: {ada.number}</p>
                                    <p className="joke">🏘️: {ada.joke}</p>
                                </div>
                            </div>
                        </div>
                    })
                }</div>
        )
    }
}

export default Joke;