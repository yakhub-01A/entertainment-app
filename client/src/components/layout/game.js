import I1 from './images/KRUNKER1.jpg'
import I2 from './images/MR.png'
import I3 from './images/Hordes.png'
import I4 from './images/surviv.png'
import I5 from './images/diep.png'
import { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class game extends Component{
    render() {
        return (
            <div>
                <Helmet>
                    <link rel="stylesheet" href="/css/game_nav.css" />
                    <link rel="stylesheet" href="/css/game.css" />
                </Helmet>
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <header>
                    <a className="logo" href=""><span className="logo_name">ENT APP</span></a>
                    <nav className="a">
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
                <h1 className="title1">
                    Games
                </h1>
                <div className="outer">
                    <div className="inner">
                        <div className="container">
                            <img src={I1} alt="" />
                            <p className="title">krunker</p>
                            <div className="overlay"></div>
                            <div className="button">
                                <a href="https://krunker.io/" target="_blank"> Play </a>
                            </div>
                        </div>
                    </div>
                    <div className="inner">
                        <div className="container">
                            <img src={I2} alt="" />
                            <p className="title">MiniRoyal-2</p>
                            <div className="overlay"></div>
                            <div className="button">
                                <a href="https://miniroyale2.io/" target="_blank"> Play </a>
                            </div>
                        </div>
                    </div>
                    <div className="inner">
                        <div className="container">
                            <img src={I3} alt="" />
                            <p className="title">Hrodes</p>
                            <div className="overlay"></div>
                            <div className="button">
                                <a href="https://hordes.io/" target="_blank"> Play </a>
                            </div>
                        </div>
                    </div>
                    <div className="inner">
                        <div className="container">
                            <img src={I4} alt="" />
                            <p className="title">Surviv</p>
                            <div className="overlay"></div>
                            <div className="button">
                                <a href="https://surviv.io/" target="_blank"> Play </a>
                            </div>
                        </div>
                    </div>
                    <div className="inner">
                        <div className="container">
                            <img src={I5} alt="" />
                            <p style={{color: 'black'}}className="title">Diep</p>
                            <div className="overlay"></div>
                            <div className="button">
                                <a href="https://diep.io/" target="_blank"> Play </a>
                            </div>
                        </div>
                    </div>
                    <div className="inner">
                        <div className="container">
                            <img src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=" alt="" />
                            <p className="title">card title</p>
                            <div className="overlay"></div>
                            <div className="button">
                                <a href="#"> Play </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}

export default game;