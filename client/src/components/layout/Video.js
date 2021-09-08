import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


class video extends Component {
    constructor() {
        super()
        this.state = {
            videoData: []
        }
    }
    componentDidMount() {
        axios.get("/api/videos/allvideos").then(res => {
            console.log(res)
            this.setState({ videoData: res.data["data"] })
        })
    }
    render() {
        return (
            <div>
                <Helmet>
                    <link rel="stylesheet" href="/css/nav.css" />
                    <link rel="stylesheet" href="/css/video.css" />
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
                    Videos
                </h1>
                <div className="c">
                {
                    this.state.videoData.length && this.state.videoData.map(ada => {
                        return <div className="books">
                            <div className="book">
                                <h3>{ada.id}</h3>


                                <div className="details">
                                    <p className="head">Video</p>
                                    <hr></hr>
                                    <p className="type">Name: {ada.title}</p>
                                    <iframe width="300" height="310" src={ada.video} title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    })
                }</div></div>
        )
    }
}

export default video;