import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


class Comic extends Component {
    constructor() {
        super()
        this.state = {
            ComicData: []
        }
    }
    componentDidMount() {
        console.log("lkjhk")
        axios.get("/api/comics/allcomics").then(res => {
            console.log(res)
            this.setState({ ComicData: res.data["data"] })
        })
    }
    render() {
        return (
            <div>
                <Helmet>
                    <link rel="stylesheet" href="/css/nav.css" />
                    <link rel="stylesheet" href="/css/comic.css" />
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
                    Comics
                </h1>
                <div className="c">
                {
                    this.state.ComicData.length && this.state.ComicData.map(ada => {
                        return <div className="books">
                            <div className="book">
                                <h3>{ada.id}</h3>


                                <div className="details">
                                    <p className="head">Comic</p>
                                    <hr></hr>
                                    <p className="type">Name: {ada.title}</p>
                                    <iframe width="100%" height="450" src={ada.imageURL} frameborder="0" allow="fullscreen"></iframe>
                                </div>
                            </div>
                        </div>
                    })
                }</div></div>


        )
    }
}
export default Comic;