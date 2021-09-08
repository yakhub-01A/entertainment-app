import React, { Component } from "react";
import { Helmet } from "react-helmet";


class Add_data extends Component {  
    constructor() {
    super();
    this.state = {
        title: "",
        image: "",
        music: "",
        title2: "",
        title3:"",
        video:"",
        number:"",
        imageURL:"",
        joke: "",

    }
}

    handleSubmit=(event)=>{
    event.preventDefault();
    alert("submitted")
    let databody = {
        "title":this.state.title,
        "image": this.state.image,
        "music": this.state.music
    }

    return fetch('/api/add_data/addmusic', {
        method: 'POST',
        body: JSON.stringify(databody),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data)); 
}
handleSubmit1=(event)=>{
    event.preventDefault();
    alert("submitted")
    let databody = {
        "title2":this.state.title2,
        "video": this.state.video
    }

    return fetch('/api/add_data/addvideo', {
        method: 'POST',
        body: JSON.stringify(databody),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data)); 
}
handleSubmit2=(event)=>{
    event.preventDefault();
    alert("submitted");
    
    let databody = {
        "title3":this.state.title3,
        "imageURL": this.state.imageURL
    }


    return fetch('/api/add_data/addcomic',
     {
        method: 'POST',
        body: JSON.stringify(databody),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data)); 
}
handleSubmit3=(event)=>{
    event.preventDefault();
    
    alert("submitted")
    let databody = {
        "number":this.state.number,
        "joke": this.state.joke
        }
        
    return fetch('/api/add_data/addjoke', {
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
        const { title,
        image,
        music,
        title2,
        title3,
        video,
        number,
        imageURL,
        joke
 } = this.state;
        return (
            <div>
                <Helmet>
                    <link rel="stylesheet" href="/css/add_data.css" />
                </Helmet>
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <h1 className="title">ENT-Application</h1>
                <div id="group">
                    <div className="card">
                        <div className="container">
                            <h2>Upload MUSIC</h2>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label for="music_name">Name:</label>
                                    <input type="text" class="form-control" id="music_name" name="title" value={this.state.title} onChange={this.onChange}></input>
                                    <label for="music_img">Image URL:</label>
                                    <input type="text" class="form-control" id="music_img" name="image" value={this.state.image} onChange={this.onChange}></input>
                                    <label for="song">Song URL:</label>
                                    <input type="text" class="form-control" id="song" name="music" value={this.state.music} onChange={this.onChange}></input>
                                    <br></br>
                                    <input type="submit" class="btn btn-info" value="Submit"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card">
                        <div className="container">
                            <h2>Upload Video</h2>
                            <br></br>
                            <form className="form" onSubmit={this.handleSubmit1}>
                                <div className="form-group">
                                    <label for="video_name">Name:</label>
                                    <input type="text" class="form-control" id="video_name" name="title2" value={this.state.title2} onChange={this.onChange}></input>
                                    <br></br>
                                    <label for="video">Video URL:</label>
                                    <input type="text" class="form-control" id="video" value={this.state.video} name="video" onChange={this.onChange}></input>
                                    <br></br>
                                    <br></br>
                                    <input type="submit" class="btn btn-info" value="Submit"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card">
                        <div className="container">
                            <h2>Upload Comic</h2>
                            <form className="form" onSubmit={this.handleSubmit2}>
                                <div className="form-group">
                                    <label for="page_number">Name:</label>
                                    <input type="text" class="form-control" id="page_number" value={this.state.title3} name="title3" onChange={this.onChange}></input>
                                    <br></br>
                                    <label for="comic_img">Image URL:</label>
                                    <input type="text" class="form-control" id="comic_img" value={this.state.imageURL} name="imageURL" onChange={this.onChange}></input>
                                    <br></br>
                                    <input type="submit" class="btn btn-info" value="Submit"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card">
                        <div className="container">
                            <h2>Upload Jokes</h2>
                            <form className="form" onSubmit={this.handleSubmit3}>
                                <div className="form-group">
                                    <label for="joke_num">Joke number:</label>
                                    <input type="text" class="form-control" id="joke_num" name="number" value={this.state.number} onChange={this.onChange}></input>
                                    <label for="joke">Enter Joke:</label>
                                    <textarea class="form-control" id="joke" value={this.state.joke} onChange={this.onChange} name="joke"></textarea>
                                    <br></br>
                                    <input type="submit" class="btn btn-info" value="Submit"  ></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Add_data;