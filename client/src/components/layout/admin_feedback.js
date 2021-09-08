import React, { Component } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link } from "react-router-dom";

class user extends Component {
    constructor() {
        super()
        this.state = {
            userData: []
        }
    }
    componentDidMount() {

        axios.get("/api/feed/allfeed").then(res => {
            console.log(res)
            this.setState({ userData: res.data["data"] })
        })
    }
    render() {
        return (
            <div>
                <Helmet>
                    <link rel="stylesheet" href="/css/admin.css" />
                </Helmet>
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <h1 className="title">ENT-Application</h1>
                <div className="c">
                    <h1 style={{ color: 'black' }}>FeedBack</h1>
                    {
                        this.state.userData.length && this.state.userData.map(ada => {
                            return <div className="books">
                                <div className="book">

                                    <div className="details">
                                        <table>
                                            <tr>
                                                <th>ID</th>
                                                <th>User Name</th>
                                                <th>feedback</th>
                                                
                                            </tr>
                                            <tr>
                                                <td>{ada._id}</td>
                                                <td>{ada.name}</td>
                                                <td>{ada.comments}</td>
                                                
                                            </tr>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        })

                    }
                    
                    </div>
                </div>
            
        )
    }
}
export default user;