import { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class chatbot extends Component{
    render() {
        return (
            <div>
                <Helmet>
                    <link rel="stylesheet" href="/css/chatbot.css" />
                </Helmet>
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <h1 className="title">Chat-Bot</h1>
            </div>
        )
    }
}

export default chatbot;