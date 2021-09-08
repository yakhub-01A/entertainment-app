import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';
class music extends Component {
    constructor() {
        super()
        this.state = {
            musicData: []
        }
    }
    componentDidMount() {
        axios.get("/api/music/allmusics").then(res => {
            console.log(res)
            this.setState({ musicData: res.data["data"] })
        })
    }
    render() {
        return (
            <div>
                <Helmet>
                    <link rel="stylesheet" href="/css/nav.css" />
                    <link rel="stylesheet" href="/css/music.css" />
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
                    Music
                </h1>
                <div className="c">
                    {
                        this.state.musicData.length && this.state.musicData.map(ada => {
                            return <div className="books">
                                <div className="book">
                                    <h3>{ada.id}</h3>

                                    <div className="details">
                                        <p className="head">Music</p>
                                        <hr></hr>
                                        <p className="type">Genres: {ada.title}</p>
                                        <img src={ada.image} alt="Avatar" style={{ width: '300px', height: '300px' }}></img>
                                        <div>
                                            <ReactAudioPlayer src={ada.music} controls />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }</div></div>
        )
    }
}

export default music;