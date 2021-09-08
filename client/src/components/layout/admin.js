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

        axios.get("/api/admin/allusers").then(res => {
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
                    <h1 style={{ color: 'black' }}>USERS</h1>
                    {
                        this.state.userData.length && this.state.userData.map(ada => {
                            return <div className="books">
                                <div className="book">

                                    <div className="details">
                                        <table>
                                            <tr>
                                                <th>ID</th>
                                                <th>User Name</th>
                                                <th>Email</th>
                                                <th>Date registered</th>
                                            </tr>
                                            <tr>
                                                <td>{ada._id}</td>
                                                <td>{ada.name}</td>
                                                <td>{ada.email}</td>
                                                <td>{ada.date}</td>
                                            </tr>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        })

                    }
                    <div className="add_data_button">
                        <Link to="/add_data">
                            <button type="button" class="btn btn-outline-primary btn-lg">Add Data</button>
                        </Link>
                    </div>
                    <div className="button">
                        <Link to="/feedback_data">
                            <button type="button" class="btn btn-outline-primary btn-lg">FeedBack Data</button>
                        </Link>
                    </div>
                    <div className="logout_button">
                        <Link to="/admin_login">
                            <button type="button" class="btn btn-outline-primary btn-lg">Logout</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default user;