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
                <div className="frame">
                    <iframe
                        width="600"
                        height="670"
                        src="https://console.dialogflow.com/api-client/demo/embedded/0887a6ca-4aac-4992-8c26-cacef943f2ed">
                    </iframe>
                </div>
            </div>
        )
    }
}

export default chatbot;